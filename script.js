

// STORT BILLEDE -- kode taget fra hjemmesiden: (https://simpleparallax.com/)

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

