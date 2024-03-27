//Task 31 (No Users)

//QUESTION:31


//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.


let userName = ["Nadeem", "Gohar", "Adil", "Admin", "Tanveer"];

userName = []

if (userName.length === 0){
console.log(`Your Array is Empty we need to find some users!`)
}else{
    //Using forEach Loop on Array
userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}
