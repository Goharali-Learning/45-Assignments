//Task 14 (Guests_List)
var guest_list = ["Nadeem", "Murtaza", "Mehmood", "Tanveer", "Sameer"];
//Task 15 (Changing Guest Lists)
var not_coming = "Nadeem";
var new_guest = "Adil";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear " + guest_list[i] + "\n\nYou are invited for a dinner tommorow.\n\nThank You\n");
}
console.log("Mr. ".concat(not_coming, ", is not coming for dinner tommorow."));
