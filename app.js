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

doucment.addEventListener('click', clickHandler);

waitThreeSec();
console.log('finished execution');
