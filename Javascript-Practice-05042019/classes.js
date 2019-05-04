// Practice: Create a class named after your favorite animal.  Make a constructor function that takes two parameters: x and y (the GPS location of your animal).  Store these parameters as member variables on the class.  Make a new instance of your class and console.log the animal's location.
// class Goat {
// 	x;
// 	y;

// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	}
// }

// const myGoat = new Goat(29.42, -98.49);

// console.log(`My goat is at coordinates ${myGoat.x}, ${myGoat.y}.`);\


// Practice: Create a move function for your animal class, that takes two parameters, x and y.  Change the animal's location by the appropriate amount.  Call the function on your animal instance and console.log the location before and after.
class Goat {
	startX;
	startY;
	endX;
	endY;

	constructor(x, y) {
		this.startX = x;
		this.startY = y;
		this.endX = x;
		this.endY = y;
	}

	move(moveByX, moveByY) {
    this.startX = this.endX
    this.startY = this.endY
		this.endX = this.startX + moveByX;
		this.endY = this.startY + moveByY;
	}
}

const myGoat = new Goat(1, 2);
myGoat.move(10, 20);
console.log(`My goat started at ${myGoat.startX}, ${myGoat.startY} and ended at ${myGoat.endX}, ${myGoat.endY}`);

myGoat.move(10, 20);
console.log(`My goat started at ${myGoat.startX}, ${myGoat.startY} and ended at ${myGoat.endX}, ${myGoat.endY}`);
