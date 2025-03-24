var btn = document.querySelector('button')
var h5 = document.querySelector('h5')

btn.addEventListener('click', function(){
    h5.style.color = 'green'
    btn.innerHTML = 'Friends'
})