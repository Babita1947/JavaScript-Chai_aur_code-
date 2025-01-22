const accountId = 144553;
let accountEmail = "babita@gmail.com";
var accountPassword = "12345"; //scope problem so not used
accountCity = "Jaipur";// possible but not use 
let accountState;

//accountId = 2; // not allowed 

accountEmail = "nanki@gmail.com";
accountPassword = "23456j7";
accountCity = "Bengal";

/*
Prefer not to use var
beacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);