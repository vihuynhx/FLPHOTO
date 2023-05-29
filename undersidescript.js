document.addEventListener('DOMContentLoaded', function() 
{
  let karuselContainer = document.querySelector('.karuselContainer');
  let karuselBilleder = document.querySelector('.karuselBilleder');
  let karuselOp = document.querySelector('.karuselOp');
  let karuselNed = document.querySelector('.karuselNed');
  let karuselhojde = karuselContainer.offsetHeight / 3; // Opdateret højde for 3 synlige billeder
  let currentIndex = 0;


  karuselBilleder.style.transform = 'translateY(0)'; // Startposition for de synlige billeder

  karuselOp.addEventListener('click', function()
  {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = karuselBilleder.childElementCount - 3; // Opdateret grænseværdi
    }
    updateCarouselPosition();
  });

  karuselNed.addEventListener('click', function()
  {
    currentIndex++;
    if (currentIndex >= karuselBilleder.childElementCount) {
      currentIndex = 0;
    }
    updateCarouselPosition();
  });

  function updateCarouselPosition()
  {
    let translateYValue = -currentIndex * karuselhojde + 'px';
    karuselBilleder.style.transform = 'translateY(' + translateYValue + ')';
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