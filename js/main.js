function loadPartial(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", () => {

  // Load Header & Footer
  loadPartial("header", "partials/header.html");
  loadPartial("footer", "partials/footer.html");

  // Delay to ensure header is loaded
  setTimeout(() => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("mainNav");
    const overlay = document.getElementById("navOverlay");

    if (burger && nav && overlay) {

      const closeMenu = () => {
        burger.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");
      };

      burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
      });

      overlay.addEventListener("click", closeMenu);

      // Close menu when clicking link
      nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
      });
    }
  }, 300);

});
