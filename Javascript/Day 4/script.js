// // // function abcd()
// // // {
// // //     // Function 
// // // }

// // // function abcd(a,b,c)   // a, b , c are parameters
// // // {
// // //     console.log(a,b,c);
// // // }
// // // abcd(1,2,3);              // 1, 2, 3 are arguments


// // // // Function Types

// // // function abcd()
// // // {
// // //     console.log('Hello Vansh');
// // //     // Function statement
// // // }

// // // abcd = function()
// // // {
// // //     console.log('Hello Vansh');
// // //     // Function expression
// // // }

// // // function ()
// // // {
// // //     console.log('Hello Vansh');
// // //     // Anonymous function
// // // }

// // // ()=>
// // // {
// // //     // Fat arrow function
// // // }

// // // let abcd = (a)=>
// // // {
// // //     // Fat arrow with one argument
// // // }
// // // abcd(20);

// // // function abcd()
// // // {
// // //     return 12;    // Explicit return function
// // // }
// // // abcd();

// // // let abcd = ()=> 12
// // //     {
// // //         // Fat arrow with implicit return
// // //     }
// // //  var ans = abcd();

// // //  // Rest parameter

// // //  function abcd(a,b,c,...rest)   // ... is rest
// // //  {
// // //     console.log(a,b,c,rest);
// // //  }
// // //  abcd(1,2,3,4,5,6,7,8,9);


// // // let str = "HelloJavascript!";
// // // console.log(str.includes("java"));

// // // console.log(myFunc());
// // // function myFunc()
// // // {
// // //     return "Hoisting";
// // // }

// // const greet = function()
// // {
// //     console.log('Hello!');
// // }
// // greet();
// // greet = function()
// // {
// //     console.log('Hii');
// // }

// function outer()
// {
//     let count = 0
//     return function inner()
//     {
//         count ++;
//         console.log('count');
//     };
// }

// const counter = outer();
// counter();
// counter();