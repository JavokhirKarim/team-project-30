const nav = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav-link");

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

for (let navLink of navLinks) {
  navLink.addEventListener("click", function () {
    nav.classList.remove("open");
  });
}
