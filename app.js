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
