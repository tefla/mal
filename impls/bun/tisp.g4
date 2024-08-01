grammar tisp;

tisp
    : sexpr+ EOF
    ;

sexpr
    : atom
    | list
    ;
list
    : '(' sexpr* ')'
    ;
atom
    : NUMBER
    | STRING
    | SQAT
    ;
SQAT: '~@';
NUMBER
    : ([0-9]* '.')? [0-9]+;
STRING
    : '"' ~ '"'* '"'
    ;

WS
    : [ \r\n\t]+ -> skip
    ;

