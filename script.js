// STORT BILLEDE -- kode taget fra hjemmesiden: (https://simpleparallax.com/)

var image = document.getElementsByClassName('bigimage');
new simpleParallax
(image, 
	{
		scale: 1.5
	}
);

//SEND KNAP ALERT
function validerfelter()
{
	let navn = document.getElementById("skrivboks").value; 
	let email = document.getElementById("skrivboks").value;
	let besked = document.getElementById("beskedindhold").value;
	let kategori = document.getElementById("selectkategori").value;

	if(navn  == "" || email  == "" || besked  == ""|| kategori  == "" ) //hvis navn,mail,besked,kategori = intet input
	{
		alert("Udfyld venligst alle felter");						//opstår alert
	}
	else
	{
		window.location.href = "tak.html";							//ellers kommer man ind på tak.html
	}

}


