//TAsk 37 (Large shirts)
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
// function make_shirt(size:string , lebel:string){
//     return size + lebel
// }
// let myFunction = make_shirt("large" , " I love Programing");
// console.log(myFunction)
// //Making Large shirt as Default
// function make_shirt(lebel:string , size:string= "Large" ){
//     return size + lebel
// }
// let myFunction = make_shirt( " I love Programing");
// console.log(myFunction)
//Making Medium shirt as Default
// function make_shirt(lebel:string , size:string= "Medium" ){
//     return size + lebel
// }
// let myFunction = make_shirt( " I love Programing");
// console.log(myFunction);
//Making shirt of any size
function make_shirt(lebel, size) {
    return size + lebel;
}
var myFunction = make_shirt(" any size", " I love Programing");
console.log(myFunction);
