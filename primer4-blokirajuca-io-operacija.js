// Primer blokirajuce I/O operacije.
// Ovo NIJE dozvoljeno u Nodeu i treba izbegavati

var fs 		= require('fs');

var sadrzaj = fs.readFileSync('primer1.js', 'utf8');

// Ova linija ce se izvrsiti tek nakon sto se zavrsi citanje fajla na liniji 6.
console.log(sadrzaj);


