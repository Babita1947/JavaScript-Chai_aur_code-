// Dates

let myDate = new Date();
// console.log(myDate); // 2025-01-23T07:27:25.586Z
// console.log(myDate.toString()); // Thu Jan 23 2025 12:57:25 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Thu Jan 23 2025
// console.log(myDate.toISOString()); // 2025-01-23T07:28:34.916Z
// console.log(myDate.toJSON()); // 2025-01-23T07:29:28.500Z
// console.log(myDate.toLocaleDateString()); // 1/23/2025
// console.log(myDate.toLocaleString()); // 1/23/2025, 1:00:38 PM
// console.log(myDate.toLocaleTimeString()); // 1:01:16 PM
// console.log(myDate.toTimeString()); // 13:01:57 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); // Thu, 23 Jan 2025 07:32:40 GMT
// console.log(myDate.getTimezoneOffset()); // -330

// console.log(typeof myDate); // object

// ------------------- Formate-1 ---------------------
// let myCreatedDate = new Date(2025, 0, 23);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString()); 

// ------------------- Formate-2 ----------------------
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// -------------------- Formate-3 ----------------------
 let myCreatedDate = new Date("01-23-2025");
// console.log(myCreatedDate.toLocaleString());

// -------------------- Formate-4 ----------------------
let myTimeStamp = new Date();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


// console.log(myTimeStamp.getDate());
// console.log(myTimeStamp.getFullYear());

// convert in miliseconds to seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
});


