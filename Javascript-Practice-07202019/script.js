// let cars = ['mazda', 'honda', 'ford']

// console.log(cars)

// let cars = []
// cars.push('mazda')
// cars.push('honda')
// cars.push('ford')

// console.log(cars)

// let cars = []
// cars.unshift('mazda')
// cars.unshift('honda')
// cars.unshift('ford')

// console.log(cars)

// let cars = []
// cars[0] = 'mazda'
// cars[1] = 'honda'
// cars[2] = 'ford'
// // cars[1] = 'toyota' // this will reassign the 2nd value

// console.log(cars)

// let cars = []
// cars[1] = 'mazda'
// cars[4] = 'honda'
// cars[9000000] = 'ford'

// console.log(cars)

// let cars = []
// cars['1'] = 'mazda'
// cars['4'] = 'honda'
// cars['9'] = 'ford'

// console.log(cars)

// let cars = {}
// cars['1'] = 'mazda'
// cars['4'] = 'honda'
// cars['9'] = 'ford'

// console.log(cars)

// Practice: Make an array of your favorite bands/musicians.  Populate it using all three methods of adding array elements.  Put a bunch in there!
// 5 minutes

// let cars = ['mazda', 'honda', 'ford']

// cars.pop()

// console.log(cars)

// cars.shift()

// console.log(cars)

// cars.splice(1, 1)
// // cars.splice(1, 2)
// // cars.splice(0, 2)
// // cars.splice(1, 6) // start deleting at (array.length - start)

// console.log(cars)

// delete cars[1]

// console.log(cars)

// Practice: Delete some bands using a mix of methods.
// 5 minutes

// Jason solution

// favoriteBands.pop()
// favoriteBands.shift()
// console.log(favoriteBands.length)
// delete favoriteBands[1]
// console.log(favoriteBands.length)
// console.log(favoriteBands)

// console.log(typeof favoriteBands[1] !== 'undefined')

// let cars = ['mazda', 'honda', 'ford', 'honda']

// let hondaIndex = cars.indexOf('honda')

// console.log(hondaIndex)

// let hondaIndex = cars.findIndex(car => car === 'honda')

// console.log(hondaIndex)

// let carObjects = [{
//   brand: 'mazda',
//   color: 'red'
// },{
//   brand: 'honda',
//   color: 'blue'
// },{
//   brand: 'ford',
//   color: 'coral'
// },{
//   brand: 'ford',
//   color: 'coral'
// }]

// let coralIndex = carObjects.findIndex(car => car.color === 'coral')

// console.log(coralIndex)

// let hasHonda = hondaIndex >= 0

// console.log(hasHonda)

// let hasHonda = !!cars.find(car => car === 'honda')

// if(hasHonda) {
//   console.log('i have a honda')
// }

// console.log(hasHonda)

// let myHondas = cars.filter(car => car === 'honda')

// console.log(myHondas)

// let hasHonda = cars.filter(car => car === 'honda').length > 0
// // let hasHonda = myHondas.length > 0 // equivalent to this

// console.log(hasHonda)

// Practice: Search for specific bands in your array, using a mix of methods.
// 5 minutes

// James solution

// let bands = ['Drake']
// bands.push('Noah and the Whale')
// bands[2] = 'Mumford and Sons'
// bands['3']='The Beatles'
// bands.push('Drake')
// bands.push('Drake')

// let bandPrompt = prompt("Which band are you looking for?")
// let bandResults = bands.filter(band => band === bandPrompt).length

// // let entryNumbers = bands.filter(band => band === bandPrompt).length

// if(bandResults > 0){
//   console.log("We found " + bandPrompt + ". " +  "There are " + bandResults)
// }

// let screaminCars = cars.map(car => car.toUpperCase())

// console.log(screaminCars)

// let screaminCars = []
// cars.forEach(car => screaminCars.push(car.toUpperCase()))

// console.log(screaminCars)

// Practice: Modify your bands array to add some fun decorative characters like asterixes, using the methods described.
// 5 minutes