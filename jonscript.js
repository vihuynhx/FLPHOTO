//1) Henter alle elementer fra html

const billeder = document.querySelectorAll('.gallery img'); 
const fuldskaerm = document.getElementById('fuldsskaerm'); 
const fullscreen_billeder = document.getElementById('fuldsskaerm-billeder'); 
const venstrePil = document.querySelector('.venstre'); 
const hojrePil = document.querySelector('.hojre'); 
const exit = document.querySelector('.exit'); 

//EventListener 'lytter' til click

venstrePil.addEventListener('click', tilbage);
hojrePil.addEventListener('click', frem);
exit.addEventListener('click', luk);
document.addEventListener('keydown', navigerMedTastatur); //keydown er en js-keyboardevent 


let vistPaSkaerm = 0; //definer en let varibel 'vistPaSkaerm' som bruges til at 'holde styr' hvad der vises. Starter på 0, derfor er det billede nr.1 

// laver en funktion som viser den rette billede i det givne index
function showFullscreen_billeder(index) 
{
  fullscreen_billeder.src = billeder[index].src; //fuldskærm-billede stien (src) skal være den samme som den aktuelle index-sti
  fuldsskaerm.style.display = 'flex';	           //viser fuldskærmbilledet
}

// laver en funktion som lukker for fuldskærm
function luk() 
{
	fuldsskaerm.style.display = 'none';
}

//laver en funktion til at gå tilbage
function tilbage() 
{
  if (vistPaSkaerm > 0)                 //hvis 'vistPaSkaerm' er størrer end 0 (altså ved 1 eller højere, inde i arrayet)
  {
    vistPaSkaerm --;     //så bliver vistPaSkaerm -1, altså går tilbage

    showFullscreen_billeder(vistPaSkaerm);    //kalder funktionen med den gældende skærm
  }
}

//laver en funktion til at gå frem
function frem() 
{

  if (vistPaSkaerm < billeder.length - 1) //hvis 'vistPaSkaerm' er mindre en billedegalleri-arrayet MINUS 1, for at sørge for at vi er inde i arrayet og altid er -1, for at kunne gå frem
  {
    vistPaSkaerm++;                       // så har vistPaSkaerm +1

    showFullscreen_billeder(vistPaSkaerm);    //kalder funktionen med den gældende skærm
  }
}

//laver en funktion til at bruge piletaster til at gå frem og tilbage
function navigerMedTastatur(e)                //  e er en funktionparamenter for at indikere at paramenteren er en event - for KeybordEvent handle som kan bruges når man trykker på en tast
{ //hvis e.key er lig med arrowright (man tjekker ved at sammenlligne dem) og 'vistPaSkaerm' er mindre en billedegalleri-arrayet MINUS 1
  if (e.key === 'ArrowRight' && vistPaSkaerm < billeder.length - 1) //e.key er fra KeyBoardEvent-objektet - returnere det der et blevet trykkey på
  {                                                                 // standardværdi for e.key til højre og venstre pil er ArrowRight og ArrowLeft som er strengværdier der repræsentere h og v piletaster på tastatur
    vistPaSkaerm++; // så får 'vistPaSkaerm' +1 og kan gå frem
  }
  // ellers hvis e.key er trykkey på (er lig med) arrowleft og skærmen er størrer end 0  
  else if (e.key === 'ArrowLeft' && vistPaSkaerm > 0) 
  {
    vistPaSkaerm--; // så får 'vistPaSkaerm -1 og kan få tilbage
  }

  showFullscreen_billeder(vistPaSkaerm); //kalder den nye 'vistPaSkaerm' ved fuldskærm
}

// Tilføjer click-event listeners til hvert billede i galleriet
billeder.forEach((image, index) =>
{
	image.addEventListener('click', () => 
  {
	  // Opdaterer currentIndex med det klikkede billedes indeks
	  vistPaSkaerm = index;
	  // Viser fuldskærmsbilledet med det nye indeks
	  showFullscreen_billeder(vistPaSkaerm);
	}
  );
  });
  