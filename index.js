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
// myArray variable used here
const data = myArray[1];

// Modify Array Data With Indexes
const ourArray = [50, 40, 30];
ourArray[0] = 15;

// Access Multi-Dimensional Arrays With Indexes
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

// Manipulate Arrays With push()
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// Manipulate Arrays With pop()
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// Manipulate Arrays With shift()
const threeArr_one = [1, 4, 6];
const oneDown_one = threeArr.shift();
console.log(oneDown_one);
console.log(threeArr_one);

// Manipulate Arrays With unshift()
const ourArrayi = ["Stimpson", "J", "cat"];
ourArrayi.shift();
ourArrayi.unshift("Happy");

// Write Reusable JavaScript with Functions
function functionName() {
  console.log("Hello World");
}
functionName();

// Passing Values to Functions with Arguments
function testFun(param1, param2) {
  console.log(param1, param2);
}

// Return a Value from a Function with Return
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);

// Global vs. Local Scope in Functions
const someVar = "Hat"; // gloabal scope

function myFun() {
  const someVar = "Head"; // local scope
  return someVar;
}

// Understanding Boolean Values
function welcomeToBooleans() {
  return true;
}

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue == true) {
    return 'Yes, that was true';
  }
  return "No, that was false";
}

// Comparison with the Equality Operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

// Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val >20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

// Introducing Else Statements
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

// Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;

    default :
    answer = "stuff"
  }
  return answer;
}
switchOfStuff(1);