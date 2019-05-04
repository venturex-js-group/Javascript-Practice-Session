// reduce!

//let numbers = [1, 2, 3];

// let addToPrevious = (previous, current) => previous + current;
// let sum = numbers.reduce(addToPrevious);

// console.log(sum);

// let sum = numbers
// .reduce((previous, current) => previous + current);

// console.log(sum);

// let sum = numbers
// .reduce((previous, current) => previous);

// console.log(sum);

// let sum = numbers
// .reduce((previous, current) => previous + (current * 2));

// console.log(sum);

// let sum = numbers
// .reduce((previous, current) => previous + (current * 2), 0);

// console.log(sum);

// let difference = numbers
// .reduce((previous, current) => previous - current, 6);

// console.log(difference);

// Practice: Make an array of at least three numbers and reduce the array by multiplying each element to the previous reduction result.

//let numbers =[2,5,42];
//let sum = numbers.reduce((previous, current) => previous*current);
//console.log(sum)

//let letters = ['c', 'a', 't'];

// let word = letters
// .reduce((p, c) => p + c);
//To get a space between the words use "=letters.join(' ')"

// console.log(word);

// let word = letters
// .reduce((p, c) => p + c + c);

// console.log(word);

// let word = letters
// .reduce((p, c) => p + c + c, '');

// console.log(word);

// let word = letters
// .reduce((p, c) => p + p + c + c);

// console.log(word);

// let word = 'snappy';
// let wordArray = word.split('');
// let echo = wordArray.reduce((p, c) => p + c + c, '')
// console.log(echo)

// Practice: Split a string and reduce the array by concatenating each letter three times.

// let word = 'bro';
// let wordArray = word.split('');
// let echo = wordArray.reduce((p, c)=> p + c + c + c, '')
// console.log(echo)

// let word = 'snappy';
// let wordArray = word.split('');
// let echo = wordArray.reduce((p, c, i) => p + '-' + c + i, '')
// console.log(echo)

// Practice: Split a string and reduce the array by concatenating every other letter.

let word = 'syzygy';
let wordArray = word.split('');
let echo = wordArray.reduce((p,c,i) => p + '-' + c, '')
console.log(echo)