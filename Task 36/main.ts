//Task 36 (T-Shirt)

/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function
*/


// function make_shirt(size:number , lebel:string){

//     //return size + lebel;
//     return `My shirt Size is ${size} and Lebel is ${lebel}`;
// }




// let myFunction = make_shirt(34 , " The SUnny Day");

// //How to print on Console 
// console.log(myFunction);


// Let try to create new something (ARROW FUNCTIONS)

let myfunction = (size:number , lebel:string) =>{

    return size + lebel

}

console.log(myfunction(34 , " The Cool Day"));