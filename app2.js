/**
 * Created by edward on 5/3/2017.
 */

// Test Array
var nums = [1,2,3];
console.log(nums);

// What if we wanted to double the values of the Test Array

var doubleNums = [];
for (var i = 0; i < nums.length; i++) {
    doubleNums.push( nums[i] * 2 );
}
console.log(doubleNums);

// ===============================================
// ===============================================

// As programmers we want to reuse our code and put them into functions. We want to limit repetition. With first class functions we can head into what is called "Functional Programming"

// Functional Programming

function mapForEach(list, fn) {
    var newList = [];

    for (var i = 0; i < list.length; i++) {
        newList.push( fn(list[i]) );
    }

    return newList;
}

var result = mapForEach(nums, function(item) {
    return item * 2;
});

console.log(result);

// ===============================================
// ===============================================

// Write a function that return t/f if value is past the limit

var checkPastLimit = function(limiter, item) {
    return item > limiter;
};

var limitResult = mapForEach(nums, checkPastLimit.bind(this, 1));
console.log(limitResult); //=> [ false, true, true ]


// ===============================================
// ===============================================

// Now write a function so it only takes one parameter

function limiter(num) {
   return checkPastLimit.bind(this, num);
}

var limitResult2 = mapForEach(nums, limiter(1));
console.log(limitResult2);

// ===============================================
// ===============================================
// Using underscore.js

var list3 = _.map(nums, function(item) { return item * 3 });
console.log(list3);

var evenList = _.filter(nums, function(item) { return item % 2 === 0});
console.log(evenList);

// ===============================================
// ===============================================

// Demo Inheritance from proto ~
var person = {
    fName: 'default',
    lName: 'default',
    fullName: function() {
        return this.fName + " " + this.lName
    }
};

var ed = {
    fName: 'ed',
    lName: 'fr'
};

var james = {
    fName: 'james'
};

// Don't ever do this; for demo purposes
ed.__proto__ = person;
console.log(ed.fullName());

james.__proto__ = person;
console.log(james.fullName()); //=> 'james default'

// Example of reflection

for (var prop in ed) {
    if (ed.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

// Using _underscore.js for extending

_.extend(person, ed, james);
console.log(james);
