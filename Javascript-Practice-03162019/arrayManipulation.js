// Working with arrays: filter, map, reduce

//let numbers = [1,0,7,4,5,2,3];

// let lessThanFiveFilter = (number) => number < 5;
// let lessThanFive = numbers.filter(lessThanFiveFilter);
// console.log(lessThanFive);

// let lessThanFive = numbers.filter((number) => number < 5);
// console.log(lessThanFive);

// function includeInNewArray(number) { // returns boolean
//   return number === 3;
// }

// let myNums = numbers.filter(includeInNewArray);
// console.log(myNums);

// let myNums = numbers.filter((number) => false);
// console.log(myNums);

// let myNums = numbers.filter((number) => number == '7');
// console.log(myNums);

// Practice: Make an array of letters, some of which repeat, then filter only the vowels into a new array.

let numbers = [1,7,4,5,2,3];

// let myNums = numbers.map((number) => number + 1);
// console.log(myNums);

// let myNums = numbers.map((number) => number * number);
// console.log(myNums);

// let myNums = numbers.map((number) => 1);
// console.log(myNums);

// let books = [
//   {title:'Huckleberry Finn',author: 'Mark Twain'},
//   {title:'To Kill A Mockingbird', author: 'Harper Lee'},
//   {title:'Harry Potter, Qliff Notes', author: 'Radu'},
//   {title:'Tom Sawyer', author: 'Mark Twain'}];
//let firstLetters = books.map((book) => book.title.substring(0,1));
// console.log(firstLetters);

// let myTitles = books
// .filter((book) => book.author == 'Mark Twain')
// .map((book) => { 
//   let fancyBook = { myTitle: book.title, myAuthor: book.author,
//   firstLetterOfTitle: book.title.substring(0,1) };
//   // if(book.title == 'Huckleberry Finn') {
//   //   return book;
//   // } 
//   // else {
//   //   return fancyBook;
//   // }
//   return fancyBook;
// });
// console.log(myTitles);

// let numObjs = numbers.map((number) => { return { value: number,
// isOdd: number%2 != 0 }})
// console.log(numObjs)

// Practice: Map your array of letters to uppercase each letter (or lowercase if you did them in uppercase).


//let letters = ['a','b','c'];
// let myLet = letters.map((letter) => 
// makeMyLetterFancy(letter, getFanciness()));
// console.log(myLet);

// function makeMyLetterFancy(letter, fanciness) {
//   return letter + fanciness;
// }
// function getFanciness() {
//   return '*';
// }

// let letters = [['b','c','d'],['a','e','i']];
// let result = letters.map((letterArray) => 
//   letterArray.map((letter) => 
//     letter + '*'));
// console.log(result[0].concat(result[1]).join(''));
// console.log(result);


// let myNums = numbers
// .filter((number) => number < 5)
// .map((number) => number + 1);
// console.log(myNums);

// let myNums = numbers
// .filter((number) => number < 5)
// .map((number) => number + 1)
// .filter((number) => number < 5);
// console.log(myNums);

// Practice: Filter all the vowels, then map them to uppercase.

// let movies = [{
//   title: 'Aliens',
//   genre: 'Science Fiction'
// },{
//   title: 'Jack and Jill',
//   genre: 'Comedy'
// },{
//   title: 'Ex Machina',
//   genre: 'Science Fiction'
// }];

// let sciFiFilter = (movie) => movie.genre == 'Science Fiction';
// let sciFiMovies = movies.filter(sciFiFilter);
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => movie.genre == 'Science Fiction');
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => true);
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => false);
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => movie.genre);
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => movie.genre == 'Science Fiction');
// sciFiMovieTitles = sciFiMovies.map((movie) => movie.title);
// console.log(sciFiMovieTitles);

// let titles = movies
// .filter((movie) => movie.genre == 'Science Fiction')
// .map((movie) => movie.title);
// console.log(titles);

// let titles = movies
// .filter((movie) => movie.genre == 'Science Fiction')
// .map((movie) => movie.title)
// .filter((title) => title.indexOf(' ') >= 0)
// console.log(titles);

// let genres = movies
// .filter((movie) => movie.genre == 'Science Fiction')
// .map((movie) => movie.genre);
// console.log(genres);

// let titles = movies
// .filter((movie) => movie.genre == 'Science Fiction')
// .map((movie) => movie.title[0]);
// console.log(titles);

// Practice

// Array.reduce()