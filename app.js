/**
 * Created by edward on 4/27/2017.
 */


// Example of Hoisting
b();
console.log(a);

var a = 'hello there';
function b() {
    console.log('Called b!');
}

// Example of Scope

function foo() {
    console.log(myVar); // => 1; the function foo will not find myVar in its current scope and will then proceed to check the global scope.
}

function bar() {
    var myVar = 2;
    foo();
}

var myVar = 1;
bar();

// Example of Async callback

function waitThreeSec() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSec();
console.log('finished execution');

// Example that functions are objects in javascript

function greet() {
    console.log('hi');
}

greet.language = 'eng';
console.log(greet.language); //=> 'eng'

// Example of value vs reference.
// Primitives will be by value while Objects will be by reference.

// Value; makes a copy
var x = 3;
var y;

y = x;
x = 2;

console.log(x); //=> 2
console.log(y); //=> 3

// Reference; All objects and functions point to the same same location. No copies

var c = { greet: 'hello'};
var d;

d = c;
c.greet = 'yo';

console.log(c); // greet value changes in both c & d
console.log(d); //


//  Working with 'this'
//  Both examples below this references to the window. Thus when you create a property youre creating a global variable


console.log(this); //=> Window

function foobar() {
    console.log(this); //=> Window
    this.property = 'my property'; // Global variable
}

foobar();
console.log(this.property); //=> my property

var p = {
    name: 'The P object',
    print: function() {
        var that = this; //=> because 'this' is an object then 'that' knows the location byReference'. meaning they point to the same thing
        this.name = 'Updated P object'; //=> 'this' points to the p object
        console.log(this);

        var print2 = function() {
            this.name = 'Updated2 P object'; //=> 'this' points to global object. But if I used 'that' the issue will be what i expect it to be.
            console.log(this);
        }

        print2()
    }
}

p.print();

function add(n1, n2, cb) {
    console.log(n1+n2);
    cb();
}

function logCompletion() {
    console.log('Addition has been completed.');
}

add(10,10,logCompletion);

// Example of bind()
// Bind creates a copy

var person = {
    fName: 'ed',
    lName: 'fr',
    getFullName: function() {
        var name = this.fName + ' ' + this.lName;
        return name;
    }
}

function logName() {
    console.log(this.getFullName); // At this point this is pointing to the global object until it sees bind in the next line
}

logName.bind(person) //=> 'ed fr'

// Example of call() and apply()
// Directly executes code and does not create a copy.
// Only difference is that apply() takes arguments as an array.

var person2 = {
    fName: 'me',
    lName: 'li',
    getFullName: function() {
        var name = this.fName + ' ' + this.lName;
        return name;
    }
}

function logName2(sex, eyeColor) {
    console.log(this.getFullName());
    console.log('< more info: ' + sex + ' ' + eyeColor +' >');
    console.log('---------------');
}

logName2.call(person2, 'male', 'blue'); //=> 'me li < more info: male blue >'
logName2.apply(person2, ['male', 'blue']); //=> 'me li < more info: male blue >'

// How can you apply this methods in a real enviroment?
// When you want to borrow a function
// Example:

var person3 = {
    fName: 'jm',
    lName: 'bd'
}

// Borrowing function from the original person object and using it on person3
console.log(person.getFullName.call(person3)); // => 'jm bd'
