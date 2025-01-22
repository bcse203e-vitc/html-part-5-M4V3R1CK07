const themeToggleBtn = document.querySelector(".theme-toggle-btn");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
