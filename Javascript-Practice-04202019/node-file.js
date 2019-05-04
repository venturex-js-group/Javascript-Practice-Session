// APIs!
// Radu Istrate
// radu@istrate.com

// Please install Node and NPM on your machines, if you don't have them already.

// Windows:
// https://blog.teamtreehouse.com/install-node-js-npm-windows

// Mac:
// https://blog.teamtreehouse.com/install-node-js-npm-mac

// Okay, here we go ...

// $.ajax({
//   url: 'https://www.yahoo.com',
//   success: (response) => {
//     console.log(response)
//   },
//   error: (xhr, status, error) => {
//     console.log(status)
//   }
// })

// $.ajax({
//   url: 'https://api.github.com',
//   success: (response) => {
//     console.log(response)
//   },
//   error: (xhr, status, error) => {
//     console.log(status)
//   }
// })

// $.ajax({
//   url: 'https://api.github.com',
//   success: (response) => {
//     //let repositoryUrl = response.repository_url
//     let repositoryUrl = response['repository_url']
//     console.log(repositoryUrl)
//   },
//   error: (xhr, status, error) => {
//     console.log(status)
//   }
// })

// Practice: Write an ajax request to github.  Print out the number of properties in the response object.  Also print out all the property keys (without the values).
// Hint: Use Object.keys()

// make a folder for your API
// open the folder in Visual Studio Code
// open a new terminal in VS Code
// in the terminal:
// npm init (follow the prompts)
// npm install --save express (installs expressjs web framework)
// make a new file called "index.js"
// paste the following into index.js (uncomment after pasting):

// // ---------------------------
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// // ---------------------------

// at the terminal:
// node index.js

// $.ajax({
//   url: 'http://localhost:3000',
//   success: (response) => {
//     console.log(response)
//   },
//   error: (xhr, status, error) => {
//     console.log(status)
//   }
// })

// to enable CORS:

// at the terminal:
// npm install --save cors

// in the API code:
// const cors = require('cors')
// ...
// app.use(cors())

// let's try again!
// let's examine the anatomy of a CORS request

// now let's try a JSON response

// now let's add a query parameter

// $.ajax({
//   url: 'http://localhost:3000?name=Radu',
//   success: (response) => {
//     console.log(response)
//   },
//   error: (xhr, status, error) => {
//     console.log(status)
//   }
// })

// Practice: Your API should accept several parameters, including name, favorite color, and number of pets, and return a nice message including all this info.  Make the API call and print the response.

// let's try POST requests

// to parse JSON requests:

// at the terminal:
// npm install --save body-parser

// in the API code:
// const bodyParser = require('body-parser)
// ...
// app.use(bodyParser.json())

// let myData = {
//   name: 'Radu'
// }

// $.ajax({
//   url: 'http://localhost:3000',
//   method: 'POST',
//   data: JSON.stringify(myData),
//   contentType : 'application/json',
//   success: (response) => {
//     console.log(response)
//   },
//   error: (xhr, status, error) => {
//     console.log(status)
//   }
// })

// $.ajax({
//   url: 'http://localhost:3000',
//   success: (response) => {
//     console.log(response)
//   },
//   error: (xhr, status, error) => {
//     console.log(status)
//   }
// })

// Practice: Make a POST endpoint on your API that accepts the same type of data as your GET endpoint, but stores it in variables on the server.  Then, modify your GET endpoint to take no arguments, but instead return the data from those variables.


