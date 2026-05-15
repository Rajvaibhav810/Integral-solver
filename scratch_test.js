const Algebrite = require('algebrite');
let f = 'x^2 * y';
let anti = Algebrite.run(`integral(${f}, x)`);
console.log('Anti:', anti);
// Eval at x=2
let upper = Algebrite.run(`eval(${anti}, x, 2)`);
console.log('Upper:', upper);
