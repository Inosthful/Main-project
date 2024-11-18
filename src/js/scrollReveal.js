// old version

const sr = ScrollReveal();

sr.reveal(".titreSectionPortfolio", {
  delay: 100,
  duration: 2000,
  distance: "65px",
  origin: "left",
});
sr.reveal(".actual", {
  delay: 150,
  duration: 2000,
  distance: "45px",
  origin: "left",
});
sr.reveal(".iconModal", {
  delay: 100,
  duration: 2000,
  distance: "65px",
  origin: "left",
});

sr.reveal(".exo01", {
  delay: 200,
  duration: 2000,
  distance: "50px",
  origin: "top",
});

sr.reveal(".exo02", {
  delay: 400,
  duration: 2000,
  distance: "50px",
  origin: "top",
});
sr.reveal(".exo03", {
  delay: 600,
  duration: 2000,
  distance: "50px",
  origin: "top",
});
sr.reveal(".exo04", {
  delay: 800,
  duration: 2000,
  distance: "30px",
  origin: "top",
});
sr.reveal(".exo05", {
  delay: 1000,
  duration: 2000,
  distance: "30px",
  origin: "top",
});
sr.reveal(".exo06", {
  delay: 1400,
  duration: 2000,
  distance: "30px",
  origin: "top",
});
sr.reveal(".exo07", {
  delay: 1600,
  duration: 2000,
  distance: "30px",
  origin: "top",
});
sr.reveal(".exo08", {
  delay: 1600,
  duration: 2000,
  distance: "30px",
  origin: "top",
});

sr.reveal(".cvTitle", {
  delay: 1,
  duration: 1,
  distance: "500px",
  origin: "left",
});

sr.reveal(".cvButton", {
  delay: 400,
  duration: 2000,
  distance: "500px",
  origin: "left",
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
