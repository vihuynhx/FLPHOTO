document.addEventListener('DOMContentLoaded', function() {
  let carouselContainer = document.querySelector('.carousel-container');
  let carouselItems = document.querySelector('.carousel-items');
  let carouselUp = document.querySelector('.carousel-up');
  let carouselDown = document.querySelector('.carousel-down');
  let itemHeight = carouselContainer.offsetHeight / 3; // Opdateret højde for 3 synlige billeder
  let currentIndex = 0;


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
    let translateYValue = -currentIndex * itemHeight + 'px';
    carouselItems.style.transform = 'translateY(' + translateYValue + ')';
  }
});



//SEND KNAP ALERT
function validerfelter()
{
	let navn = document.getElementById("skrivBoks").value; 
	let email = document.getElementById("skrivBoks").value;
	let besked = document.getElementById("beskedIndhold").value;
	let kategori = document.getElementById("selectKategori").value;

	if(navn  == "" || email  == "" || besked  == ""|| kategori  == "" ) //hvis navn,mail,besked,kategori = intet input
	{
		alert("Udfyld venligst alle felter");						//opstår alert
	}
	else
	{
		window.location.href = "tak.html";							//ellers kommer man ind på tak.html
	}

}