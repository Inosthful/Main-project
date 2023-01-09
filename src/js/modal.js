$("#hoverModal1").mouseover(function(){
    $("#hoverModal1").css("transform", "scale(1.1)");

})
$("#hoverModal1").mouseout(function(){
    $("#hoverModal1").css("transform", "scale(1)");
})


$("#hoverModal2").mouseover(function(){
    $("#hoverModal2").css("transform", "scale(1.1)");
})
$("#hoverModal2").mouseout(function(){
    $("#hoverModal2").css("transform", "scale(1)");
})


$("#hoverModal3").mouseover(function(){
    $("#hoverModal3").css("transform", "scale(1.1)");

})
$("#hoverModal3").mouseout(function(){
    $("#hoverModal3").css("transform", "scale(1)");
})


$("#hoverModal4").mouseover(function(){
    $("#hoverModal4").css("background", "black");

})
$("#hoverModal4").mouseout(function(){
    $("#hoverModal4").css("background", "none");
})


$("#hoverModal5").mouseover(function(){
    $("#hoverModal5").classList.add("flip-2-hor-top-1");

})
$("#hoverModal5").mouseout(function(){
    $("#hoverModal5").classList.remove("flip-2-hor-top-1");
})

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