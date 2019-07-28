// Also try jsfiddle.net
// Practice: Take a comma-delimited string of numbers (stock prices), and print a chart, where each line starts with the time index (array index), colon, then a number of dashes in proportion to the price.
// Example input:
// 4,3,10,9,5,1,6
// 0:----
// 1:---
// 2:----------
// 3:---------
// 4:-----
// 5:-
// 6:------

// Hayley & Ajay's solution:

let priceString = '-1,0,4,3,10,9,5,1,6'
var stockPrices = priceString.split(',')
let lengthOfArray = stockPrices.length

var i;
for (i = 0; i <lengthOfArray; i++) { 
  var prefix = i + ":"
  //var postfix = ''
  for(let j = 0; j < stockPrices[i]; j++) {
    prefix += '-'
  }
  
  console.log(prefix/* + postfix */)
}





// Practice: Take a string and return that string, but with a number after each character, denoting the number of times it appears in the string.
// Example input:
// hello, how are you?
// Example output:
// h2e2l2,1 3h2o3w1 3a1r1e2 3y1o3u1?1

// Laura's solution:

let input = 'visualize realize!';

function getCharCountString(s){
  let newString = ''
  let counts = findLetterAppearances(s)
  console.log(counts)
  for(let i=0; i< s.length; i++){
    let c = s.charAt(i)
    let currentCount = counts[c]
    newString += c + currentCount
  }
  return newString
}

function findLetterAppearances(string){
  let inputString = string.split('');
  let charCount = {}
  for(let i=0; i< inputString.length; i++){
    let c = string.charAt(i)
    //console.log('the current letter is:' + c)
    // if we don't have a count, initialize to zero
    if(!charCount[c]) charCount[c] = 0
    // if we do have a count, increment by one
    charCount[c] += 1
  }
  //console.log(charCount);
  return charCount
}

console.log(getCharCountString(input));








// Practice: Take an array of company employees and return an object of company statistics.  There should be one property in this object, for each property found in an employee.  Each property should be mapped to an object containing property values, mapped to the number of employees matching that property value.  You can assume that all employees have the same set of properties.
// Example input:
// [
//     { firstName: 'Bob', gender: 'male', performance: 'good' },
//     { firstName: 'Alice', gender: 'female', performance: 'good' },
//     { firstName: 'Sam', gender: 'male', performance: 'excellent' },
//     { firstName: 'Sarah', gender: 'female', performance: 'bad' },
// ]
// Example output:
// {
//   firstName: {
//     'Bob': 1, 'Alice': 1, 'Sam': 1, 'Sarah': 1
//   },
//   gender: {
//     'male': 2, 'female': 2
//   },
//   performance: {
//     'good': 2, 'excellent': 1, 'bad': 1
//   }
// }