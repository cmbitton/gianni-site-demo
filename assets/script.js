(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var body = document.body;

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".primary-nav a").forEach(function (link) {
    var linkPage = link.getAttribute("href").split("#")[0];
    if (linkPage === currentPage) {
      link.classList.add("is-active");
    }
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.querySelectorAll(".faq-item button").forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.closest(".faq-item");
      var isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Request captured for demo purposes. Connect this form to Gianni's booking or email system before launch.";
      }
    });
  }
})();
