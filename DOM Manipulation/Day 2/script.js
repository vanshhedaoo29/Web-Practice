// var num = Math.floor(Math.random()*100)

// console.log(num);

// var a = 19

// console.log(`hello ${a} bye`);   // Template Literals


// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn.addEventListener('click', function(){
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)

//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// })



let arr = ['CSK', 'MI', 'GT', 'SRH', 'RCB', 'PBKS', 'RR', 'LSG', 'KKR','DC']

let btn = document.querySelector('button')
let h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*arr.length) 
    let winner = arr[num]
    h1.innerHTML = winner
})

// console.log(num);




