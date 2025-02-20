// Simple Calculator – Ask the user for two numbers and an
// operator (+, -, *, /). Perform the operation and display the result.

var num1 = Number(prompt('Enter number 1'));
var num2 = Number(prompt('Enter number 2'));
var opr = prompt('Enter operator (+, -, *, /)');
var result;
switch(opr)
{
    case '+':
    result = num1 + num2;
    break;

    case '-':
    result = num1 - num2;
    break;

    case '*':
    result = num1 * num2;
    break;

    case '/':
    result = num1 / num2;
    break;
}
    
console.log('The result is :',result);
