//Task 32 (Checking Usernames)
//QUESTION: 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//List Of Current Users
var current_users = ["Usman", "Ali", "Tanveer", "Sameer", "Zia"];
//List of New Users
var new_users = ["Hamza", "Ayesha", "ali", "Nadeem", "tanveer"];
//loop for new_users to checking for username available
new_users.forEach(function (new_one_user) {
    //Making A condition for Usernames that show that username is already taken in Veriable our_conditions.
    var our_conditions = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //PrintDifferent messages using If-Else statements
    if (our_conditions) {
        console.log("Sorry ".concat(new_one_user, " is aleady taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is Available."));
    }
});
