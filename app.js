const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const avr = _.mean(numbers);
console.log('Srednia liczb z tablicy:' + avr);

const minValue = _.min(numbers);
const maxValue = _.max(numbers);
console.log('min wartosc w tablicy: ' + minValue);
console.log('Srednia liczb z tablicy: ' + maxValue);