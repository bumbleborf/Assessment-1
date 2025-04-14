document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector(".dropdown-menu");

    // Hover for desktop
    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) menu.style.display = "none";
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

  // Hamburger toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Carousel logic with autoplay
  const slides = document.querySelectorAll(".carousel-slides img");
  const indicators = document.querySelectorAll(".indicator");
  let currentSlide = 0;
  let slideInterval;

  const showSlide = index => {
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".carousel-slides").style.transform = `translateX(-${index * slideWidth}px)`;
    indicators.forEach(btn => btn.classList.remove("active"));
    indicators[index].classList.add("active");
    currentSlide = index;
  };

  document.querySelector(".next").addEventListener("click", () => {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  });

  indicators.forEach(indicator => {
    indicator.addEventListener("click", () => {
      const index = parseInt(indicator.dataset.slide);
      showSlide(index);
    });
  });

  const startAutoplay = () => {
    slideInterval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }, 4000);
  };

  const stopAutoplay = () => {
    clearInterval(slideInterval);
  };

  document.querySelector(".carousel").addEventListener("mouseenter", stopAutoplay);
  document.querySelector(".carousel").addEventListener("mouseleave", startAutoplay);

  showSlide(0);
  startAutoplay();
});
