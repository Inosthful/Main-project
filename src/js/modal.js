

// // Get the modal
// let modal = document.getElementById("myModal");
// // // let btn = document.getElementById("myBtn1");
// // let img = document.getElementById("myImg1");

// let span = document.getElementsByClassName("close1")[0];

// console.log(img)
// img.addEventListener("click", () => {
//   if (modal.classList.contains("fold")){
//     modal.classList.remove('fold');
//     modal.classList.add('unfold');

//   } else{
//     modal.classList.add("unfold");
//   }
//   console.log(img)
// });

// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.modal')|| modal.classList.contains("fold")) {
//       modal.classList.remove("unfold");
//       modal.classList.add("fold");
//   }
// });


// span.addEventListener('click', () =>{
//   if(isVisible(modal)){
//     hide(modal);
//   }
// })

// document.addEventListener('click', ()=>{
//   if(isVisible(modal)){
//     hide(modal)
//   }
// })



// set the modal menu element
const $targetEl = document.getElementById('myModal');

// options with default values
const options = {
  placement: 'center',
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900 bg-opacity-30 dark:bg-opacity-80 fixed inset-0 z-40',
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
};

import { Flowbite } from 'flowbite';
/*
* $targetEl: required
* options: optional
*/
const modal = new Flowbite.Modal($targetEl, options);

// La mienne en bas 








// img.addEventListener("click", () => {
//   if (modal.classList.contains = "fold"){
//     modal.classList.add('unfold')
//     modal.classList.remove('fold')

//   }
//   else{
//     modal.classList.add("unfold")
//   }
// })

// document.addEventListener('click', () =>{
//   if (modal.classList.contains == "unfold") {
//     setTimeout(() => {
//       modal.classList.remove('unfold')
//     }, 1);
//     setTimeout(() => {
//       modal.classList.add('fold')
//     }, 1);
//     }
// })

// span.addEventListener("click", () =>{
//   if(modal.classList.contains = "unfold"){
//     setTimeout(() => {
//       modal.classList.remove('unfold')
//     }, 1);

//     setTimeout(() => {
//       modal.classList.add('fold')
//     }, 1);
//   }
// })

