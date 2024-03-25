//Task 18 (Seeing The World)

let places:string[] = [`Islam-Abad`,`New-York`,`Beijing`,`Paris`];

//Printing Array in Its Original Order
console.log(`Original ` + places);

//Printing Array in Alphabetical Order without modifying actual List
console.log(`Copy ` + [...places].sort());

//Printing Array that showing my Array is still in its original order 
console.log(`Original ` + places);

//Printing Array in reverse alphabetical order without changing the order of the original list
console.log(`Copy ` + [...places].sort().reverse());

//Again Printing Array that showing my Array is in original Order
console.log(`Copy ` + [...places].sort().reverse());

//Reverse the Order of your list. Print the array to show that its order has changed.
console.log(`Copy ` + [...places].sort());

//Reverse the order of your list again. Print the list to show it's back to its original original order.
console.log(`Copy ` + [...places].sort().reverse());

//Sort your array so it's stored in alphabetical order. print the array to show that its order has been changed.
console.log(`Copy ` + [...places].sort());
