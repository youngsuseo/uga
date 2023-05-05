document.addEventListener("DOMContentLoaded", function () {
  // Left slide menu functionality
  const hamburger = document.getElementById("hamburger");
  const leftSlideMenu = document.createElement("div");
  leftSlideMenu.className = "left-slide-menu";

  hamburger.addEventListener("click", function () {
    leftSlideMenu.classList.toggle("open");
  });

  document.body.appendChild(leftSlideMenu);
  leftSlideMenu.innerHTML = `
    <h3>User Information</h3>
    <p>Pregnancy weeks, child age, etc.</p>
  `;
});