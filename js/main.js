// Dropdown Menu //
document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", function () {
        this.querySelector(".dropdown-menu").style.display = "block";
      });
  
      dropdown.addEventListener("mouseleave", function () {
        this.querySelector(".dropdown-menu").style.display = "none";
      });
  
      dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
        let menu = this.querySelector(".dropdown-menu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      });
  
      document.addEventListener("click", function () {
        dropdown.querySelector(".dropdown-menu").style.display = "none";
      });
    });
  });
  

  // Carousel //
  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

setInterval(nextSlide, 10000); // Auto-slide every 10 seconds
showSlide(currentSlide);

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slides img");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

// Initialize first slide
showSlide(slideIndex);
