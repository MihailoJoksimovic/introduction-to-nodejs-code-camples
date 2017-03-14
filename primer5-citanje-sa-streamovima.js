// Ovo je primer citanja velikog Txt fajla koriscenjem streamova.

var fs 		= require('fs');

var stream	= fs.createReadStream('bigtext.txt');
stream.setEncoding('utf8');

stream.on('data', function(chunk) {
	// Ovaj kod ce se pozivati sa parcicima tekst fajla,
	// sve dok se ne procita ceo fajl.
	// Velicine parcica (chunks) zavise od samog stream-a
	// i obicno su velicine nekoliko KB-a.

	console.log(chunk);
});

stream.on('end', function(chunk) {
	console.log("Kraj fajla!");
});



