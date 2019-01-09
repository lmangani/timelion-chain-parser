var peg = require('pegjs');
var fs = require('fs');
var grammar = fs.readFileSync(__dirname+'/grammar/chain.peg', 'utf8');
var parser = peg.generate(grammar);

module.exports = parser.parse;
