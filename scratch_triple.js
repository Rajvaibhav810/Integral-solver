const Algebrite = require('algebrite');

let f_str = 'y';
let vIn = 'z';
let in1 = 'x-z';
let in2 = 'x+z';

let anti = Algebrite.run(`integral(${f_str}, ${vIn})`);
console.log('anti:', anti);

let nextExpr = Algebrite.run(`defint(${f_str}, ${vIn}, ${in1}, ${in2})`);
console.log('nextExpr:', nextExpr);
