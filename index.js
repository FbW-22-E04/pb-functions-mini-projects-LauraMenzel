The Fortune Teller

function tellFortune(numberOfChildren ,partnersName, geographicLocation, jobTitle){

    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`);

    
}


tellFortune(3, "Nezir", "Leipzig", "student")

tellFortune(1, "Raphael", "Lissabon", "doctor")

tellFortune(8, "Stan", "Dublin", "bartender")


console.log("----------------------------------------------------------------------------------------------");


// The Puppy Age Calculator
function calculateDogAge(dog,human){

    doggyAge = dog * 7;
    console.log(`Your doggie is ${doggyAge} years old in dog years!`);

    humanAge = human / 7;
    console.log(`Your human is ${humanAge} years old in human years!`)
}

calculateDogAge(3, 21);

console.log("----------------------------------------------------------------------------------------------");


The Lifetime Supply Calculator

function calculateSupply(age, amountPerDay){

    const maxAge = 80;

    amountConsume = (maxAge - age) * 365 * amountPerDay;

    console.log(`You will need ${Math.round(amountConsume)} to last you until the ripe old age of ${maxAge}`);

}

calculateSupply(34, 3)
calculateSupply(40, 6)
calculateSupply(60, 2)
calculateSupply(45, 5.7)//Bonus


console.log("------------------------------------------------------------------------------------------------");

The Geometrizer

function calcCircumference(radius){

    circumference = 2 * Math.PI * radius;

    console.log(`The circumference is ${circumference}`);
}

calcCircumference(5)


function calcArea(radius){

    circArea = Math.PI * radius * radius;

    console.log(`he area is ${circArea}`);
}

calcArea(3)


console.log("-----------------------------------------------------------------------------------------------");


function celsiusToFahrenheit(){

     celsiusTemp = 35;

     fahrenheitTemp = celsiusTemp / 5 * 9 + 32;

     console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`);

}

celsiusToFahrenheit();

function fahrenheitToCelsius(){

    fahrenheitTemp = 98.6;

    celsiusTemp = (fahrenheitTemp - 32) * 5 / 9 ;

    console.log(`${fahrenheitTemp}°F is ${celsiusTemp}`);
}

fahrenheitToCelsius();
