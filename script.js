// ===== THEME TOGGLE =====
(function () {
  const html = document.documentElement;
  const stored = localStorage.getItem("portfolio-theme");
  if (stored === "light") {
    html.setAttribute("data-theme", "light");
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  // Theme toggle
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const html = document.documentElement;
      const current = html.getAttribute("data-theme");
      if (current === "light") {
        html.removeAttribute("data-theme");
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        html.setAttribute("data-theme", "light");
        localStorage.setItem("portfolio-theme", "light");
      }
    });
  }

  // Nav scroll effect
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        mobileMenu.classList.remove("open");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
      } else {
        mobileMenu.classList.add("open");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
      });
    });
  }

  // Intersection Observer for scroll animations
  const animatedEls = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Apply stagger delay based on data attribute
          const delay = entry.target.getAttribute("data-delay") || 0;
          setTimeout(function () {
            entry.target.classList.add("visible");
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedEls.forEach(function (el) {
    observer.observe(el);
  });

  // Skill bars animation
  const skillBars = document.querySelectorAll(".skill-bar-fill");
  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const target = entry.target;
          const width = target.getAttribute("data-width");
          target.style.width = width + "%";
          skillObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.1 }
  );

  skillBars.forEach(function (bar) {
    skillObserver.observe(bar);
  });
});
