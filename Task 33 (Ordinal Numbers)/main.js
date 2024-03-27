//Task 33 (Ordinal Numbers)
/*QUESTION:33

Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
var allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < allNumbers.length; i++) {
    //Applying Conditions with using If-Else loop
    if (allNumbers[i] == 1) {
        console.log("".concat(allNumbers[i], "st"));
    }
    else if (allNumbers[i] == 2) {
        console.log("".concat(allNumbers[i], "nd"));
    }
    else if (allNumbers[i] == 3) {
        console.log("".concat(allNumbers[i], "rd"));
    }
    else if (allNumbers[i] >= 4 && allNumbers[i] <= 9) {
        console.log("".concat(allNumbers[i], "th"));
    }
}
