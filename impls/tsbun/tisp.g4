
grammar tisp;

tisp: s_expr+ EOF;

s_expr
  : (list | array | map)
  | atom
  ;
list
  : '(' s_expr* ')'
  ;
array
  : '[' s_expr* ']'
  ;
map
  : '{' s_expr* '}'
  ;
atom
  : ID
  | NUMBER
  | STRING
  | OP
  | key
  ;
key: ':' ID;
ID: [_a-zA-Z]+ [a-zA-Z0-9-_]*;
NUMBER
  : '-'? ([0-9]* '.')? [0-9]+
  ;
STRING
  : '"' (~["])* '"'
  ;
OP
  : '+' | '-' | '*' | '/' | '%' | '^'
  | '=' | '!=' | '<' | '<=' | '>' | '>='
  | '&&' | '||' | '!' | '->' | '-->>'
  | '++' | '--'
  | '<<' | '>>' | '>>>' | '<<<'
  | '&' | '|' | '~'
  ;
WS
  : (
    [ \t\n\r,]+ | ';' ~[\r\n]*
  )-> skip;