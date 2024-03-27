//Task 40 (Album)
/*
Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
  Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the
  album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
  If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.
 */
/*Version Old
function myAlbum (artistName: string , albumTitle: string){
    console.log(`${artistName} , ${albumTitle}`);
 }

 let album1 = myAlbum("Atif Aslam" , "Rang-E-Mohabbat" );
 let album2 = myAlbum("Rahat" , "Jununiyat-12" );
 let album3 = myAlbum("SOnu" , "Sureeley-Geet" );
*/
//Version New To print something with Using Return loop
function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Atif Aslam", "Rang-E-Mohabbat");
var album2 = myAlbum("Rahat", "Jununiyat-12");
var album3 = myAlbum("SOnu", "Sureeley-Geet");
console.log(album1);
console.log(album2);
console.log(album3);
//ADDING 3rd Option (Number of Tracks)
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum2("Atif Aslam", "Rang-E-Mohabbat", 13);
var album5 = myAlbum2("Rahat", "Jununiyat-12", 25);
var album6 = myAlbum2("SOnu", "Sureeley-Geet");
console.log(album4);
console.log(album5);
console.log(album6);
