var N = null;var searchIndex = {};
searchIndex["prisma_query"]={"doc":"prisma-query","items":[[0,"ast","prisma_query","An abstract syntax tree for SQL queries.",N,N],[3,"Column","prisma_query::ast","A column definition.",N,N],[12,"name","","",0,N],[12,"table","","",0,N],[12,"alias","","",0,N],[12,"type_identifier","","",0,N],[3,"Function","","A database function definition",N,N],[12,"typ_","","",1,N],[12,"alias","","",1,N],[3,"Over","","",N,N],[12,"ordering","","",2,N],[12,"partitioning","","",2,N],[3,"RowNumber","","",N,N],[12,"over","","",3,N],[3,"JoinData","","The `JOIN` table and conditions.",N,N],[12,"table","","",4,N],[12,"conditions","","",4,N],[3,"Ordering","","A list of definitions for the `ORDER BY` statement",N,N],[12,"0","","",5,N],[3,"Row","","A collection of values surrounded by parentheses.",N,N],[12,"values","","",6,N],[3,"Select","","A builder for a `SELECT` statement.",N,N],[12,"table","","",7,N],[12,"columns","","",7,N],[12,"conditions","","",7,N],[12,"ordering","","",7,N],[12,"limit","","",7,N],[12,"offset","","",7,N],[12,"joins","","",7,N],[3,"Table","","A table definition",N,N],[12,"typ","","",8,N],[12,"alias","","",8,N],[12,"database","","",8,N],[4,"Compare","","For modeling comparison expression",N,N],[13,"Equals","","`left = right`",9,N],[13,"NotEquals","","`left <> right`",9,N],[13,"LessThan","","`left < right`",9,N],[13,"LessThanOrEquals","","`left <= right`",9,N],[13,"GreaterThan","","`left > right`",9,N],[13,"GreaterThanOrEquals","","`left >= right`",9,N],[13,"In","","`left IN (..)`",9,N],[13,"NotIn","","`left NOT IN (..)`",9,N],[13,"Like","","`left LIKE %..%`",9,N],[13,"NotLike","","`left NOT LIKE %..%`",9,N],[13,"BeginsWith","","`left LIKE ..%`",9,N],[13,"NotBeginsWith","","`left NOT LIKE ..%`",9,N],[13,"EndsInto","","`left LIKE %..`",9,N],[13,"NotEndsInto","","`left NOT LIKE %..`",9,N],[13,"Null","","`value IS NULL`",9,N],[13,"NotNull","","`value IS NOT NULL`",9,N],[4,"ConditionTree","","Tree structures and leaves for condition building.",N,N],[13,"And","","`(left_expression AND right_expression)`",10,N],[13,"Or","","`(left_expression OR right_expression)`",10,N],[13,"Not","","`(NOT expression)`",10,N],[13,"Single","","A single expression leaf",10,N],[13,"NoCondition","","A leaf that does nothing to the condition, `1=1`",10,N],[13,"NegativeCondition","","A leaf that cancels the condition, `1=0`",10,N],[4,"Expression","","A database expression.",N,N],[13,"ConditionTree","","A tree of expressions to evaluate from the deepest value to up",11,N],[13,"Compare","","A comparison expression",11,N],[13,"Value","","A single value, column, row or a nested select",11,N],[4,"FunctionType","","A database function type",N,N],[13,"RowNumber","","",12,N],[4,"Join","","A representation of a `JOIN` statement.",N,N],[13,"Inner","","Implements an `INNER JOIN` with given `JoinData`.",13,N],[13,"LeftOuter","","Implements an `LEFT OUTER JOIN` with given `JoinData`.",13,N],[4,"Order","","The ordering direction",N,N],[13,"Asc","","Ascending",14,N],[13,"Desc","","Descending",14,N],[4,"Query","","A database query",N,N],[13,"Select","","Query for fetching data. E.g. the `SELECT` query.",15,N],[4,"TableType","","",N,N],[13,"Table","","",16,N],[13,"Query","","",16,N],[4,"DatabaseValue","","A value we can compare and use in database queries.",N,N],[13,"Parameterized","","Anything that we must parameterize before querying",17,N],[13,"Column","","A database column",17,N],[13,"Row","","Data in a row form, e.g. (1, 2, 3)",17,N],[13,"Select","","A nested `SELECT` statement",17,N],[13,"Function","","A database function call",17,N],[13,"Asterisk","","An asterisk",17,N],[4,"ParameterizedValue","","A value we must parameterize for the prepared statement.",N,N],[13,"Null","","A database null",18,N],[13,"Integer","","An integer value",18,N],[13,"Real","","A floating point value",18,N],[13,"Text","","A string value",18,N],[13,"Boolean","","a boolean value",18,N],[5,"row_number","","A number from 1 to n in specified order",N,[[],["rownumber"]]],[11,"new","","Create a column definition.",0,[[["s"]],["self"]]],[11,"table","","Include the table name in the column expression.",0,[[["self"],["table"]],["self"]]],[11,"alias","","Give the column an alias in the query.",0,[[["self"],["s"]],["self"]]],[11,"and","","An `AND` statement, is true when both sides are true.",10,[[["e"],["j"]],["conditiontree"]]],[11,"or","","An `OR` statement, is true when one side is true.",10,[[["e"],["j"]],["conditiontree"]]],[11,"not","","A `NOT` statement, is true when the expression is false.",10,[[["e"]],["conditiontree"]]],[11,"single","","A single leaf, is true when the expression is true.",10,[[["e"]],["conditiontree"]]],[11,"invert_if","","Inverts the entire condition tree if condition is met.",10,[[["self"],["bool"]],["conditiontree"]]],[11,"is_empty","","",2,[[["self"]],["bool"]]],[11,"alias","","Give the function an alias in the query.",1,[[["self"],["s"]],["self"]]],[11,"over","","Define the order of the row number. Is the row order if not set.",3,[[["self"],["t"]],["self"]]],[11,"partition_by","","Define the partitioning of the row number",3,[[["self"],["t"]],["self"]]],[11,"new","","",5,[[["vec",["orderdefinition"]]],["self"]]],[11,"is_empty","","",5,[[["self"]],["bool"]]],[11,"new","","",6,[[],["self"]]],[11,"add","","",6,[[["self"],["t"]],["self"]]],[11,"from","","Creates a new `SELECT` statement from the given table.",7,[[["t"]],["self"]]],[11,"value","","Selects a static value as the column.",7,[[["self"],["t"]],["self"]]],[11,"column","","Adds a column to be selected.",7,[[["self"],["t"]],["self"]]],[11,"columns","","A bulk method to select multiple values.",7,[[["self"],["vec"]],["self"]]],[11,"so_that","","Adds `WHERE` conditions to the query. See Comparable for more examples.",7,[[["self"],["t"]],["self"]]],[11,"inner_join","","Adds `INNER JOIN` clause to the query.",7,[[["self"],["j"]],["self"]]],[11,"left_outer_join","","Adds `LEFT OUTER JOIN` clause to the query.",7,[[["self"],["j"]],["self"]]],[11,"order_by","","Adds an ordering to the `ORDER BY` section.",7,[[["self"],["t"]],["self"]]],[11,"limit","","Sets the `LIMIT` value.",7,[[["self"],["usize"]],["self"]]],[11,"offset","","Sets the `OFFSET` value.",7,[[["self"],["usize"]],["self"]]],[11,"database","","Define in which database the table is located",8,[[["self"],["t"]],["self"]]],[6,"OrderDefinition","","",N,N],[8,"Comparable","","An item that can be compared against other values in the database.",N,N],[10,"equals","","Tests if both sides are the same value.",19,[[["self"],["t"]],["compare"]]],[10,"not_equals","","Tests if both sides are not the same value.",19,[[["self"],["t"]],["compare"]]],[10,"less_than","","Tests if the left side is smaller than the right side.",19,[[["self"],["t"]],["compare"]]],[10,"less_than_or_equals","","Tests if the left side is smaller than the right side or the same.",19,[[["self"],["t"]],["compare"]]],[10,"greater_than","","Tests if the left side is bigger than the right side.",19,[[["self"],["t"]],["compare"]]],[10,"greater_than_or_equals","","Tests if the left side is bigger than the right side or the same.",19,[[["self"],["t"]],["compare"]]],[10,"in_selection","","Tests if the left side is included in the right side collection.",19,[[["self"],["t"]],["compare"]]],[10,"not_in_selection","","Tests if the left side is not included in the right side collection.",19,[[["self"],["t"]],["compare"]]],[10,"like","","Tests if the left side includes the right side string.",19,[[["self"],["t"]],["compare"]]],[10,"not_like","","Tests if the left side does not include the right side string.",19,[[["self"],["t"]],["compare"]]],[10,"begins_with","","Tests if the left side starts with the right side string.",19,[[["self"],["t"]],["compare"]]],[10,"not_begins_with","","Tests if the left side doesn't start with the right side string.",19,[[["self"],["t"]],["compare"]]],[10,"ends_into","","Tests if the left side ends into the right side string.",19,[[["self"],["t"]],["compare"]]],[10,"not_ends_into","","Tests if the left side does not end into the right side string.",19,[[["self"],["t"]],["compare"]]],[10,"is_null","","Tests if the left side is `NULL`.",19,[[["self"]],["compare"]]],[10,"is_not_null","","Tests if the left side is not `NULL`.",19,[[["self"]],["compare"]]],[8,"Conjuctive","","`AND`, `OR` and `NOT` conjuctive implementations.",N,N],[10,"and","","Builds an `AND` condition having `self` as the left leaf and `other` as the right.",20,[[["self"],["e"]],["conditiontree"]]],[10,"or","","Builds an `OR` condition having `self` as the left leaf and `other` as the right.",20,[[["self"],["e"]],["conditiontree"]]],[10,"not","","Builds a `NOT` condition having `self` as the condition.",20,[[["self"]],["conditiontree"]]],[8,"Joinable","","An item that can be joined.",N,N],[10,"on","","Add the `JOIN` conditions.",21,[[["self"],["t"]],["joindata"]]],[8,"IntoOrderDefinition","","Convert the value into an order definition with order item and direction",N,N],[10,"into_order_definition","","",22,[[["self"]],["orderdefinition"]]],[8,"Orderable","","An item that can be used in the `ORDER BY` statement",N,N],[10,"order","","Order by `self` in the given order",23,[[["self"],["option",["order"]]],["orderdefinition"]]],[11,"ascend","","Change the order to `ASC`",23,[[["self"]],["orderdefinition"]]],[11,"descend","","Change the order to `DESC`",23,[[["self"]],["orderdefinition"]]],[8,"Aliasable","","An object that can be aliased.",N,N],[10,"alias","","Alias table for usage elsewhere in the query.",24,[[["self"],["t"]],["table"]]],[0,"visitor","prisma_query","Visitors for reading an abstract SQL syntax tree, generating the query and gathering parameters in the right order.",N,N],[3,"Sqlite","prisma_query::visitor","A visitor for generating queries for an SQLite database. Requires that `rusqlite` feature flag is selected.",N,N],[8,"Visitor","","A function travelling through the query AST, building the final query string and gathering parameters sent to the database together with the query.",N,N],[18,"C_PARAM","","Parameter character when parameterizing values in the query.",25,N],[18,"C_BACKTICK","","Backtick character to surround identifiers, such as column and table names.",25,N],[18,"C_WILDCARD","","Wildcard character to be used in `LIKE` queries.",25,N],[10,"build","","Convert the given `Query` to an SQL string and a vector of parameters. When certain parameters are replaced with the `C_PARAM` character in the query, the vector should contain the parameter value in the right position.",25,N],[10,"add_parameter","","When called, the visitor decided to not render the parameter into the query, replacing it with the `C_PARAM`, calling `add_parameter` with the replaced value.",25,[[["self"],["parameterizedvalue"]]]],[10,"visit_limit","","The `LIMIT` statement in the query",25,[[["self"],["option",["usize"]]],["string"]]],[10,"visit_offset","","The `OFFSET` statement in the query",25,[[["self"],["usize"]],["string"]]],[10,"visit_function","","A database function.",25,[[["self"],["function"]],["string"]]],[10,"visit_partitioning","","A partitioning statement.",25,[[["self"],["over"]],["string"]]],[11,"visit_joins","","The join statements in the query",25,[[["self"],["vec",["join"]]],["string"]]],[11,"visit_join_data","","",25,[[["self"],["joindata"]],["string"]]],[11,"visit_select","","A walk through a `SELECT` statement",25,[[["self"],["select"]],["string"]]],[11,"delimited_identifiers","","A helper for delimiting an identifier, surrounding every part with `C_BACKTICK` and delimiting the values with a `.`",25,[[["vec",["string"]]],["string"]]],[11,"visit_query","","A walk through a complete `Query` statement",25,[[["self"],["query"]],["string"]]],[11,"visit_columns","","The selected columns",25,[[["self"],["vec",["databasevalue"]]],["string"]]],[11,"visit_database_value","","A visit to a value used in an expression",25,[[["self"],["databasevalue"]],["string"]]],[11,"visit_table","","A database table identifier",25,[[["self"],["table"],["bool"]],["string"]]],[11,"visit_column","","A database column identifier",25,[[["self"],["column"]],["string"]]],[11,"visit_row","","A row of data used as an expression",25,[[["self"],["row"]],["string"]]],[11,"visit_conditions","","A walk through the query conditions",25,[[["self"],["conditiontree"]],["string"]]],[11,"visit_expression","","An expression that can either be a single value, a set of conditions or a comparison call",25,[[["self"],["expression"]],["string"]]],[11,"visit_compare","","A comparison expression",25,[[["self"],["compare"]],["string"]]],[11,"visit_ordering","","A visit in the `ORDER BY` section of the query",25,[[["self"],["ordering"]],["string"]]],[14,"comparable","prisma_query","",N,N],[11,"into","prisma_query::ast","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,N],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,N],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,N],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,N],[11,"from","","",13,[[["t"]],["t"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"to_owned","","",14,[[["self"]],["t"]]],[11,"clone_into","","",14,N],[11,"from","","",14,[[["t"]],["t"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"to_owned","","",16,[[["self"]],["t"]]],[11,"clone_into","","",16,N],[11,"from","","",16,[[["t"]],["t"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"to_owned","","",17,[[["self"]],["t"]]],[11,"clone_into","","",17,N],[11,"from","","",17,[[["t"]],["t"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"into","","",18,[[["self"]],["u"]]],[11,"to_owned","","",18,[[["self"]],["t"]]],[11,"clone_into","","",18,N],[11,"from","","",18,[[["t"]],["t"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"get_type_id","","",18,[[["self"]],["typeid"]]],[11,"try_into","","",18,[[["self"]],["result"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"into","prisma_query::visitor","",26,[[["self"]],["u"]]],[11,"from","","",26,[[["t"]],["t"]]],[11,"try_from","","",26,[[["u"]],["result"]]],[11,"borrow","","",26,[[["self"]],["t"]]],[11,"get_type_id","","",26,[[["self"]],["typeid"]]],[11,"try_into","","",26,[[["self"]],["result"]]],[11,"borrow_mut","","",26,[[["self"]],["t"]]],[11,"equals","prisma_query::ast","",0,[[["self"],["t"]],["compare"]]],[11,"not_equals","","",0,[[["self"],["t"]],["compare"]]],[11,"less_than","","",0,[[["self"],["t"]],["compare"]]],[11,"less_than_or_equals","","",0,[[["self"],["t"]],["compare"]]],[11,"greater_than","","",0,[[["self"],["t"]],["compare"]]],[11,"greater_than_or_equals","","",0,[[["self"],["t"]],["compare"]]],[11,"in_selection","","",0,[[["self"],["t"]],["compare"]]],[11,"not_in_selection","","",0,[[["self"],["t"]],["compare"]]],[11,"like","","",0,[[["self"],["t"]],["compare"]]],[11,"not_like","","",0,[[["self"],["t"]],["compare"]]],[11,"begins_with","","",0,[[["self"],["t"]],["compare"]]],[11,"not_begins_with","","",0,[[["self"],["t"]],["compare"]]],[11,"ends_into","","",0,[[["self"],["t"]],["compare"]]],[11,"not_ends_into","","",0,[[["self"],["t"]],["compare"]]],[11,"is_null","","",0,[[["self"]],["compare"]]],[11,"is_not_null","","",0,[[["self"]],["compare"]]],[11,"equals","","",6,[[["self"],["t"]],["compare"]]],[11,"not_equals","","",6,[[["self"],["t"]],["compare"]]],[11,"less_than","","",6,[[["self"],["t"]],["compare"]]],[11,"less_than_or_equals","","",6,[[["self"],["t"]],["compare"]]],[11,"greater_than","","",6,[[["self"],["t"]],["compare"]]],[11,"greater_than_or_equals","","",6,[[["self"],["t"]],["compare"]]],[11,"in_selection","","",6,[[["self"],["t"]],["compare"]]],[11,"not_in_selection","","",6,[[["self"],["t"]],["compare"]]],[11,"like","","",6,[[["self"],["t"]],["compare"]]],[11,"not_like","","",6,[[["self"],["t"]],["compare"]]],[11,"begins_with","","",6,[[["self"],["t"]],["compare"]]],[11,"not_begins_with","","",6,[[["self"],["t"]],["compare"]]],[11,"ends_into","","",6,[[["self"],["t"]],["compare"]]],[11,"not_ends_into","","",6,[[["self"],["t"]],["compare"]]],[11,"is_null","","",6,[[["self"]],["compare"]]],[11,"is_not_null","","",6,[[["self"]],["compare"]]],[11,"equals","","",17,[[["self"],["t"]],["compare"]]],[11,"not_equals","","",17,[[["self"],["t"]],["compare"]]],[11,"less_than","","",17,[[["self"],["t"]],["compare"]]],[11,"less_than_or_equals","","",17,[[["self"],["t"]],["compare"]]],[11,"greater_than","","",17,[[["self"],["t"]],["compare"]]],[11,"greater_than_or_equals","","",17,[[["self"],["t"]],["compare"]]],[11,"in_selection","","",17,[[["self"],["t"]],["compare"]]],[11,"not_in_selection","","",17,[[["self"],["t"]],["compare"]]],[11,"like","","",17,[[["self"],["t"]],["compare"]]],[11,"not_like","","",17,[[["self"],["t"]],["compare"]]],[11,"begins_with","","",17,[[["self"],["t"]],["compare"]]],[11,"not_begins_with","","",17,[[["self"],["t"]],["compare"]]],[11,"ends_into","","",17,[[["self"],["t"]],["compare"]]],[11,"not_ends_into","","",17,[[["self"],["t"]],["compare"]]],[11,"is_null","","",17,[[["self"]],["compare"]]],[11,"is_not_null","","",17,[[["self"]],["compare"]]],[11,"and","","",9,[[["self"],["e"]],["conditiontree"]]],[11,"or","","",9,[[["self"],["e"]],["conditiontree"]]],[11,"not","","",9,[[["self"]],["conditiontree"]]],[11,"and","","",10,[[["self"],["e"]],["conditiontree"]]],[11,"or","","",10,[[["self"],["e"]],["conditiontree"]]],[11,"not","","",10,[[["self"]],["conditiontree"]]],[11,"and","","",11,[[["self"],["e"]],["conditiontree"]]],[11,"or","","",11,[[["self"],["e"]],["conditiontree"]]],[11,"not","","",11,[[["self"]],["conditiontree"]]],[11,"on","","",8,[[["self"],["t"]],["joindata"]]],[11,"order","","",0,[[["self"],["option",["order"]]],["orderdefinition"]]],[11,"into_order_definition","","",0,[[["self"]],["orderdefinition"]]],[11,"into_order_definition","prisma_query","",27,[[["self"]],["orderdefinition"]]],[11,"alias","prisma_query::ast","",8,[[["self"],["t"]],["self"]]],[11,"build","prisma_query::visitor","",26,N],[11,"add_parameter","","",26,[[["self"],["parameterizedvalue"]]]],[11,"visit_limit","","",26,[[["self"],["option",["usize"]]],["string"]]],[11,"visit_function","","",26,[[["self"],["function"]],["string"]]],[11,"visit_partitioning","","",26,[[["self"],["over"]],["string"]]],[11,"visit_offset","","",26,[[["self"],["usize"]],["string"]]],[11,"into","prisma_query::ast","",0,[[["self"]],["databasevalue"]]],[11,"into","","",9,[[["self"]],["conditiontree"]]],[11,"into","","",9,[[["self"]],["expression"]]],[11,"into","","",10,[[["self"]],["expression"]]],[11,"into","","",7,[[["self"]],["databasevalue"]]],[11,"into","","",7,[[["self"]],["query"]]],[11,"into","","",18,[[["self"]],["databasevalue"]]],[11,"into","","",6,[[["self"]],["databasevalue"]]],[11,"into","","",1,[[["self"]],["databasevalue"]]],[11,"default","","",0,[[],["column"]]],[11,"default","","",10,[[],["self"]]],[11,"default","","",2,[[],["over"]]],[11,"default","","",3,[[],["rownumber"]]],[11,"default","","",5,[[],["ordering"]]],[11,"default","","",6,[[],["row"]]],[11,"default","","",7,[[],["select"]]],[11,"eq","","",0,[[["self"],["column"]],["bool"]]],[11,"ne","","",0,[[["self"],["column"]],["bool"]]],[11,"eq","","",9,[[["self"],["compare"]],["bool"]]],[11,"ne","","",9,[[["self"],["compare"]],["bool"]]],[11,"eq","","",10,[[["self"],["conditiontree"]],["bool"]]],[11,"ne","","",10,[[["self"],["conditiontree"]],["bool"]]],[11,"eq","","",11,[[["self"],["expression"]],["bool"]]],[11,"ne","","",11,[[["self"],["expression"]],["bool"]]],[11,"eq","","",1,[[["self"],["function"]],["bool"]]],[11,"ne","","",1,[[["self"],["function"]],["bool"]]],[11,"eq","","",12,[[["self"],["functiontype"]],["bool"]]],[11,"ne","","",12,[[["self"],["functiontype"]],["bool"]]],[11,"eq","","",2,[[["self"],["over"]],["bool"]]],[11,"ne","","",2,[[["self"],["over"]],["bool"]]],[11,"eq","","",3,[[["self"],["rownumber"]],["bool"]]],[11,"ne","","",3,[[["self"],["rownumber"]],["bool"]]],[11,"eq","","",4,[[["self"],["joindata"]],["bool"]]],[11,"ne","","",4,[[["self"],["joindata"]],["bool"]]],[11,"eq","","",13,[[["self"],["join"]],["bool"]]],[11,"ne","","",13,[[["self"],["join"]],["bool"]]],[11,"eq","","",5,[[["self"],["ordering"]],["bool"]]],[11,"ne","","",5,[[["self"],["ordering"]],["bool"]]],[11,"eq","","",14,[[["self"],["order"]],["bool"]]],[11,"eq","","",6,[[["self"],["row"]],["bool"]]],[11,"ne","","",6,[[["self"],["row"]],["bool"]]],[11,"eq","","",7,[[["self"],["select"]],["bool"]]],[11,"ne","","",7,[[["self"],["select"]],["bool"]]],[11,"eq","","",16,[[["self"],["tabletype"]],["bool"]]],[11,"ne","","",16,[[["self"],["tabletype"]],["bool"]]],[11,"eq","","",8,[[["self"],["table"]],["bool"]]],[11,"ne","","",8,[[["self"],["table"]],["bool"]]],[11,"eq","","",18,[[["self"],["parameterizedvalue"]],["bool"]]],[11,"ne","","",18,[[["self"],["parameterizedvalue"]],["bool"]]],[11,"eq","","",17,[[["self"],["databasevalue"]],["bool"]]],[11,"ne","","",17,[[["self"],["databasevalue"]],["bool"]]],[11,"from","","",0,[[["str"]],["column"]]],[11,"from","","",0,N],[11,"from","","",0,N],[11,"from","","",0,[[["string"]],["column"]]],[11,"from","","",0,N],[11,"from","","",0,N],[11,"from","","",10,[[["select"]],["conditiontree"]]],[11,"from","","",11,[[["select"]],["expression"]]],[11,"from","","",1,[[["rownumber"]],["function"]]],[11,"from","","",6,[[["vec"]],["row"]]],[11,"from","","",6,N],[11,"from","","",6,N],[11,"from","","",6,N],[11,"from","","",6,N],[11,"from","","",8,[[["select"]],["table"]]],[11,"from","","",17,[[["vec"]],["databasevalue"]]],[11,"clone","","",0,[[["self"]],["column"]]],[11,"clone","","",9,[[["self"]],["compare"]]],[11,"clone","","",10,[[["self"]],["conditiontree"]]],[11,"clone","","",11,[[["self"]],["expression"]]],[11,"clone","","",1,[[["self"]],["function"]]],[11,"clone","","",12,[[["self"]],["functiontype"]]],[11,"clone","","",2,[[["self"]],["over"]]],[11,"clone","","",3,[[["self"]],["rownumber"]]],[11,"clone","","",4,[[["self"]],["joindata"]]],[11,"clone","","",13,[[["self"]],["join"]]],[11,"clone","","",5,[[["self"]],["ordering"]]],[11,"clone","","",14,[[["self"]],["order"]]],[11,"clone","","",6,[[["self"]],["row"]]],[11,"clone","","",7,[[["self"]],["select"]]],[11,"clone","","",16,[[["self"]],["tabletype"]]],[11,"clone","","",8,[[["self"]],["table"]]],[11,"clone","","",18,[[["self"]],["parameterizedvalue"]]],[11,"clone","","",17,[[["self"]],["databasevalue"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",14,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",16,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",18,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",17,[[["self"],["formatter"]],["result"]]],[11,"bind","","",18,[[["self"],["statement"],["usize"]],["sqliteresult"]]],[11,"ascend","","Change the order to `ASC`",23,[[["self"]],["orderdefinition"]]],[11,"descend","","Change the order to `DESC`",23,[[["self"]],["orderdefinition"]]]],"paths":[[3,"Column"],[3,"Function"],[3,"Over"],[3,"RowNumber"],[3,"JoinData"],[3,"Ordering"],[3,"Row"],[3,"Select"],[3,"Table"],[4,"Compare"],[4,"ConditionTree"],[4,"Expression"],[4,"FunctionType"],[4,"Join"],[4,"Order"],[4,"Query"],[4,"TableType"],[4,"DatabaseValue"],[4,"ParameterizedValue"],[8,"Comparable"],[8,"Conjuctive"],[8,"Joinable"],[8,"IntoOrderDefinition"],[8,"Orderable"],[8,"Aliasable"],[8,"Visitor"],[3,"Sqlite"],[6,"OrderDefinition"]]};
initSearch(searchIndex);
