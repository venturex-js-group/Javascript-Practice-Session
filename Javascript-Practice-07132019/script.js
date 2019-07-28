// // named function
// function doIt() {
//   console.log('Doin it')
// }

// console.log(doIt)
// console.log(doIt())
// doIt()

// let stillDoinIt = doIt

// stillDoinIt()

// // anonymous function
// let anonFun = function() {
//   console.log('chillin')
// }

// anonFun()

// let anonFun2 = function(num1, num2) {
//   console.log(num1, num2)
// }

// anonFun2(3, 4)

// Practice: Write an anonymous function that prints your name
// 3 min

// Chloe

// let anonName = function() {
//   console.log('Shia LeBouf')
// }

// anonName()

// // self-invoked, or immediately invoked
// (function() {
//   console.log('chillin')
// })()

// let add5 = function(num) {
//   return num + 5
// }

// console.log(add5())
// console.log(add5(5))
// console.log(add5('5'))

// let myAdd5 = add5
// let shouldBe8 = myAdd5(3)
// console.log(shouldBe8)

// Practice: Write a function that takes two numbers and returns a fun string containing those two numbers
// 5 min

// Brandi

// function fun (num1, num2){
// console.log(num1 + ' is number, so is '+ num2)
// }

// fun(1,2)

// function sumAll() {
//   let sum = 0
//   for(num of arguments) {
//     sum += num
//   }
//   // for(let i = 2; i < arguments.length; i++) {
//   //   sum += arguments[i]
//   // }
//   return sum
// }

// let sum = sumAll(1,2,3,4,5,6,7,8,9,10)
// console.log(sum)

// Practice: Write a function that takes any number of names to invite to your birthday party and returns a string containing the invite list.
// 7 min

// // spread syntax
// let nums = [2,3,4,5]
// let sum2 = sumAll(...nums)
// console.log(sum2)

// function addTwoNumbers(num1, num2) {
//   return num1 + num2
// }

// let numz = [4,5,6]
// let answer = addTwoNumbers(4, 5, 6)
// console.log(answer)

// function doOperation() {
//   let operator = arguments[0]
//   let result = 0
//   for(let i = 1; i < arguments.length; i++) {
//     if(operator == '+')
//       result += arguments[i]
//     else if(operator == '-')
//       result -= arguments[i]
//   }
//   return result
// }

// console.log(doOperation('-', 10, 5))
// console.log(doOperation('+', 2, 3))

// // functions as parameters to other functions

function callMe(anotherFun) {
    anotherFun()
  }
  
  function sayBoo() {
    console.log('boo!')
  }
  
  // callMe()
  callMe(sayBoo)
  // callMe(sayBoo())
  
  // Practice: Write a function that takes two functions and calls them in order.
  // 5 minutes
  
  // // functions as property values
  
  // let myFuns = {
  //   sayBoo: function() {
  //     console.log('boo!')
  //   },
  //   add5: function(num) {
  //     return num + 5
  //   }
  // }
  
  // myFuns.sayBoo()
  // let shouldBe15 = myFuns.add5(10)
  // console.log(shouldBe15)
  
  // let cat = {
  //   name: 'Liz',
  //   type: 'spots',
  //   meow: function() {
  //     console.log('meow!')
  //   }
  // }
  
  // console.log(cat.name)
  // cat.meow()
  // cat['meow']()
  // let catMeow = cat['meow']
  // catMeow()
  // cat.meow()
  
  // cat.meow = function() {
  //   console.log('nice meow')
  // }
  // cat.meow()
  
  // Practice: Make an object that has two properties, each of which is assigned a function.  Have one function add two numbers, and the other function multiple two numbers.
  // 7 minutes
  
  // functions as types
  
  // function cat(name, type) {
  //   this.name = name
  //   this.type = type
  //   this.meow = function() {
  //     console.log('meow!')
  //   }
  // }
  
  // let liz = new cat('Liz', 'marble')
  // let bella = new cat('Bella', 'stripes')
  
  // console.log(liz.name)
  // console.log(bella.name)
  
  // liz.meow()
  // bella.meow()
  
  // Practice: Make a function type for a car, with a few properties and at least one member function.
  // Examples:
  // myCar.mileage
  // myCar.drive()
  // 10 min