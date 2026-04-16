// Inicializar ícones Lucide
lucide.createIcons();

// Preloader
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hide");
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  }
});

// Toast
function showToast(msg) {
  var toast = document.getElementById("toast");
  var message = document.getElementById("toast-message");
  message.textContent = msg;
  toast.classList.remove("translate-x-full");
  setTimeout(function () {
    toast.classList.add("translate-x-full");
  }, 3000);
}

// Formulário de contato
var form = document.getElementById("contact-form");
var submitBtn = document.getElementById("submit-btn");
var btnText = document.getElementById("btn-text");
var btnIcon = document.getElementById("btn-icon");
var successMsg = document.getElementById("success-message");

if (form && submitBtn && btnText && btnIcon && successMsg) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    btnText.textContent = "Enviando...";
    submitBtn.classList.add("opacity-70", "pointer-events-none");
    btnIcon.setAttribute("data-lucide", "loader-2");
    btnIcon.classList.add("animate-spin");
    lucide.createIcons();

    setTimeout(function () {
      form.classList.add("hidden");
      successMsg.classList.remove("hidden");
      showToast("Mensagem enviada com sucesso!");

      setTimeout(function () {
        form.reset();
        form.classList.remove("hidden");
        successMsg.classList.add("hidden");
        btnText.textContent = "Enviar Solicitação";
        submitBtn.classList.remove("opacity-70", "pointer-events-none");
        btnIcon.setAttribute("data-lucide", "send");
        btnIcon.classList.remove("animate-spin");
        lucide.createIcons();
      }, 5000);
    }, 1500);
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var href = this.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    var target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Menu Mobile
var mobileMenuToggle = document.getElementById("mobile-menu-toggle");
var mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle("translate-x-full");
  });

  document.querySelectorAll(".mobile-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = link.getAttribute("href");
      mobileMenu.classList.add("translate-x-full");
      setTimeout(function () {
        if (target === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          var section = document.querySelector(target);
          if (section)
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    });
  });

  document.addEventListener("click", function (e) {
    if (
      !mobileMenu.contains(e.target) &&
      !mobileMenuToggle.contains(e.target)
    ) {
      mobileMenu.classList.add("translate-x-full");
    }
  });
}

// Menu Desktop com Scroll Spy
var menuItems = document.querySelectorAll(".menu-item");
var sections = ["#", "#curso", "#depoimentos", "#galeria", "#contato"];

if (menuItems.length > 0) {
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      menuItems.forEach(function (i) {
        i.classList.remove("active");
      });
      item.classList.add("active");
      var target = item.getAttribute("data-target");
      if (target === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        var section = document.querySelector(target);
        if (section)
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  window.addEventListener("scroll", function () {
    if (window.innerWidth < 768) return;
    var scrollPos = window.scrollY + 150;

    if (window.scrollY < 100) {
      menuItems.forEach(function (i) {
        i.classList.remove("active");
      });
      var homeItem = document.querySelector('.menu-item[data-target="#"]');
      if (homeItem) homeItem.classList.add("active");
      return;
    }

    for (var i = sections.length - 1; i > 0; i--) {
      var section = document.querySelector(sections[i]);
      if (section && scrollPos >= section.offsetTop) {
        menuItems.forEach(function (mi) {
          mi.classList.remove("active");
        });
        var activeItem = document.querySelector(
          '.menu-item[data-target="' + sections[i] + '"]',
        );
        if (activeItem) activeItem.classList.add("active");
        break;
      }
    }
  });
}
