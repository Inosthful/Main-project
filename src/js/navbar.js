// function navbar() {
//     var mainNav = document.querySelector('#mainNav');
//     if (mainNav.offsetTop < 100) {
//         mainNav.classList.add('navbar-shrink');
//     } else {
//         mainNav.classList.remove('navbar-shrink');
//     }
// }

// console.log(mainNav.offsetTop);
// console.log(mainNav.height);

// OFFSET = 0 
// The value of mainNav.offsetTop is likely 0 because the element has not yet been positioned 
// within the document. The offsetTop property returns the distance of the element's top edge 
// from the top edge of its offset parent, which is the nearest ancestor element that has a position 
// value other than "static". If the element does not have an offset parent, or if the element's offset
// parent is the root element (<html>), the offsetTop property will be 0.


// Lorsque l'utilisateur fait défiler la page, exécutez la fonction
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Si la position verticale de la page est supérieure à 20px, affichez le bouton
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Lorsque l'utilisateur clique sur le bouton, exécutez la fonction
document.getElementById("myBtn").addEventListener("click", function() {
  // Retourne en haut de la page en utilisant l'animation smooth scroll
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
});

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   // Si la position verticale de la page est supérieure à 20px, affichez le bouton
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

//     mainNav.classList.add('navbar-shrink');
//     mainNav.classList.add('navbar-color')


//     // maybe padding jsp sahmais la collé en haut et la reduire
//   } else {

//     mainNav.classList.remove('navbar-shrink');
//     mainNav.classList.remove('navbar-color')


//   }
// }

// // Lorsque l'utilisateur clique sur le bouton, exécutez la fonction
// document.getElementById("myBtn").addEventListener("click", function() {
//   // Retourne en haut de la page en utilisant l'animation smooth scroll
//   document.body.scrollTop = 0; // Pour Safari
//   document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
// });

