module.exports = {
    capitalize: someString => {
        if (someString === null) return someString
        if(isNaN(someString)) {
            return someString
            .charAt(0)
            .toUpperCase()
            .concat(someString.substring(1)) 
        }
        return someString.toString()
    },
    isDivisibleByThree: num => {
        return num && 0 == num % 3
    }