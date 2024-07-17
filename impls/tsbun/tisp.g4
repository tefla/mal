

grammar tisp;

tisp: s_expr+ EOF;

s_expr
  : 'a' #atomExpr
  | 'b' #listExpr
  ;
//s_expr
//  : atom #atomExpr
//  | list #listExpr
////  | array #arrayExpr
////  | map #mapExpr
//  ;
//
//list
//  : '(' s_expr* ')'
//  ;
////array
////  : '[' s_expr* ']'
////  ;
////map
////  : '{' s_expr* '}'
////  ;
//atom
//  : NUMBER
//  | STRING
//  | ID
//  | OPS
//  ;
//OPS
//  : '+' | '-' | '*' | '/' | '%' | '^' | '<' | '>' | '=' | ':'
//  ;
//NUMBER
//  : '-'? ([0-9]* '.')? [0-9]+
//  ;
//STRING
//  : '"' (ESC | ~["\\])* '"'
//  | '\'' (ESC | ~['\\])* '\''
//  ;
//ID
//  : [a-zA-Z_][a-zA-Z_0-9]*
//  ;
//
//fragment ESC
//  : '\\' (["\\/bfnrt] | UNICODE)
//  ;
//fragment UNICODE
//  : 'u' HEX HEX HEX HEX
//  ;
//fragment HEX
//  : [0-9a-fA-F]
//  ;
//WS
//  : ([ \t\r\n,]+
//  | ';' ~[\r\n]*) -> skip
//  ;
