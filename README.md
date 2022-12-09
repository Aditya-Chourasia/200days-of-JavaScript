# Notes
<strong>Topic: JavaScript Alogrithms and Data Structure</strong>

# Comment in JavaScript
Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

# Data Types
In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are ```undefined```, ```null```, ```boolean```, ```string```, ```symbol```, ```bigint```, ```number```, and ```object```.

# How to declare Variables
Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a ```"label"``` to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.
<br>
In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and ```$``` or ```_```, but may not contain spaces or start with a number.

# Storing Values with the Assignment Operator
In JavaScript, you can store a value in a variable with the assignment operator ```(=)```.

# Assigning the Value of One Variable to Another
After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.

# Initializing Variables with the Assignment Operator
It is common to initialize a variable to an initial value in the same line as it is declared.

# Declare String Variables 
Variable can be declared in one line
```
var myName = "your name";
```
# Concatenation of Variables
In this we join two variable by ```+``` operator.

# Understanding Case Sensitivity in Variables
In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

<strong>Best Practice</strong>
<br>
Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

# Explore Differences Between the var and let Keywords
One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations
<br>
A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword

# Declare a Read-Only Variable with the const Keyword
The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword
const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned

# Adition of two numbers
```Number``` is a data type in JavaScript which represents numeric data
JavaScript uses the ```+``` symbol as an addition operator when placed between two numbers

# Subtract One Number from Another with JavaScript
We can also subtract one number from another. JavaScript uses the ```-``` symbol for subtraction.

# Multiply Two Numbers with JavaScript
We can also multiply one number by another. JavaScript uses the ```*``` symbol for multiplication of two numbers.

# Divide One Number by Another with JavaScript
We can also divide one number by another. JavaScript uses the / symbol for division.

# Increment a Number with JavaScript
You can easily increment or add one to a variable with the ++ operator.
```
var i = 2;
i++
```

# Decrement a Number with JavaScript
You can easily decrement or decrease a variable by one with the -- operator.
```
var i = 2;
i--;
```

# Decimal in JavaScript
we say float in JavaScript

# Finding a Remainder in JavaScript
The remainder operator ```%``` gives the remainder of the division of two numbers.

# Escaping Literal Quotes in Strings
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

# Find the Length of a String
You can find the length of a String value by writing .length after the string variable or string literal.

# Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

# Use Bracket Notation to Find the Nth Character in a String
You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

# Use Bracket Notation to Find the Last Character in a String
In order to get the last letter of a string, you can subtract one from the string's length.

# Use Bracket Notation to Find the Nth-to-Last Character in a String
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter ```see code file```

# Store Multiple Values in one Variable using JavaScript Arrays
With JavaScript array variables, we can store several pieces of data in one place.

# Nest one Array within Another Array
see code file

# Access Array Data with Indexes
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of ```0```.

# Modify Array Data With Indexes
the entries of arrays are mutable and can be changed freely, even if the array was declared with ```const```.

# Access Multi-Dimensional Arrays With Indexes
see code and test the code to learn the concept

# Manipulate Arrays With push()
An easy way to append data to the end of an array is via the ```push()``` function.

```.push()``` takes one or more parameters and "pushes" them onto the end of the array.

# Manipulate Arrays With pop()
Another way to change the data in an array is with the ```.pop()``` function.

```.pop()``` is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, ```.pop()``` removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

# Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like ```.pop()```, except it removes the first element instead of the last.