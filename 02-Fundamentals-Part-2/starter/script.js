/*

'use strict';

let hasDriversLicense = false;
const passTest = true; 

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';

// strict mode reserves keywords 



function logger() {
    console.log('My name is Aaron');
}

// calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;

}

const juice = fruitProcessor(5,2);
console.log(juice);
console.log(fruitProcessor(4,5));

const appleOrangeJuice = fruitProcessor(3,3);



// function declaration 
function calcAge1(birthYear){
    const age = 2037- birthYear;
    return age;
}


const age1 = calcAge1(1994);
console.log(age1);

// function expression 
const calcAge2 = function(birthYear){
    const age = 2037- birthYear;
    return age;
}

const age2 = calcAge2(1991);
console.log(age2);

// function declarations can be accessed from anywhere, function expressions can only be called after defining it

//arrow function -- also a function expression 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1888);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1992, 'Garret'))

// in arrow function only need ( ) if there's more than one parameter

// arrow functions do not have this keyword

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;

}

console.log(fruitProcessor(2,3));


const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0){
       return `${firstName} retires in ${retirement} years`; 
    } else {
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1992, 'Garret'));
console.log(yearsUntilRetirement(1892, 'Alfred'));





// coding Challenge #1
 
const calcAverage = (val1, val2, val3) => (val1+val2+val3)/3;

const averageKoalas = calcAverage(65,54,49);
const averageDolphins = calcAverage(44,23,71);

function checkWinner(averageKoalas, averageDolphins){
    if (averageDolphins > averageKoalas*2){
        console.log("Dolphins win!")
    } else if (averageDolphins*2 < averageKoalas){
        console.log("Koalas win!")
    } else {
        console.log('No Winner!')
    }
}

checkWinner();



 const friend1 = "mike";
 const friend2 = "peter";
 const friend3 = "hank";

 const friends = ["mike", "steven", "peter", "hank"]
 console.log(friends);

 const years = new Array(1991,1984,2008,2020);
 console.log(years);

 console.log(friends[0]);
 console.log(years.length);
 console.log(friends[friends.length - 1]);
 friends[2] = "austin";
 console.log(friends);

 // can't replace array, but can change elements within the array 

 firstName = 'Aaron';
 const aaron = [firstName, 'Venema', 2037-1994, friends];
 console.log(aaron);

 //exercise

 const years = [1994, 2000, 1988, 1984, 1776];

 const calcAge = function(birthYear){
    return 2037-birthYear;
 }
 

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [age1, age2 , calcAge(years[years.length-1])];
console.log(ages);



 const friends = ["mike", "steven", "peter", "hank"];
 
 const newLength = friends.push('Jay');
 console.log(friends);
 console.log(newLength);
 const pop = friends.pop();
 console.log(pop);
console.log(friends);

friends.unshift('John');
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf('peter'));

console.log(friends.includes('steven'));
console.log(friends.includes('bob'));
// strict equality === for checking, no type coercion 

// can use inclues to write conditionals

if(friends.includes('peter')){
    console.log('You have a friend called Peter')
}



let tip = 0;
let bills = [32,434,52,63,23,53,24];
let total = [];


function calcTip(bill){
    if (bill > 50 && bill < 300){
        tip = bill*.15;
    } else {
        tip = bill * 0.2;
    }
    return tip+bill;
}

for(let i=0; i<bills.length; i++){
    total[i] = calcTip(bills[i]);
}

console.log(total);


const aaron = {
    firstName : 'Aaron',
    middleName: 'Scott',
    lastName: 'Venema',
    age: 2037-1994,
    job: 'student',
    friends: ['Austin', 'Nate', 'Joel']
}

console.log(aaron);
console.log(aaron.age);
console.log(aaron.lastName);
console.log(aaron['job']);

const nameKey = 'Name';
console.log(aaron['first' + nameKey]);
console.log(aaron['last' + nameKey]);

// const interestedIn = prompt('What do you wanted to know about Aaron? Choose between firstName, LastName, age, job');
console.log(interestedIn);
console.log[aaron[interestedIn]];

aaron.location = 'Texas';
aaron['Twitter'] = '@notTellingYou';

console.log(aaron);




const aaron = {
    firstName : 'Aaron',
    middleName: 'Scott',
    lastName: 'Venema',
    age: 2037-1994,
    job: 'student',
    friends: ['Austin', 'Nate', 'Joel']
}

console.log(`${aaron.firstName} has ${aaron.friends.length} friends, and his best friend is ${aaron.friends[1]}`)



const aaron = {
    firstName : 'Aaron',
    middleName: 'Scott',
    lastName: 'Venema',
    birthYear: 1994,
    job: 'student',
    friends: ['Austin', 'Nate', 'Joel'],
    hasDriverLicense: true,
    // calcAge: function(birthYear){
    //     return 2022-birthYear;
    // }
    calcAge: function(){
        this.age = 2022- this.birthYear;
        return this.age;
    },
    getSummary: function(){
        if(this.hasDriverLicense){
            license = 'has a drivers license';
        } if(!this.hasDriverLicense) {
            licene = 'does not have a drivers license';
        }
        console.log(`${this.firstName} is a ${this.age} years old and ${license}.`)

    }
}

console.log(aaron);

console.log(aaron.calcAge(1994));
console.log(aaron["calcAge"](1994));
console.log(aaron.calcAge());

console.log(aaron.age);

aaron.getSummary();



const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    massKG: 78,
    heightM: 1.69,
    fullName: this.firstName + " " + this.lastName,

    calcBMI: function(){
       this.BMI = this.massKG/this.heightM**2;
       return this.BMI;
    }
    
    
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    massKG: 92,
    heightM: 1.95,
    fullName: this.firstName + " " + this.lastName,

    calcBMI: function(){
       this.BMI = this.massKG/this.heightM**2;
       return this.BMI;
    }
    
}

mark.calcBMI();
console.log(mark.BMI)

john.calcBMI();
console.log(john.BMI)



console.log('Lifting weights rep 1');
console.log('Lifting weights rep 2');
console.log('Lifting weights rep 3');
console.log('Lifting weights rep 4');
console.log('Lifting weights rep 5');
console.log('Lifting weights rep 6');
console.log('Lifting weights rep 7');
console.log('Lifting weights rep 8');
console.log('Lifting weights rep 9');
console.log('Lifting weights rep 10');

for(let rep=1; rep<=10; rep++){
    console.log(`Lfting weights rep ${rep} 🏋️`)
}

const aaron = [
    'Aaron',
    'Scott',
    'Venema',
    2037-1994,
    'student',
    ['Austin', 'Nate', 'Joel']
]

let types = [];
let types2 = [];
for(let i=0; i<aaron.length; i++){
    console.log(aaron[i], typeof aaron[i]);
    types[i] = (typeof aaron[i]);

    types2.push(typeof aaron[i])
}

console.log(types);
console.log(types2);



const birthYear = [1991, 2007, 1969, 2020];
const ages = [];
const year = 2023;

for(let i=0; i<birthYear.length; i++){
    ages[i] = year - birthYear[i];
}

console.log(ages);


types = [];

for(let i=0; i<aaron.length; i++){
    if(typeof aaron[i] === 'string') continue;

    console.log(aaron[i], typeof aaron[i]);

    types[i] = (typeof aaron[i]);

}

console.log(types);


// continue ends the current iteration 
// break ends the entire loop 



const aaron = [
    'Aaron',
    'Scott',
    'Venema',
    2037-1994,
    'student',
    ['Austin', 'Nate', 'Joel']
]

for(let i = aaron.length-1; i>=0; i--){
    console.log(i, aaron[i]);
}


for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------Starting Exercise ${exercise}------`)
    for(let rep = 1; rep<=5; rep++){
        console.log(`Lifting weight reptition ${rep} 🏋️`)
    }
}



let rep = 1;
while (rep < 10){
    console.log(rep, "hello")
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;


while(dice !== 6){
    console.log(`You rolled a ${dice} 🎲`);
    dice = Math.trunc(Math.random() * 6) + 1;
}

*/


bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tip = [];
tipTotal = [];
total = [];

function calcBill(bill){
    if (bill > 50 && bill < 300){
        tip = bill*.15;
    } else {
        tip = bill * 0.2;
    }
    return tip+bill;
}

function calcTip(bill){
    if (bill > 50 && bill < 300){
        tip = bill*.15;
    } else {
        tip = bill * 0.2;
    }
    return tip;
}

for(let i=0; i<bill.length; i++){
    tipTotal.push(calcTip(bill[i]));
    total[i] = calcBill(bill[i]);
}

console.log(total);
console.log(tipTotal);


function calcAverage(bill){
    let sum = 0;
    for( let i=0; i<bill.length; i++){
        sum += bill[i];  
    }
    return sum/bill.length;
}

console.log(calcAverage(total));
console.log(calcAverage(tipTotal));
