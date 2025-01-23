const name = "hitesh";
const repoCount = 40;

// console.log(name + repoCount + " Value"); // OUT DATED


// String interpolation (use Backticks (`))

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc');

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // {}
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const newStringOne = "   hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());

const url = "https://hitesh.com/hitesh%20choudhary";

// console.log(url.replace('%20', '-')); 

// console.log(url.includes('%20')); // true
// console.log(url.includes('-'));// false



const game = new String('hitesh-hc-com');
console.log(game.split('-'));