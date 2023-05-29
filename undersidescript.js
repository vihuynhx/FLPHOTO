
document.addEventListener('DOMContentLoaded', function() //DOMContentLoaded er en event som sikre at hele kode-dokumentet (DOM) er læst og analyseret igennem og er klar til at blive manipuleret med vha.js 
{ //opretter og gemmer variabler fra HTML
  let karuselContainer = document.querySelector('.karuselContainer');
  let karuselBilleder = document.querySelector('.karuselBilleder');
  let karuselOp = document.querySelector('.karuselOp');
  let karuselNed = document.querySelector('.karuselNed');
  let karuselhojde = karuselContainer.offsetHeight / 3; //offsetHeight returnere højden på karuselContainer hvor jeg divider med 3, for at vise 3 synlige billeder 
  let vistPaSkaerm = 0; //lyder det som bliver vist på skærmen til at være lig med 0 for at holde styr på hvad der vises i karusellen


  karuselBilleder.style.transform = 'translateY(0)'; //translateY(0) er en css funktion som sætter y-aksen til være 0, så karuselBilleder ikke flytter sig lodret men forbliver på startspositionen. 

  karuselOp.addEventListener('click', function() //opretter en click-handler til op-knappen
  {
    vistPaSkaerm--; //Gør vistPaSkaerem mindre med -1 så det "viser" det forrige billede i karusellet 
    if (vistPaSkaerm < 0) //hvis den er mindre en 0 så er karusellet på det første billede 
      {
        vistPaSkaerm = karuselBilleder.childElementCount - 3; // så returnerer childElementCountantallet af karuselBilleder med -3 som betyder at der bliver trukket 3 billeder af antal synlige på skærmen 
      }                                                       // altså den går 3 tilbage fra det første billede, når man er på det første billede og trykker op.
    updateCarouselPosition(); //kalder den opdateret karusel med dens nuværende position, altså de 3 billeder
  });

  karuselNed.addEventListener('click', function() //opretter en click-handler til ned-knappen
  {
    vistPaSkaerm++; //øger skærmen med +1 så den viser det næste billede
    if (vistPaSkaerm >= karuselBilleder.childElementCount) 
      { //tjekker om skærmen er større eller lig med antallet med antal child
        vistPaSkaerm = 0; //så bliver skærmen nulstillet med 0 for at starte karusellen forfra
      }
    updateCarouselPosition(); //kalder og opdatere
  });

  function updateCarouselPosition() //en funktion som updatere karusellens postion (vertikalt i y-aksen)
  { // laver en beregning på y-aksen-value, for at finde ud af hvor meget karusellen skal flyttes op eller ned.  
    let translateYValue = -vistPaSkaerm * karuselhojde + 'px'; //ved at gange antallet af synlige billeder vi ønsker med højden på hvert billede får vi en y-akse-value som vi sætter minus foran for at ændre retningen (nedad), da vi ellers får en positivt tal som vil bevæge sig opad)
    karuselBilleder.style.transform = 'translateY(' + translateYValue + ')'; // nu ændre vi style på karuselbilleder med y for at transform den til den beregenede y-akse-value så den kan flytte sig opad og nedad
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