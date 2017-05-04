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
