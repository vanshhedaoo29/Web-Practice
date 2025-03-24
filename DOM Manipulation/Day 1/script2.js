var h1 = document.querySelectorAll('h1')

h1[0].innerHTML = 'Changed Num 1'

var box = document.querySelector('#box')

box.textContent = 'changed'
box.innerHTML = '<h1>COHORT</h1>'

var button = document.querySelector('button')
var box = document.querySelector('#box')

button.addEventListener('click', function(){
    box.style.backgroundColor = 'red'
})