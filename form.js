import {cards}from"./data.js";
console.log(cards);
const form=document.getElementById("form1");
 console.log(form);
 form.addEventListener("submit", addVideo);
 function addVideo(event) {
    event.preventDefault();
   const name = document.getElementById("name__label");
   const thumbnail = document.getElementById("thumbnai1__label");
   const user = document.getElementById("user__label");
    const userImage = document.getElementById("userImage__label");
    const views = document.getElementById("views__label");
 
    console.log(name.value)
    const producto = {
       name:name.value,
       thumbnail:thumbnail.value,
       user:user.value,
       userImage:userImage.value,
       views:views.value,
    };
    cards.push(producto);
    console.log(producto);
    console.log(cards);
};

var inputs = document.querySelectorAll('.input');
console.log(inputs)

form.addEventListener("submit", submit);

function submit(event) {
   event.preventDefault();
inputs.forEach(function(input) {
   // Realizamos la validación para cada input
   if (input.value === '') {
      alert('El input ' + input.getAttribute("id") + ' está vacío')
   
   } else {
     console.log('El valor del input ' + input.name + ' es: ' + input.value);
   }
   return;
 });}