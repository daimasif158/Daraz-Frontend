document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  let autoSlideTimer;

  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    autoSlideTimer = setInterval(nextSlide, 3500);
  }

  function stopAutoPlay() {
    clearInterval(autoSlideTimer);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      showSlide(idx);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  const sliderWrapper = document.querySelector(".slider-wrapper");
  if (sliderWrapper) {
    sliderWrapper.addEventListener("mouseenter", stopAutoPlay);
    sliderWrapper.addEventListener("mouseleave", startAutoPlay);
  }

  startAutoPlay();
});