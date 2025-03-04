// 2️⃣ Variables & Data Types (5 Questions)
// Create an array of 5 numbers and log the sum using .reduce().

var arr = [1,2,3,4,5];

var k = arr.reduce(function(acc, key)
{
    return acc + key;
},0)

// Output will be 15