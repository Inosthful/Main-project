const sr = ScrollReveal()
 

sr.reveal('.titreSectionPortfolio',{
    delay: 100,
    duration: 2000,
    distance: "65px",
    origin: "left"
})
sr.reveal('.actual',{
    delay: 150,
    duration: 2000,
    distance: "45px",
    origin: "left"
})
sr.reveal('.iconModal',{
    delay: 100,
    duration: 2000,
    distance: "65px",
    origin: "left"
})

sr.reveal('.exo01',{
    delay: 200,
    duration: 2000,
    distance: "50px",
    origin: "top"
});

sr.reveal('.exo02',{
    delay: 400,
    duration: 2000,
    distance: "50px",
    origin: "top",

});
sr.reveal('.exo03',{
    delay: 600,
    duration: 2000,
    distance: "50px",
    origin: "top"
});
sr.reveal('.exo04',{
    delay: 800,
    duration: 2000,
    distance: "30px",
    origin: "top"
});
sr.reveal('.exo05',{
    delay: 1000,
    duration: 2000,
    distance: "30px",
    origin: "top"
});

sr.reveal('.cvTitle',{
    delay: 1,
    duration: 1,
    distance: "500px",
    origin: "left"
})

sr.reveal('.cvButton',{
    delay: 400,
    duration: 2000,
    distance: "500px",
    origin: "left"
})


// let slide = document.querySelector("#travaux");

// let porte = document.querySelector("#porfolio");
// // let animation = document.querySelector(".animationP");
// slide.addEventListener("click", function(){
//     slide.classList.add("animationP")
//     porte.classList.add("animationP")
// })

// let travaux  = document.querySelector("#travaux")
// travaux.addEventListener("click", () => {

//     travaux.style.transition = "all 1.5s";
// })

//  https://www.youtube.com/watch?v=y9nlfqT4s9s SCROLL SMOOTH ICONE CLICK

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});