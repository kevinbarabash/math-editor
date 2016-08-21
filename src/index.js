const PEG = require('pegjs');
const grammar = require('raw!./grammar.peg');

const parser = PEG.buildParser(grammar);

const input = `a = [x+1 2*x 3*cos(y)
4 5*sqrt(2) 6
7 sqrt(2) a(1,2)c]`;

const tree = parser.parse(input);
// console.log(JSON.stringify(tree, null, 4));

console.log(JSON.stringify(parser.parse('x = 2 + 3i'), null, 4));

// const tree = parser.parse('1 + 2 * (3.002^-2 - a^-(b*c)) - -.9/d + a/b*c/d');
//
// console.log(JSON.stringify(tree, null, 4));
//
// const tree2 = parser.parse('A = (a, b) - (-1, 0.3 * b)');
//
// console.log(JSON.stringify(tree2, null, 4));
//
// const tree3 = parser.parse('2x - 3xy = 7z - pq');
//
// console.log(JSON.stringify(tree3, null, 4));
