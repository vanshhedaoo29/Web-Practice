// 1️⃣ Console & Basic Operations (5 Questions)
// Write a program that swaps the values of two variables.

var a = 10;                           // Mathod 1
var b = 15;
var temp = 0;

console.log("Before swapping :",a , b);

temp = a;
a = b;
b = temp;

console.log("After swapping :",a , b);   


var a = 10;                             // Method 2
var b = 15;

console.log("Before swapping :",a , b);

[a,b] = [b,a];
console.log("After swapping :",a , b);