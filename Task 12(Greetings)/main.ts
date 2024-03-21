//Task 12 (Greetings)

//QUESTION:12

//Greetings: Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of each message 
//should be the same, but each message should be personalized with the person’s name.
 




let friends: string[ ] = [`Nadeem-Khan`,`Adil-Shah`,`Shah-Nawaz`];
 let message: string = `You are special guests of tommorow's My Birthday Party buddy. `;
 for(let i=0; i<friends.length; i++){
 console.log(message + friends[i]);
}
