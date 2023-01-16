// const hover1 = document.querySelector("#hoverModal1")
// console.log(hover1)

// hover1.addEventListener("mouseover", function(){
//      hover1.classList.add('wobble-hor-bottom') ;
// });

// hover1.addEventListener('mouseout', function(){
//     hover1.classList.remove('wobble-hor-bottom');
// });



// const hover2 = document.querySelector("#hoverModal2")
// console.log(hover2)

// hover2.addEventListener("mouseover", function(){
//      hover2.classList.add('wobble-hor-bottom') ;
// });

// hover2.addEventListener('mouseout', function(){
//     hover2.classList.remove('wobble-hor-bottom');
// });


// const hover3 = document.querySelector("#hoverModal3")
// console.log(hover3)

// hover3.addEventListener("mouseover", function(){
//      hover3.classList.add('wobble-hor-bottom') ;
// });

// hover3.addEventListener('mouseout', function(){
//     hover3.classList.remove('wobble-hor-bottom');
// });


// const hover4 = document.querySelector("#hoverModal4")
// console.log(hover4)

// hover4.addEventListener("mouseover", function(){
//      hover4.classList.add('wobble-hor-bottom') ;
// });

// hover4.addEventListener('mouseout', function(){
//     hover4.classList.remove('wobble-hor-bottom');
// });



// let hover5 = document.querySelector("#hoverModal5")
// console.log(hover5)

// hover5.addEventListener("mouseover", () => {
//      hover5.classList.add('wobble-hor-bottom') ;
// });

// hover5.addEventListener('mouseout', () => {
//     hover5.classList.remove('wobble-hor-bottom');
// });




// pas bon au dessus mais y'a peut etre un truc ( mettre un if ? peut etre ) ( je pars juste apres ) 


// POUR MODAL AJOUTER LA CLASSE DU HOVER DE SCSS MAYBE?

// let animation = document.getElementById("share")
// console.log(animation)

// animation.addEventListener("click", function () {
//     if (animation.classList.contains("unfold")) {
//         for (i = 0; i < 8; i++) {

//             let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.unfold ~ ${test[i]}` )
//             // console.log(stylesheet.cssRules[un])
//             un.style.removeProperty("animation")
//             setTimeout(() => {
//                 un.style.setProperty("opacity", "1")
//             }, 650);
//         }

//         animation.classList.remove("unfold")
//         setTimeout(() => {
//             animation.classList.add("fold")
//         }, 1);

// function navbar() {
//     var mainNav = document.querySelector('#mainNav');
//     if (mainNav.offsetTop < 100) {
//         mainNav.classList.add('navbar-shrink');
//     } else {
//         mainNav.classList.remove('navbar-shrink');
//     }
// }

// if (modal.classList.contains = "fold"){
//   modal.classList.add('unfold')
//   modal.classList.remove('fold')

// }else if(modal.classList.contains = "unfold"){
//   modal.classList.remove('unfold')
//   modal.classList.add('fold')
// }else{
//   modal.classList.add("unfold")
// }

// Get the modal
let modal = document.getElementById("myModal");
// let btn = document.getElementById("myBtn1");
let img = document.getElementById("myImg1");

let span = document.getElementsByClassName("close1")[0];


// When the user clicks on <span> (x), close the modal

// img.onclick = function(){
//   if (modal.classList.contains = "fold"){
//     modal.classList.add('unfold')
//     modal.classList.remove('fold')
  
//   }

//   else{
//     modal.classList.add("unfold")
//   }
// }

// span.onclick = function(){
//   if(modal.classList.contains = "unfold"){
//     modal.classList.remove('unfold')
//     modal.classList.add('fold')
//     console.log("spanonclick")
//   }
// }

img.addEventListener("click", () => {
  if (modal.classList.contains = "fold"){
    modal.classList.add('unfold')
    modal.classList.remove('fold')
  
  }
  else{
    modal.classList.add("unfold")
  }
})

span.addEventListener("click", () =>{
  if(modal.classList.contains = "unfold"){
    setTimeout(() => {
      modal.classList.remove('unfold')
    }, 1);

    setTimeout(() => {
      modal.classList.add('fold')
    }, 1);
  }
})

// hover5.addEventListener("mouseover", () => {
//      hover5.classList.add('wobble-hor-bottom') ;
// });

// hover5.addEventListener('mouseout', () => {
//     hover5.classList.remove('wobble-hor-bottom');
// });

// span.onclick


  //   if (modal.style.display == "none"){
  //   img.onclick = function() {
  //     modal.style.display = "block";
  //     console.log("clickonimage")

  // }
  // }
  // console.log(modal);
  //   if(modal.style.display == "block"){

       
  //         // modal.style.height = "50%";
  //         // modal.style.opacity = "1";
  //       //   window.style.overflow = "hidden"
        
  //       }
  //     }

  




  // modal.style.height = "0%";
  // modal.style.opacity = "0";

// Get the image and insert it inside the modal - use its "alt" text as a caption




// Get the <span> element that closes the modal


// window.onclick = function(event) {
//     if (event.span == modal) {
//       modal.style.display = "none";
//     }
//   }
