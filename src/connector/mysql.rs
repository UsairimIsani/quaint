mod connection;
mod conversion;
mod error;

use crate::{
    ast::{Id, ParameterizedValue, Query},
    connector::{
        transaction::{Connection, Connectional, Transaction, Transactional},
        ResultSet,
    },
    error::Error,
};
use mysql as my;
use r2d2_mysql::pool::MysqlConnectionManager;
use url::Url;

type Pool = r2d2::Pool<MysqlConnectionManager>;
#[allow(unused)] // We implement a trait on the alias, it is used.
type PooledConnection = r2d2::PooledConnection<MysqlConnectionManager>;

/// A connector interface for the MySQL database.
pub struct Mysql {
    pool: Pool,
    pub db_name: Option<String>,
}

impl Mysql {
    // TODO: we should not use this constructor since it does set the db_name field
    pub fn new(conf: mysql::OptsBuilder) -> crate::Result<Mysql> {
        let manager = MysqlConnectionManager::new(conf);

        Ok(Mysql {
            pool: r2d2::Pool::builder().build(manager)?,
            db_name: None,
        })
    }

    pub fn new_from_url(url: &str) -> crate::Result<Mysql> {
        // TODO: connection limit configuration
        let mut builder = my::OptsBuilder::new();
        let url = Url::parse(url)?;
        let db_name = url.path_segments().and_then(|mut segments| segments.next());

        builder.ip_or_hostname(url.host_str());
        builder.tcp_port(url.port().unwrap_or(3306));
        builder.user(Some(url.username()));
        builder.pass(url.password());
        builder.db_name(db_name);
        builder.verify_peer(false);
        builder.stmt_cache_size(Some(1000));

        let manager = MysqlConnectionManager::new(builder);

        Ok(Mysql {
            pool: r2d2::Pool::builder().build(manager)?,
            db_name: db_name.map(|x| x.to_string()),
        })
    }
}

impl Transactional for Mysql {
    type Error = Error;

    fn with_transaction<F, T>(&self, _db: &str, f: F) -> crate::Result<T>
    where
        F: FnOnce(&mut Transaction) -> crate::Result<T>,
    {
        let mut conn = self.pool.get()?;
        let mut tx = conn.start_transaction(true, None, None)?;
        let result = f(&mut tx);

        if result.is_ok() {
            tx.commit()?;
        }

        result
    }
}

impl Connectional for Mysql {
    fn with_connection<F, T>(&self, _db: &str, f: F) -> crate::Result<T>
    where
        F: FnOnce(&mut Connection) -> crate::Result<T>,
        Self: Sized,
    {
        let mut conn = self.pool.get()?;
        let result = f(&mut conn);
        result
    }

    fn execute_on_connection<'a>(&self, db: &str, query: Query<'a>) -> crate::Result<Option<Id>> {
        self.with_connection(&db, |conn| conn.execute(query))
    }

    fn query_on_connection<'a>(&self, db: &str, query: Query<'a>) -> crate::Result<ResultSet> {
        self.with_connection(&db, |conn| conn.query(query))
    }

    fn query_on_raw_connection<'a>(
        &self,
        db: &str,
        sql: &str,
        params: &[ParameterizedValue<'a>],
    ) -> crate::Result<ResultSet> {
        self.with_connection(&db, |conn| conn.query_raw(&sql, &params))
    }
}

impl<'a> Transaction for my::Transaction<'a> {}

impl<'t> Connection for my::Transaction<'t> {
    fn execute<'a>(&mut self, q: Query<'a>) -> crate::Result<Option<Id>> {
        connection::execute(self, q)
    }

    fn query<'a>(&mut self, q: Query<'a>) -> crate::Result<ResultSet> {
        connection::query(self, q)
    }

    fn query_raw<'a>(
        &mut self,
        sql: &str,
        params: &[ParameterizedValue<'a>],
    ) -> crate::Result<ResultSet> {
        connection::query_raw(self, sql, params)
    }

    fn turn_off_fk_constraints(&mut self) -> crate::Result<()> {
        self.query_raw("SET FOREIGN_KEY_CHECKS=0", &[])?;
        Ok(())
    }

    fn turn_on_fk_constraints(&mut self) -> crate::Result<()> {
        self.query_raw("SET FOREIGN_KEY_CHECKS=1", &[])?;
        Ok(())
    }
}

impl Connection for PooledConnection {
    fn execute<'a>(&mut self, q: Query<'a>) -> crate::Result<Option<Id>> {
        connection::execute(self, q)
    }

    fn query<'a>(&mut self, q: Query<'a>) -> crate::Result<ResultSet> {
        connection::query(self, q)
    }

    fn query_raw<'a>(
        &mut self,
        sql: &str,
        params: &[ParameterizedValue<'a>],
    ) -> crate::Result<ResultSet> {
        connection::query_raw(self, sql, params)
    }

    fn turn_off_fk_constraints(&mut self) -> crate::Result<()> {
        self.query_raw("SET FOREIGN_KEY_CHECKS=0", &[])?;
        Ok(())
    }

    fn turn_on_fk_constraints(&mut self) -> crate::Result<()> {
        self.query_raw("SET FOREIGN_KEY_CHECKS=1", &[])?;
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use mysql::OptsBuilder;
    use std::env;

    fn get_config() -> OptsBuilder {
        let mut config = OptsBuilder::new();
        config.ip_or_hostname(env::var("TEST_MYSQL_HOST").ok());
        config.tcp_port(env::var("TEST_MYSQL_PORT").unwrap().parse::<u16>().unwrap());
        config.db_name(env::var("TEST_MYSQL_DB").ok());
        config.pass(env::var("TEST_MYSQL_PASSWORD").ok());
        config.user(env::var("TEST_MYSQL_USER").ok());
        config
    }

    #[test]
    fn should_provide_a_database_connection() {
        let connector = Mysql::new(get_config()).unwrap();

        connector
            .with_connection("TEST", |connection| {
                let res = connection.query_raw(
                    "select * from information_schema.`COLUMNS` where COLUMN_NAME = 'unknown_123'",
                    &[],
                )?;

                // No results expected.
                assert!(res.is_empty());

                Ok(())
            })
            .unwrap()
    }

    #[test]
    fn should_provide_a_database_transaction() {
        let connector = Mysql::new(get_config()).unwrap();

        connector
            .with_transaction("TEST", |transaction| {
                let res = transaction.query_raw(
                    "select * from information_schema.`COLUMNS` where COLUMN_NAME = 'unknown_123'",
                    &[],
                )?;

                // No results expected.
                assert!(res.is_empty());

                Ok(())
            })
            .unwrap()
    }

    const TABLE_DEF: &str = r#"
CREATE TABLE `user`(
    id       int4    PRIMARY KEY     NOT NULL,
    name     text    NOT NULL,
    age      int4    NOT NULL,
    salary   float4
);
"#;

    const CREATE_USER: &str = r#"
INSERT INTO `user` (id, name, age, salary)
VALUES (1, 'Joe', 27, 20000.00 );
"#;

    const DROP_TABLE: &str = "DROP TABLE IF EXISTS `user`;";

    #[test]
    fn should_map_columns_correctly() {
        let connector = Mysql::new(get_config()).unwrap();

        connector
            .with_connection("TEST", |connection| {
                connection.query_raw(DROP_TABLE, &[]).unwrap();
                connection.query_raw(TABLE_DEF, &[]).unwrap();
                connection.query_raw(CREATE_USER, &[]).unwrap();

                let rows = connection.query_raw("SELECT * FROM `user`", &[]).unwrap();
                assert_eq!(rows.len(), 1);

                let row = rows.get(0).unwrap();
                assert_eq!(row["id"].as_i64(), Some(1));
                assert_eq!(row["name"].as_str(), Some("Joe"));
                assert_eq!(row["age"].as_i64(), Some(27));
                assert_eq!(row["salary"].as_f64(), Some(20000.0));

                Ok(())
            })
            .unwrap()
    }

}