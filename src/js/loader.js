// import anime from 'animejs/lib/anime.es.js';


const anime = window.anime;

$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').delay(2200).fadeOut('slow'); // will first fade out the loading animation 
	$('#preloader').delay(3500).fadeOut('slow'); // will fade out the white DIV that covers the website. 

})

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 500,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 100,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "linear",
    duration: 450,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "linear",
    duration: 450,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
    delay: 1750
  });














