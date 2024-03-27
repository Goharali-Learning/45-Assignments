/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/



function createCar(manufacturer: string, model: string, ...
     Properties:[string, any][]): any {
    let car: any = {
        manufacturer,
        model,
    };

    for( let [key, value] of Properties) {
        car[key] = value;
    }

    return car;

}


//Example Useges:
let myCar : string = createCar("Toyota" , "Corolla"  , ["color" ,
 "black"] , ["optional Features" , "Bulletproof Glasses"] , ["Speed" , "280 kbps"] , ['Manufacturer Year' , "1999"])

 console.log(myCar)