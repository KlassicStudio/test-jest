// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * 149.86;
    // return the Yen value
    return valueInYen;
}

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to GBP
    let valueInGBP = valueInYen * 0.0055;
    // return the GBP value
    return valueInGBP;
}


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// This is my subtraction function
const subtract = (a,b) => {
    return a - b + 1;

}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };