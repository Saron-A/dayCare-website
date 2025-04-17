let menu = document.querySelector(".hamburger"),
  links = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  links.classList.toggle("active");
});
