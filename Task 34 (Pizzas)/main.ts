//Task 34 (Pizzas)

/*
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
*/

/*
first version (Simple Method)

let Pizzas: string[] = ["Pepperoni" , "Cuban" , "BBQ Chicken"];

for(let Pizza of Pizzas){

    console.log(`i really Like ${Pizza} Pizza.`);
}

console.log(`I Really Love Pizza!`);
*/







//SEcond Version (Print only Name of Pizzas)
let myPizza = ["Cheeze Pizza" , "Pepperoni" , "Vegeterian Pizza"];

for(let i=0; i < myPizza.length; i++){

    console.log(myPizza[i]);
}

//Printing names and sentence/message
for(let i=0; i < myPizza.length; i++){

    console.log(`I Like to Eat ${myPizza[i]}`);

}

console.log("I Really Like to eat Pizzas. etc");
