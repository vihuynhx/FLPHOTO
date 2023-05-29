// Mobil header 

//henter variabler fra html
let burgerMenu = document.getElementById('burger-menu');
let overlay = document.getElementById('menu');

burgerMenu.addEventListener('click',function() //laver en click-listener for burgermenu
{
  this.classList.toggle("close"); //toggle tilføjer eller fjerner "close" til elementet. Hvis "close" eksisterer bliver den fjernet, hvis den ikke eksisterer bliver den tilføjet.
  overlay.classList.toggle("overlay"); //samme sker for overlay
});


// Slideshow https://www.w3schools.com/w3css/w3css_slideshow.asp
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



// Pris-beregner

// Hent referencer til de nødvendige elementer
const checkboxes = document.getElementsByClassName('tilvalg');
const select = document.getElementById('pakkeVaelger');
const antalKilometerInput = document.getElementById('antalKilometer');
const prisElement = document.getElementById('livePris');

// Lyt efter ændringer i checkboxe
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', updatePrice);
}

// Lyt efter ændringer i dropdown-menuen
select.addEventListener('change', updatePrice);

// Lyt efter ændringer i antal kilometer-input
antalKilometerInput.addEventListener('input', updatePrice);

// Opdater prisen
function updatePrice() {
  let total = 0;

  // Beregn prisen baseret på valgte checkboxe
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      total += parseInt(checkboxes[i].value);
    }
  }

  // Hent værdien af den valgte pakke
  const selectedPackage = select.value;
  if (selectedPackage) {
    total += parseInt(selectedPackage);
  }

  // Hent antal kilometer
  const antalKilometer = parseInt(antalKilometerInput.value);
  if (!isNaN(antalKilometer)) {
    total += antalKilometer * 2.5;
  }

  // Opdater prisvisningen
  prisElement.textContent = total.toFixed(2);
}

