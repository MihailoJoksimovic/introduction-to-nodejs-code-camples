// Primer neblokirajuce I/O operacije.
// Ovo je pozeljni stil pisanja u Nodeu

var fs 		= require('fs');

fs.readFile('primer1.js', 'utf8', function(greska, sadrzaj) {
	console.log(sadrzaj);
});

console.log("Ova linija se ispisuje pre nego sto ce se prethodna operacija zavrsiti");


