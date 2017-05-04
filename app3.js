/**
 * Created by edward on 5/3/2017.
 */

// Function Constructor

function Person(fName, lName) {
    this.fName = fName || 'default';
    this.lName = lName || 'default';
}

var ed = new Person('ed');
console.log(ed);

var ed = new Person('ed', 'fr');
console.log(ed);

// Adding prototypes aka methods

// The reason why you should create methods with prototype vs adding to the function constructor is because it uses less memory space.

Person.prototype.fullName = function () {
    return this.fName + " " + this.lName;
}

console.log(ed.fullName());

// ===========================
// ===========================

// Using Object create to make objects

var cat = {
    color: 'black',
    name: 'kitty',
    greet: function () {
        return this.name + ": meow meow!"
    }
};

var leo = Object.create(cat);
leo.color = 'orange';
leo.name  = 'leo';
console.log(leo);
