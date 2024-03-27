//Task 35 (ANIMALS)
/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as
A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could
 print a sentence such as Any of these animals would make a great pet!
 */
var animalNames = ["Goat", "Cow", "Sheep"];
//Printing Only Names 
for (var _i = 0, animalNames_1 = animalNames; _i < animalNames_1.length; _i++) {
    var i = animalNames_1[_i];
    console.log(i);
}
for (var _a = 0, animalNames_2 = animalNames; _a < animalNames_2.length; _a++) {
    var j = animalNames_2[_a];
    console.log("".concat(j, " Is a Domestic Animal"));
}
console.log("All these animals ".concat(animalNames[0], ", ").concat(animalNames[1], ", ").concat(animalNames[2], " meat is HALAL in (ISLAM)."));
