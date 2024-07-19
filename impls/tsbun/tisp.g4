
grammar tisp;

tisp: s_expr+ EOF;

s_expr
  : (list | array | map) #sexpList
  | atom                 #sexpAtom
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
  : ID        #id
  | NUMBER    #number
  | STRING    #string
  | OP        #op
  ;
ID: ':'? [_a-zA-Z]+ [a-zA-Z0-9-_]*;
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