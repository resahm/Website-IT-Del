document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });

    // Update the corresponding radio button
    document.querySelector(`input[name="slider"][value="slide-${index + 1}"]`).checked = true;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Automatic slide change every 5 seconds
  setInterval(nextSlide, 5000);

  // Event listeners for navigation
  document.getElementById('slide-1').addEventListener('click', () => showSlide(0));
  document.getElementById('slide-2').addEventListener('click', () => showSlide(1));
  document.getElementById('slide-3').addEventListener('click', () => showSlide(2));

  // Additional event listeners for radio buttons
  document.querySelectorAll('.radio').forEach((radio, index) => {
    radio.addEventListener('change', () => showSlide(index));
  });
});
