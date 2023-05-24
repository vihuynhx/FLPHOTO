document.addEventListener('DOMContentLoaded', function() {
  var carouselContainer = document.querySelector('.carousel-container');
  var carouselItems = document.querySelector('.carousel-items');
  var carouselUp = document.querySelector('.carousel-up');
  var carouselDown = document.querySelector('.carousel-down');
  var itemHeight = carouselContainer.offsetHeight / 3; // Opdateret højde for 3 synlige billeder
  var currentIndex = 0;

  carouselItems.style.transform = 'translateY(0)'; // Startposition for de synlige billeder

  carouselUp.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = carouselItems.childElementCount - 3; // Opdateret grænseværdi
    }
    updateCarouselPosition();
  });

  carouselDown.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= carouselItems.childElementCount) {
      currentIndex = 0;
    }
    updateCarouselPosition();
  });

  function updateCarouselPosition() {
    var translateYValue = -currentIndex * itemHeight + 'px';
    carouselItems.style.transform = 'translateY(' + translateYValue + ')';
  }
});
