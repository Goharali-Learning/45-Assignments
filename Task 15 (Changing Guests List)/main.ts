//Task 14 (Guests_List)
let guest_list: string[] = [`Nadeem`,`Murtaza`,`Mehmood`,`Tanveer`,`Sameer`];

//Task 15 (Changing Guest Lists)
let not_coming: string = `Nadeem`;
let new_guest: string = `Adil`;
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
console.log(`Dear ` + guest_list[i] + `\n\nYou are invited for a dinner tommorow.\n\nThank You\n`);
}

console.log(`Mr. ${not_coming}, is not coming for dinner tommorow.`);