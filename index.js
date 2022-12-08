// This is a single line Comment

/* This 
is a 
multi line 
comment
*/

// --------------------------------------

// data types
/* In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object. */

// declaring and storing values in variables
var yourName;
yourName = 7

//Assigning the Value of One Variable to Another
var a;
a = 3
var b;
b = a;

// Initializing Variables with the Assignment Operator
var myVar = 0

// Concatenation of Variables
var a_one = 5;
var b_one = 10;
var c = "I am a "; // after a here is a space to add space between 'a' and 'String'
a = a + 1;
b = b + 5;
c = c + "String"

// Understanding Case Sensitivity in Variables
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// Var v/s Let
var camper = "James";
var camper = "David";
console.log(camper);
// in above no error shown

// let camper = "James";
// let camper = "David";
// console.log(camper);
// here error will be shown

// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// addition of two numbers
const sum = 1+2;

// Subtract One Number from Another with JavaScript
const sub = 2-1;

// Multiply Two Numbers with JavaScript
const product = 2*1

// Divide One Number by Another with JavaScript
const quotient = 66 / 33;

// Increment a Number with JavaScript + Decrement a Number with JavaScript
var i = 0;
i++;
i--;

// Floats or Decimal in JavaScript
var myDecimal = 1.5

// Finding a Remainder in JavaScript
var remainder = 11%3;

//another way to add, subtract, divide, multiply
var one = 1;
one += 3;
one -= 3;
one *= 3;
one /= 3;

// Escaping Literal Quotes in Strings
let myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// '\\' for blackslash
// '\n' for newline
// " \' " for single quote
// ' \" ' for double quote

// Find the Length of a String
var variable = "Aditya";
var varLength = variable.length;

// Use Bracket Notation to Find the First Character in a String
const firstName = "Charles";
const firstLetter = firstName[0];

// Use Bracket Notation to Find the Nth Character in a String
const firstName_one = "Ada";
const secondLetterOfFirstName = firstName_one[1];

// Use Bracket Notation to Find the Last Character in a String
const firstName_two = "Ada";
const lastLetter = firstName_two[firstName_two.length - 1];

// Use Bracket Notation to Find the Nth-to-Last Character in a String
const firstName_three = "Augusta";
const thirdToLastLetter = firstName_three[firstName_three.length - 3];

// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["Hello", 1, "India"];

// Nest one Array within Another Array
const teams = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes
// myArray variable here
const data = myArray[1];