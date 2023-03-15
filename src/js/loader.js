// import anime from 'animejs/lib/anime.es.js';


const anime = window.anime;

$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').delay(2200).fadeOut('slow'); // will first fade out the loading animation 
	$('#preloader').delay(3600).fadeOut('slow'); // will fade out the white DIV that covers the website. 

})

anime.timeline({loop: false})
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





  const queryCursor = document.querySelector(".cursor");

var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $cursor: queryCursor,

  init: function () {
    this.outlineSize = this.$cursor.offsetWidth;
    this.setupEventListeners();
    this.animateDotOutline();
  },

  setupEventListeners: function () {
    var self = this;

    // On Hover Some Elements
    document.querySelectorAll("img").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        queryCursor.classList.add("active");
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        queryCursor.classList.remove("active");
      });
    });
    
    // On Hover Disappears 
    document.querySelectorAll("a, input, textarea").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        queryCursor.classList.add("hidden");
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        queryCursor.classList.remove("hidden");
      });
    });

    document.addEventListener("mousemove", function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
    });

    // Hide/show cursor
    document.addEventListener("mouseenter", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$cursor.style.opacity = 1;
    });

    document.addEventListener("mouseleave", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$cursor.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$cursor.style.top = self._y + "px";
    self.$cursor.style.left = self._x + "px";

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$cursor.style.opacity = 1;
    } else {
      self.$cursor.style.opacity = 0;
    }
  }
};
cursor.init();













