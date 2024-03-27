//Task 35 (ANIMALS)

/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as 
A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could
 print a sentence such as Any of these animals would make a great pet!
 */




 let animalNames = ["Goat" , "Cow" , "Sheep" ];

 //Printing Only Names 
 for (let i of animalNames){
    console.log(i);
 }

 for (let j of animalNames){
    console.log(`${j} Is a Domestic Animal`);
 }



console.log(`All these animals ${animalNames[0]}, ${animalNames[1]}, ${animalNames[2]} meat is HALAL in (ISLAM).`);