// ----- Example1 --------

let score1 = "33abc";

// console.log(typeof score1);//string
// console.log(typeof(score1));//string

let valueInNumber1 = Number(score1);
// console.log(typeof valueInNumber1); //number
// console.log(valueInNumber1); //NaN

// // --------- Example2 ---------
let score2 = null;

// console.log(typeof score2);//object
// console.log(typeof(score2));//object

let valueInNumber2 = Number(score2);
// console.log(typeof valueInNumber2); //number
// console.log(valueInNumber2); //0

// --------- Example3 ---------
let score3 = undefined;

// console.log(typeof score3);//undefined
// console.log(typeof(score3));//undefined

let valueInNumber3 = Number(score3);
// console.log(typeof valueInNumber3); //number
// console.log(valueInNumber3); //NaN

// ------NOTE----------

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
let stringIsLoggedIn = String(isLoggedIn);

// console.log(booleanIsLoggedIn);// true
// console.log(typeof booleanIsLoggedIn);// boolean

// console.log(stringIsLoggedIn);  // 1
// console.log(typeof stringIsLoggedIn); // string


// -----NOTE-------

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


// ----------------- Operations --------------------

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // ** => power
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log((3 + 4) * 5 % 3);


// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // not correct way to write like this (tricky behaviour)

// console.log([num1, num2, num3]);

// let gameCounter = 100;
// let y1 = ++gameCounter;
// let z1 = gameCounter++;

// console.log(gameCounter);
// console.log(y1);
// console.log(z1);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
