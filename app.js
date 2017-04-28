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
