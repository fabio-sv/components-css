function slideShow(position) {
  let len = slides.length;

  for (let i = 0; i < len; i++) {
    slides[i].style.display = "none";
  }
  // Next
  if (position > 0) {
    currentSlide >= len - 1 ? (currentSlide = 0) : currentSlide++;
  }
  // Prev
  if (position < 0) {
    currentSlide <= 0 ? (currentSlide = len - 1) : currentSlide--;
  }
  slides[currentSlide].style.display = "block";

  // Animação dos dots
  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[currentSlide].classList.add("active");
}

function toSlide(value) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[value - 1].style.display = "block";

  // Animação dos dots
  for (let i = 0; i < slides.length; i++) {
    dots[i].classList.remove("active");
  }
  currentSlide = value - 1;
  dots[currentSlide].classList.add("active");
}

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentSlide = 0;
slideShow();
