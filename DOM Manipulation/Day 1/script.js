// DOM - Document Object Model
// Frontend ki JavaScript

// 4 pillars of JS

// - Selection of Element ✅
// - Changing HTML ✅
// - Changing CSS ✅
// - Event Listener ✅


var h = document.querySelector('h1')    // Selection of Element

// h.innerHTML = 'Vansh Hedaoo'   // Changing HTML

// h.style.color = 'blue'                // Changing CSS
// h.style.backgroundColor = 'lightblue'

h.addEventListener('click', function(){
    h.innerHTML = 'Vansh Hedaoo'   

    h.style.color = 'blue'                // Event Listener
    h.style.backgroundColor = 'lightblue'
    console.log('Elvish Bhaiiiiii...');
})