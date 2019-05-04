// Javascript and HTML!

// let result = document.getElementsByTagName('p');
// console.log(result);

// Object.values(result).forEach((element) => {
//   console.log('This is an element!');
// })

// let result = document.getElementById('title');
// console.log(result);

// document.getElementsByTagName('body')[0].style = 'background-color:red';

// $('body').css('background-color','black');
// $('body').css('color','');

//$('p').eq(2).css('background-color','red');
//$('p').eq(2).css('color','yellow');

// Practice: In jQuery, cause the body of the page to have blue text color.
// Extra: Experiment with other built-in CSS colors.

// $("body").css("background-color", "black");
// $('body').css('text-color', blue');



// let cars = ['mazda', 'nissan', 'ford'];
// let randomCarIndex = Math.floor(Math.random() * cars.length);
// console.log(cars[randomCarIndex]);

// Practice: Make an array of colors, red, green, blue, etc., and cause the body of the page to have a random color.
// Hint: Use Math.random()

let color = ['red', 'green', 'blue', 'black', 'salmon']
let randomColorIndex = Math.floor(Math.random() * color.length);
console.log(color[randomColorIndex]);
$("body").css("background-color", color[randomColorIndex]);

// $('#title').text('My fancy page');

// $('.section').css('background-color','yellow');
// $('.section').text('This is a section of my page.');

// $('.section').first().text('This is the first section of my page.');

// $('.section').eq(1).text('This is the 2nd section of my page.');

// Practice: Make an array of adjectives.  Make the title of the page use a random adjective in the form 'My xxxxx page';

// $('body').append('<div id="special"></div>');
// $('#special').text('I just added this div.');

// let specialId = 'special123';
// $('body').append(`<div id="${specialId}"></div>`);

// $(`#${specialId}`).text(`I just added this div, with an id of ${specialId}.`);

// Practice: Create twenty new divs and attach them to the page body.  Each div should display its order (number) e.g., 1, 2, 3, etc.

//$('.section').text('Hi there');
//$('.section').first().detach(); // keeps data & events for element
//$('.section').first().remove(); // does NOT keep data & events for element

// Practice: With your previous practice exercise, remove a random one of the twenty divs you attached to the body.

// let carHeaders = ['brand','model'];
// let cars = [['mazda','3'],['hyundai','sonata'],['ford','focus']];

// $('body').append('<table id="cars" border="1"><tr class="headers"></tr></table>');

// carHeaders.forEach((header) => {
//   $('#cars .headers').append(`<th>${header}</th>`)
// })

// cars.forEach((car) => {
//   $('#cars').append(`<tr><td>${car[0]}</td><td>${car[1]}</td></tr>`);
// })

//$('.section').first().text($('#cars').html());

// Practice: You have an array of book objects, each with author, title, and pageCount properties.  Create a div for each of them and some text that describes each book.
// Example input:
// [{ title: 'Harry Potter, The Book', author: 'JK Rowling', pageCount: 520 }, {...}, {...}]
// Example output:
// I have a book called Harry Potter, The Book.  It was written by JK Rowling and has 520 pages.
// ...
// ...
