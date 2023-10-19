const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const avr = _.mean(numbers);
console.log(`Srednia liczb z tablicy: ${avr}`);