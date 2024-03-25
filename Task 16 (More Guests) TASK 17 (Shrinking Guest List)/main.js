//Task 14 (Guests-list)
var guest_list = ["Nadeem", "Murtaza", "Mehmood", "Tanveer", "Sameer"];
//Task 16 (More Guests)
guest_list.unshift("Azeem");
guest_list.splice(guest_list.length / 2, 2, "Meer");
guest_list.push("Gohar");
// for(let i=0; i<guest_list.length; i++){
//   console.log(`Dear ` + guest_list[i] + `\n\nYou are invited for a dinner tommorow.\n\nThank You\n`); 
// }
//console.log(`We have found a bigger dinner table so we invited more Guests.`);
//Task 17 (Shrinking Guest List)
console.log("n\nUnfortunately we are out of space, So we have space for only two guests only.n\n");
while (guest_list.length > 2) {
    var removed_guests = guest_list.pop();
    console.log("Sorry, Dear ".concat(removed_guests, ", You are not Invited for a dinner tommorow."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear " + guest_list[i] + "\n\nYou all are still invited for a dinner tommorow.\n\nThank You\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
