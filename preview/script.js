'use strict';

const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

let i = 0;
const deleteElement = (e) => {
       console.log(e.target);
       console.log(e.type);
}; 

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
       // console.log('Hover');
    //    console.log(e.target);
    
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});