// Ovo je primer citanja velikog Txt fajla koriscenjem buffera
// Napomena: bigtext.txt je fajl velicine 6MB

var fs 		= require('fs');

fs.readFile('bigtext.txt', 'utf8', function(greska, sadrzaj) {
	console.log(sadrzaj);
});



