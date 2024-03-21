//TASk 03 (Name Cases)

//QUESTION:03
//Name Cases: Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.





//Lower_Case
let personName: string = `Gohar`;
console.log(`lowercase:`, personName.toLowerCase());

//Upper_Case
console.log(`uppercase:`, personName.toUpperCase());

//Title_Case
console.log(`titlecase:`, personName.replace(/\bw/g,c => c.toLowerCase()));