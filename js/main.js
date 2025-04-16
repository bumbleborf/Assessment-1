document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector(".dropdown-menu");
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
  const slides = document.querySelectorAll(".carousel-slides img");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;
  function showSlide(index) {
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides;
    document.querySelector(".carousel-slides").style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((btn, i) => {
      btn.classList.toggle("active", i === currentIndex);
    });
  }
  document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });
  document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index);
    });
  });
  let slideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);
  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });
  carousel.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 4000);
  });
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  showSlide(0);
});
