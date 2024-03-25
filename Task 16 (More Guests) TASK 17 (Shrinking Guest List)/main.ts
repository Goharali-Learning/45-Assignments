/*
QUESTION : 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.







QUESTION : 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/


//Task 14 (Guests-list)
let guest_list: string[] = [`Nadeem`,`Murtaza`,`Mehmood`,`Tanveer`,`Sameer`];








//Task 16 (More Guests)
guest_list.unshift(`Azeem`);
guest_list.splice(guest_list.length/2, 2, "Meer");
guest_list.push(`Gohar`);
 for(let i=0; i<guest_list.length; i++){
  console.log(`Dear ` + guest_list[i] + `\n\nYou are invited for a dinner tommorow.\n\nThank You\n`); 
 }
console.log(`We have found a bigger dinner table so we invited more Guests.`);








//Task 17 (Shrinking Guest List)

console.log(`n\nUnfortunately we are out of space, So we have space for only two guests only.n\n`);
while(guest_list.length>2){
  let removed_guests = guest_list.pop();
  console.log(`Sorry, Dear ${removed_guests}, You are not Invited for a dinner tommorow.`)
}
 for(let i=0; i<guest_list.length; i++){
   console.log(`Dear ` + guest_list[i] + `\n\nYou all are still invited for a dinner tommorow.\n\nThank You\n`); 
 }

 guest_list.splice(0,2);
 console.log(guest_list);
 
