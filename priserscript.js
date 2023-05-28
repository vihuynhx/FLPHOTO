// Mobil header 
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// Pris-beregner

// Hent referencer til de nødvendige elementer
const checkboxes = document.getElementsByClassName('setup-costs');
const select = document.getElementById('pakkeVaelger');
const antalKilometerInput = document.getElementById('antalKilometer');
const priceElement = document.getElementById('price');

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
  priceElement.textContent = total.toFixed(2);
}

