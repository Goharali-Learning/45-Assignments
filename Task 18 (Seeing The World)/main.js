//Task 18 (Seeing The World)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Islam-Abad", "New-York", "Beijing", "Paris"];
//Printing Array in Its Original Order
console.log("Original " + places);
//Printing Array in Alphabetical Order without modifying actual List
console.log("Copy " + __spreadArray([], places, true).sort());
//Printing Array that showing my Array is still in its original order 
console.log("Original " + places);
//Printing Array in reverse alphabetical order without changing the order of the original list
console.log("Copy " + __spreadArray([], places, true).sort().reverse());
//Again Printing Array that showing my Array is in original Order
console.log("Copy " + __spreadArray([], places, true).sort().reverse());
//Reverse the Order of your list. Print the array to show that its order has changed.
console.log("Copy " + __spreadArray([], places, true).sort());
//Reverse the order of your list again. Print the list to show it's back to its original original order.
console.log("Copy " + __spreadArray([], places, true).sort().reverse());
//Sort your array so it's stored in alphabetical order. print the array to show that its order has been changed.
console.log("Copy " + __spreadArray([], places, true).sort());
