var typed = new Typed(".ty", {
  strings: [
    "I am Web designer",
    "I am YouTuber",
    "I am a Gamer",
    "I am a Programmer",
  ],
  loop: true,
  typeSpeed: 40,
});
particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});
particlesJS.interactivity.onresize = {
  density_auto: true,
  density_area: 200, // number of particles = pJS.particles.nb * (canvas width *  canvas height / 1000) / density_area
};
console.log("hi");
