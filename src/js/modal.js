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



// Get the modal
let modal = document.getElementById("myModal");
// let btn = document.getElementById("myBtn1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg1");
img.onclick = function(){
  modal.style.display = "block";
//   window.style.overflow = "hidden"

}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.span == modal) {
      modal.style.display = "none";
    }
  }