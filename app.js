// 1 CI METHOD
let num = prompt("Dord reqemli eded daxil edin");
let num2 = num.split("");
let equals = 
Number(num2[0]) + 
Number(num2[1]) + 
Number(num2[2]) + 
Number(num2[3]);
console.log(equals);
// 2 CI METHOD
// let number = prompt("Dord reqemli eded daxil edin");
// let number2 = 
// Number(number.substring(0, 1)) + 
// Number(number.substring(1, 2)) + 
// Number(number.substring(2, 3)) + 
// Number(number.substring(3, 4));
// console.log(number2);
// 3 CU METHOD
// let num = prompt("Dord reqemli eded daxil edin");
// let num2 = 
// Number(num.substr(0, 1)) + 
// Number(num.substr(1, 1)) + 
// Number(num.substr(2, 1)) + 
// Number(num.substr(3, 1));
// console.log(num2);
// LESSON 2
let fullName = prompt("Soyadinizi ve adinizi daxil edin");
let name = fullName.split(" ");
let icon = "!";
console.log("Salam," + name[1] + icon);
// 2 CI METHOD
// let fullName = prompt("Soyadinizi ve adinizi daxil edin");
// let name = fullName.split(" ");
// let icon = "!";
// console.log(`Salam,${name[1]}${icon}`);

