console.log("My script is working");

//String  value
let firstName = "Samantha";
// Numerical value
let myAge = 999;
// Boolean value
let isProfessor = true;
let isStudent = false;

// display the values
console.log(firstName);
console.log(myAge);
console.log(isProfessor);
console.log(isStudent);

// Mini challenge:
// Create a variable for your last name.
// Create a variable for your height.
// Finally, show each variable separately in the console.
let lastName = "Jimenez";
let myHeight = 5.7;
console.log(lastName);
console.log(myHeight);

//concatenation (join strings)
console.log("Last name: " + lastName);
console.log("Height: " + myHeight + " cm");

//Arithmetic operations
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let subs = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(" -- Arithmetic operations --")
console.log("Addition of " + num1 + " and " + num2 + " is equals to " + sum);
// interpolation string or template string
console.log(`Substraction of ${num1} and ${num2} is equals to ${subs}`);
console.log(`Multiplication of ${num1} and ${num2} is equals to ${mult}`);
console.log(`Division of ${num1} and ${num2} is equals to ${div}`);

// area of a circle challenge
let pi = 3.1416; 
let radius = 3;
let circleArea = pi * radius * radius;

console.log(`The area of a circle with ${radius} is ${circleArea}`);

//difference between variable and constant
// create the variable
let aVariable;
// assign the value
aVariable = 30;
//create and assign the value
let anotherVariable = 50;
console.log(aVariable,anotherVariable);

const weekDays = 7;
//weekDays = 9;
console.log(weekDays);
//constant won't change
const daysInWeek = 7;
// the variables change
let vacationDays = 14; 

let totalDays = daysInWeek + vacationDays;

// Now vacation change
vacationDays = 21;
