// Run everything after the document has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const { gsap } = window; // Get GSAP from global scope

  // === Hamburger toggle (mobile menu) ===
  const hamburger = document.querySelector(".hamburger"); // Hamburger icon
  const navLinks  = document.querySelector(".nav-links"); // Navigation menu

  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("show"); // Toggle 'show' class on menu

    if (open) {
      // Animate menu open using GSAP
      gsap.fromTo(navLinks, { height: 0 }, {
        height: "auto",
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      // Animate menu close using GSAP
      gsap.to(navLinks, {
        height: 0,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  });

  // === Dropdown toggle for mobile ===
  document.querySelectorAll(".dropdown").forEach(dd => {
    dd.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.stopPropagation(); // Prevent other click events
        dd.classList.toggle("open"); // Toggle dropdown
      }
    });
  });

  // Close all open dropdowns if clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.open")
      .forEach(dd => dd.classList.remove("open"));
  });

  // === Carousel logic ===
  const slides          = document.querySelectorAll(".carousel-slides img"); // All slide images
  const indicators      = document.querySelectorAll(".indicator");           // Navigation dots
  const slidesContainer = document.querySelector(".carousel-slides");       // Slide container
  let currentIndex      = 0; // Index of currently visible slide

  // Function to show a specific slide by index
  function showSlide(i) {
    const total = slides.length; // Total number of slides
    currentIndex = (i + total) % total; // Loop around at edges

    // Move the container to the selected slide
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active indicator
    indicators.forEach((btn, idx) =>
      btn.classList.toggle("active", idx === currentIndex)
    );
  }

  // === Carousel controls ===
  document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentIndex - 1); // Show previous slide
  });

  document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentIndex + 1); // Show next slide
  });

  // Dot indicators click functionality
  indicators.forEach((btn, idx) => {
    btn.addEventListener("click", () => showSlide(idx));
  });

  // Start with the first slide
  showSlide(0);

  // Auto-advance slides every 4 seconds
  setInterval(() => showSlide(currentIndex + 1), 4000);

  // === Back-to-top button ===
  const backBtn = document.getElementById("backToTopBtn");

  // Show button when scrolled past 100px
  window.addEventListener("scroll", () => {
    backBtn.classList.toggle("show", window.pageYOffset > 100);
  });

  // Scroll to top when button clicked
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Animate 'Just Added' section ===
  gsap.to(".just-added .item", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: 0.2, // Animate one after another
    from: { y: 30 } // Start slightly below and rise up
  });
});
