"use strict";
//Task 24 (More Conditional Tests)
let car = "Toyota"; //(For equality or inequality tests)
let uppercase_car = "TOYOTA"; //(lowercase function tests)
let num1 = 10;
let num2 = 20; //(for numerical tests)
//Test 01 : **for Equality and inequality with strings**
console.log("Is car is equal to Toyota?");
console.log(car == "Toyota"); //TRUE
console.log("\nIs car is not eqaul to Toyota?");
console.log(car != "Toyota"); //FALSE
//Test 02 : **Using Lowercase Function (TESTS)**
console.log("\nIs TOYOTA is equal to toyota after converting to lowercase?");
console.log(uppercase_car.toLowerCase() == "toyota"); //TRUE
console.log("\nIs TOYOTA is not equal to toyota after converting to lowercase?");
console.log(uppercase_car.toLowerCase() != "toyota"); //FALSE
//Test 03 ; **Numerical Tests Equality or inequality**
//Eqauality comparison
console.log("\nIs num1 is equal to 10?");
console.log(num1 == 10); //TRUE
//Inequality comparison
console.log("\nIs num2 is not equal to 20?");
console.log(num2 != 20); //FALSE
//Greater than comparison
console.log("\nIs num1 is greater than 5?");
console.log(num1 > 5); //TRUE
//Less than Comparison
console.log("\nIs 10 is less than 20?");
console.log(num1 > num2); //FALSE
//Less than or Eaual (True)
console.log("\nIs num1 is Less than or Equal to 10?");
console.log(num1 <= 10); // True
//Test : 04 (Using "and" ,"Or" Operators
//Using "and" &&
console.log("\nIs num1 greater than 5 and (&&) <15 I predict its True?");
console.log(num1 > 5 && num1 < 15); //True
//Using or ||
console.log("\nIs num1 greater than 15 or (||) <5 I predict its True?");
console.log(num1 > 15 || num1 < 5); //false
//Test : 05 Using Array (True false)
let array = [1, 2, 3, 4];
//True
console.log("\nIs 3 in Array , I predict True?");
console.log(3 in array);
//False
console.log("\nis 5 in Array , I predict False?");
console.log(5 in array);
