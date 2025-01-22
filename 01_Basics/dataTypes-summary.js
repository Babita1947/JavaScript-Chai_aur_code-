// Primitive Type

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = false; // JavaScriopt is Dynamically Typed Language
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 3433462435236246456n;


// Reference (Non-Primitive Type)

// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagrak", "doga"];

// Object
let myObj = {
    name: "hitesh",
    age: 22,
}

// Function
const myFunction = function(){
    console.log("Hello World");
}

// console.log(myFunction);

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof id);


