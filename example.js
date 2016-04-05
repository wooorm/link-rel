// Dependencies:
var linkRel = require('./index.js');

// Slicing the first few items:
var head = linkRel.slice(0, 10);

// Yields:
console.log('js', require('util').inspect(head));

// And, computing `length`:
var length = linkRel.length;

// Yields:
console.log('js', String(length));
