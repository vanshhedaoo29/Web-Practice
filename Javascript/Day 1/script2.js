/*Age Category Message – Ask the user for their age. If they are
under 18, print “You are a minor.” If they are between 18 and 60,
print “You are an adult.” If they are above 60, print “You are a
senior citizen.” */

// var age = Number(prompt('Enter your Age'))

// console.log('Your age is', age);

// if(age < 18)
// {
//     console.log('You are a minor.');
// }

// else if(age >= 18 && age <=60)
// {
//     console.log('You are an adult.');
// }

// else
// {
//     console.log('You are a senior citizen.');
// }

// Que 1 completed


// Even or Odd Sum – Take two numbers from the user using
// prompt(). If the sum of both numbers is even, print “Even Sum”;
// otherwise, print “Odd Sum.”

var num1 = Number(prompt('Enter number 1'))
var num2 = Number(prompt('Enter number 2'))

var sum = num1 + num2 ;
console.log('The sum is', sum);

if(sum % 2 == 0)
{
    console.log('Even Sum');
}

else
{
    console.log('Odd Sum');
}