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
```pop()``` always removes the last element of an array. What if you want to remove the first?

That's where ```.shift()``` comes in. It works just like ```.pop()```, except it removes the first element instead of the last.

# Manipulate Arrays With unshift()
Not only can you ```shift``` elements off of the beginning of an array, you can also ```unshift``` elements to the beginning of an array i.e. add elements in front of the array.

```.unshift()``` works exactly like ```.push()```, but instead of adding the element at the end of the array, ```unshift()``` adds the element at the beginning of the array.

# Write Reusable JavaScript with Functions
In JavaScript, we can divide up our code into reusable parts called functions.

# Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

# Return a Value from a Function with Return
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

# Global Scope and Functions
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the ```let``` or ```const``` keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with ```let``` or ```const```.

# Local Scope and Functions
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

# Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

# Understanding Boolean Values
Another data type is the Boolean. Booleans may only be one of two values: ```true``` or ```false```. They are basically little on-off switches, where ```true``` is on and ```false``` is off. These two states are mutually exclusive.

# Use Conditional Logic with If Statements
```if``` statements are used to make decisions in code. The keyword ```if``` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as ```Boolean``` conditions and they may only be ```true``` or ```false```.

When the condition evaluates to ```true```, the program executes the statement inside the curly braces. When the Boolean condition evaluates to ```false```, the statement inside the curly braces will not execute.

# Comparison with the Equality Operator
There are many comparison operators in JavaScript. All of these operators return a boolean ```true``` or ```false``` value.

The most basic operator is the equality operator ```==```. The equality operator compares two values and returns ```true``` if they're equivalent or ```false``` if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

# Comparison with the Strict Equality Operator
Strict equality (```===```) is the counterpart to the equality operator (```==```). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

# Comparison with the Inequality Operator
The inequality operator (```!=```) is the opposite of the equality operator. It means not equal and returns ```false``` where equality would return ```true``` and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

# Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

# Comparison with the Greater Than Operator
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

# Comparison with the Greater Than Or Equal To Operator
The greater than or equal to operator (```>=```) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns ```true```. Otherwise, it returns ```false```.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

# Comparison with the Less Than Operator
The less than operator (```<```) compares the values of two numbers. If the number to the left is less than the number to the right, it returns ```true```. Otherwise, it returns ```false```. Like the equality operator, the less than operator converts data types while comparing.

# Comparison with the Less Than Or Equal To Operator
The less than or equal to operator (```<=```) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns ```true```. If the number on the left is greater than the number on the right, it returns ```false```. Like the equality operator, the less than or equal to operator converts data types.

# Comparisons with the Logical And Operator
Sometimes you will need to test more than one thing at a time. The logical and operator (```&&```) returns ```true``` if and only if the operands to the left and right of it are true.

# Comparisons with the Logical Or Operator
The logical or operator (```||```) returns true if either of the operands is ```true```. Otherwise, it returns ```false```.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

# Introducing Else Statements
When a condition for an ```if``` statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an ```else``` statement, an alternate block of code can be executed.

# Introducing Else If Statements
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

# Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement. A ```switch``` statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched ```case``` value until a ```break``` is encountered.

# Adding a Default Option in Switch Statements
In a ```switch``` statement you may not be able to specify all possible values as ```case``` statements. Instead, you can add the ```default``` statement which will be executed if no matching ```case``` statements are found. Think of it like the final ```else``` statement in an if/else chain.

A ```default``` statement should be the last case.

# Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this: (code file)

# Build JavaScript Objects
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

# Accessing Object Properties with Dot Notation
There are two ways to access the properties of an object: dot notation (```.```) and bracket notation (```[]```), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

# Accessing Object Properties with Bracket Notation
The second way to access the properties of an object is bracket notation (```[]```). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.