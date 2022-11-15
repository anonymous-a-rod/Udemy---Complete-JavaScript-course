
/*

let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

console.log('Aaron');

let firstName = "Aaron";
console.log("My first name is " + firstName)

// camelCase 

// CAN not start a variable name w/ number

// syntax error --> console shows line w/ error

// variable name may contain numbers, letters, underscore or $

// new, function, etc are reversed keywords and can not be used as variable names
// name is a reserved keyword -> works but can cause issues

// do not start a variable name with an uppercase letter

// CONSTANTS THAT NEVER CHANGE USE ALL UPPERCASE
let PI = 3.14;

// descriptive variable names

let myFirstJob = 'Lifeguard';
let myCurrentJob = 'Programmer';

// letJob1 = 
// letJob2 = 
// these are less descriptive (not preferable)

let country = 'USA';
let continent = "North America";
let population = "330 million";
console.log("Country: " + country)
console.log("Continent: " + continent)
console.log("Popultation: " + population)

// Value is either an object or a primitive value

// Number --> always floating point, even if not shown
// String --> sequence of characters in quotes
// Boolean --> true or false
// undefined --> value taken by a variable with value not yet defined
// null --> Also means 'empty value'
// symbol (ES2015)
// BigInt (ES2020) --> for larger ints

// JavaScript automatically determines the type. The value has the type. 

// to comment out multiple lines use CTRL + / 

this also works more a multline comment - erased 

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof continent);
console.log(typeof PI);

let year;
console.log(year);
console.log(typeof year);
// value and type are both undefined 

console.log(typeof null);
// type of object (bug for legacy reasons)

let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof isIsland);
console.log(typeof population);

language = 'English';


let age = 30; 
age = 31;
age = 32;

// with let can mutate the age variable /  reassign reassign value of the variable 

const birthYear = 1994;

// used for variables no intended to reassign / immutable 

// when using const you need to declare an initial value

// best practice is to use const when able, and change values as little as possible 

// var is old, prior to ES6

var job = 'programmer';
job = 'teacher';

console.log(job)

noVarDeclared = 'hehehe';
console.log(noVarDeclared)
// without declaring it will make it on the global scale 

const currentYear = 2022;
const ageSarah = currentYear - 1990;
const ageJonas = currentYear - 1992;
console.log(ageSarah*2, ageJonas/10, 2**3)
// can log multiple values at the same time if seperated by comma
// ** exponent operator 

const lastName = 'Venema'
const fullName = firstName + ' ' + lastName;
console.log('My full name is still ' + fullName)

// assignment operator  = , Math operators + - / * 

let x = 10;
x *= 4; // x = x*4;
x++; // x = x+1;
x--; // x = x-1;

// comparison operators

console.log(ageJonas > ageSarah)

// operator precedence 

const now = 2022;
const ageSarah = now - 1990;
const ageJonas = now - 1992;
console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 -5; // x = y = 10;
// assignment operator executes from right to left
// higher precedence gets excuted first 
// highest to lowest 
console.log(x,y)

const averageAge = (ageJonas+ageSarah)/2;
console.log(averageAge)
console.log(ageJonas,ageSarah);


let markWeight = 78;
let markHeight = 1.69;
let markBMI = markWeight/ markHeight**2 
console.log(markBMI)

let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight**2
console.log(johnBMI)

console.log(markBMI>johnBMI);


markWeight = 95;
markHeight = 1.88;
markBMI = markWeight/ markHeight**2 
console.log(markBMI)

johnWeight = 85;
johnHeight = 1.76;
johnBMI = johnWeight / johnHeight**2
console.log(johnBMI)

console.log(markBMI>johnBMI);


const year = 2045;
const firstName = 'Aaron';
const job = 'programmer';
const birthYear = 1994;

const aaron = "I'm " + firstName + ', a ' + (year-birthYear) + ' year old ' + job + '!';
console.log(aaron) 

// template literals.. insert variables directly into the string

const aaronNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;

console.log(aaronNew);

console.log('String with \n\
multiple \n\
 hello')

 console.log(`multiple 
 lines`);

 // template literal allows multiple lines by using enter key 

 const age = 15; 
 const isOldEnough = age >= 16;
 
 if(isOldEnough){
    console.log('Is old enough to drive 🚗')
 } else {
    const yearsLeft = 16 - age;
    console.log('Not old enough to drive 🚫')
    console.log(`wait ${yearsLeft} more years`)
 }

 // windows key + . to use emoji 

 // control structure --> because it allows us to have more control over how our code is excuted 

 const birthYear = 1994;
let century;
 if(birthYear <= 2000) {
    century = 20;
 } else {
    century = 21; 
 }

 console.log(century); 

 // comparison operator is a Boolean and return true or false

 // need to define the variable outside the code block, otherwise it can only be used within the code block


let markWeight = 78;
let markHeight = 1.69;
let markBMI = markWeight/ markHeight**2 
console.log(markBMI)

let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight**2
console.log(johnBMI)

if(markBMI > johnBMI){
    console.log(`Mark's BMI of ${markBMI} is greater than John's BMI of ${johnBMI}`)
} else {
    console.log(`John's BMI of ${johnBMI} is greater than Mark's BMI of ${markBMI} `)
}



const inputYear = '1994';
console.log(inputYear + 18); // string plus number resuts in a number
console.log(Number(inputYear)+18); // Number() does a type conversion 

console.log(Number("Aaron")); // NaN means 'Not a number' 
console.log(typeof NaN); // NaN whenever an operation fails to give a new number

console.log(String(23)); // String() to convert to type string 

// type coercion 
console.log('I am ' + 23 + " years old")
// number + string results in a string
// using multiplication or sub / etc converts it to numbers 

let n = '1' + 1;
n = n - 1;
console.log(n);

n = 2+3+4+ '5'
console.log(n)

// Falsy --> will become false when converted to Boolean

// 5 falsy values: 0, "", undefined, null, NaN
// empty object is truthy 

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean({}))

// logical operators, or if else statements, ytpe coercion to Boolean

const money = 0;
if(money) {
    console.log("Don't spend it all ;p") // condition is false because number is zero. zero is a falsy value
} else {
    console.log("You should get a job!")
}

let height;
if(height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}


const age = "18"; 
if(age === 18) console.log("Exactly 18 years old");
if(age == 18) console.log("Loosely 18 years old");

// === does type coercion (strict equality operator), == does not do type coercion (loose equality operator)
// standard is to use the strict equality operator 

const favoriteNumber = prompt("What's your favorite number?");
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if (favoriteNumber == 23){
    console.log("23 is an amazing number")
} else if (favoriteNumber == 17){
    console.log("That's also my favorite number!!!!")
} else if (favoriteNumber == 13){
    console.log("unlucky you")
} else {
    console.log('What a bad favorite number')
}

if(favoriteNumber != 23){
    console.log("why not 23?")
}

// this Boolean expression will evaluate as true because type coercion with the loose equality operator.
// or wrap the prompt in Number(), and use the strict equality operator. 




let dolphinsScores = [196, 108, 89, 77, 200, 132, 121];

let koalasScores = [88, 125, 110];


function averageScore(scores){
let total = 0;    
for(let i=0; i<scores.length; i++){
    console.log(scores[i]) 
    total += scores[i]; 
}
return total/scores.length;
}

let dolphinsAverage = averageScore(dolphinsScores);
let koalasAverage = averageScore(koalasScores);

console.log(dolphinsAverage);
console.log(koalasAverage);

if ((dolphinsAverage && koalasAverage) < 100){
    console.log("No Winner!")
} else if (dolphinsAverage > koalasAverage && dolphinsAverage > 100){
    console.log("Dolphins win! 😁")
} else if (dolphinsAverage < koalasAverage && koalasAverage > 100){
    console.log("Koalas win!")
} else if (((dolphinsAverage && koalasAverage) > 100) && dolphinsAverage === koalasAverage){
    console.log("It's a draw!")
}

*/

// Switch Statement!!!!

const day = 'saturday';
 
switch(day){
    case 'monday': // day == 'monday'
        console.log('Plan course strucutre');
        console.log('Go to coding meet up');
        break;
    case 'tuesday':
        console.log('Prepare theory video')
        break;
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('Work hard');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('not a valid day');
        break;
}

