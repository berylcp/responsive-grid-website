const navToggle = document.querySelector(".nav-toggle input");
const nav = document.querySelector("nav ul");

navToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
