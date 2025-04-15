document.addEventListener("DOMContentLoaded", () => {
  // Hamburger toggle for mobile navigation
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("navLinks");
  
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
    navLinks.classList.toggle("active");
  });

  // Dropdown functionality (desktop hover and mobile click)
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector(".dropdown-menu");

    // Hover for desktop
    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        menu.style.display = "block";
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) {
        menu.style.display = "none";
      }
    });

    // Click for mobile
    dropdown.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        dropdown.classList.toggle("open");
      }
    });

    document.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        dropdown.classList.remove("open");
      }
    });
  });

  // Carousel functionality
  const slides = document.querySelectorAll(".carousel-slides img");
  const indicators = document.querySelectorAll(".indicator");
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 4000);

  function showSlide(index) {
    // Assuming slides are full width, we translate by 100% increments
    document.querySelector(".carousel-slides").style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  document.querySelector(".next").addEventListener("click", () => {
    clearInterval(slideInterval);
    nextSlide();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    clearInterval(slideInterval);
    prevSlide();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(index);
    });
  });

  // Back to Top button functionality
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Initialize the carousel with the first slide
  showSlide(0);
});
