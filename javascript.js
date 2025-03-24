let slideIndex = 0;

function moveSlide(direction) {
  const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  const slideWidth = slides[0].clientWidth + 20; // image width + margin
  slideIndex += direction;

  // Limit sliding
  if (slideIndex < 0) slideIndex = 0;
  if (slideIndex > slides.length - 3) slideIndex = slides.length - 3;

  const offset = -(slideWidth * slideIndex);
  carousel.style.transform = translateX(${offset}px);
}