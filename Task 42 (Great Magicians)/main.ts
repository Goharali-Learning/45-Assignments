//Task 42 (Great Magicians)

/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
 the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified
 */

 const magicianNames:string[] = ["Kay-Lal" , "Harry Potter" , "DR.Strange"];




function showMagicians (magicians : string[]) : void{

   for(const magician of magicians){
     console.log(magician);
 }

}



function make_great(magicians: string[]): string[] {
    const greatmagicians : string[] = magicians.map(magicians=> `The Great ${magicians}`);
    return greatmagicians;
}    


//Modify the Array to add "The Great" to Each magician's Name.
const greatmagicians: string[] = make_great(magicianNames);

//Calling the function to Print the original magician's names
console.log("\nOriginal Magicians :");
showMagicians( magicianNames);

//calling the function to Print "The great Magician's Names"
console.log("\nThe Great Magician:");
showMagicians(greatmagicians );