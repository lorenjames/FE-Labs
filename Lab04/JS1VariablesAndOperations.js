/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
let availableSeats = 5
console.log("Number of available seats on plane: " + availableSeats)

console.log("Step 2:  Cost of Groceries");
let totalCost = 120.34
console.log("Total cost of groceries: " + totalCost)

console.log("Step 3:  Middle Initial");
let middleInitial = "JR"
console.log("Middle Initial: " + middleInitial)

console.log("Step 4:  Is it Hot Outside?");
let hotOutside = true
console.log("It's hot outside? " + hotOutside)

console.log("Step 5:  First Name");
let firstName = "Loren"
console.log("Customer's First Name: " + firstName)

console.log("Step 6:  Street Address");
let streetAddress = "123 Main Street Lincoln, NE 68502"
console.log("Street Address: " + streetAddress)

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);


/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
availableSeats = availableSeats - 2
console.log('Remaining Plane Seats: ' + availableSeats)


console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
totalCost += 2.15
console.log('New Grocery Total: ' + totalCost.toFixed(2))


console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
middleInitial = "J. R."
console.log("Updated Middle Initial(s): " + middleInitial)


console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
hotOutside = false
console.log("It is still hot outside? " + hotOutside)


console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
let fullName = firstName + ' ' + middleInitial + ' ' + 'Smith'
console.log("Full Name: " + fullName)


console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log('Introducting our new customer ' + fullName + ' who lives at the following address: ' + streetAddress)


console.log('-----------Finished------------')
// let x = 35;
// let y = "20";
// let z = x + y;
// console.log(z)

var num1 = 23;
var num2 = 23;
var x = num1 < num2;
console.log(x)

