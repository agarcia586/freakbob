let decline =document.querySelector('.decline');
let accept =document.querySelector('.right');
let decAcc =document.querySelector('.decAcc');
let text =document.querySelector('p');

let pizza =document.querySelector('.pizza');
pizza.style.display='none';


decline.addEventListener('click',function() {

    decAcc.style.display="none";
    decline.style.display="none";
    accept.style.display="none";

    pizza.style.display='block';

    text.innerHTML="click to eat";
});

pizza.addEventListener('dblclick',function() {

    text.innerHTML="yummmm";
});
