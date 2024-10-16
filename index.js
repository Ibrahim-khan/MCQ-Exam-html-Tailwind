function toggleNavbar() {
    const navbarMenu = document.getElementById('mobile-menu');
    navbarMenu.classList.toggle('hidden');
}



let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
          slide.classList.add('active');
        }
      });

      slideIndex = (slideIndex + 1) % totalSlides; // Go to next slide
      setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    showSlides(); // Start the slideshow


