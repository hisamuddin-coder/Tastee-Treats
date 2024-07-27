const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".nav-links-container");

navToggle.addEventListener("click", () => {
  linkContainer.classList.toggle("show-links");
  navToggle.classList.toggle("close");
});
