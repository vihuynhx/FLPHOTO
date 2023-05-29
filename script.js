// Mobil header 
let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});



// STORT BILLEDE -- SOURCE: (https://simpleparallax.com/)
let image = document.getElementsByClassName('bigImage');
new simpleParallax(image);

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


// Slideshow af anmeldelser på forsdien https://www.w3schools.com/w3css/w3css_slideshow.asp
let slideIndex = 1; //opretter slideIndex varibel med sætter lig med 1 som start
showSlides(slideIndex); // kalder funktionen så den første slide, billede, vises

function plusSlides(n) //laver en funktion til argument n
{
  showSlides(slideIndex += n); //kalder slideshow + med den opdateret index
}

function currentSlide(n) //laver en funktion med den nuværende slide
{
  showSlides(slideIndex = n); //kalder og viser og nuværende slide
}

function showSlides(n) 
 { //henter elementer fra HTML og gemmer i myslides og dor
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    //hvis værdien af slide-længden er større end antallet af slides = 1. Dvs, når man når sidste slide vil man se det første igen ved næste 
  if (n < 1) {slideIndex = slides.length} //hvis værdien af slide-længden er mindre end antallet af slides, vil man se det sidste slide, når man går tilbage fra det første

  for (i = 0; i < slides.length; i++) //laver en for løkke som gennengår alle slides 
  {
    slides[i].style.display = "none";  //viser display none for andre slides end den nuværende slide
  }
//opdatere visningen af slides og markører i slideshowet
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", ""); //replacer active med "" - det fjerner effekten af at aktivt dot og gør det inaktivt.
  }
  slides[slideIndex-1].style.display = "block"; //synliggøre slide ved at gøre det til block
  dots[slideIndex-1].className += " active"; //gør den aktuelle slide actice
}

