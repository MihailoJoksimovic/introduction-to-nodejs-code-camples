const fs 	= require('fs');
const path	= require('path');

// Parametri 0 i 1 sadrze putanju do programa koji se izvrsava (nodejs)
// i ime skripte koja je pokrenuta (ova skripta). Stoga, treba nam treci
// parametar koji sadrzi direktorijum koji zelimo da iscitamo
const dir 				= process.argv[2];

fs.readdir(dir, 'utf8', function(error, files) {
	if (error) {
		console.error(error);
		return;
	}
	
	// Iteriramo kroz sve fajlove koji se nalaze u direktorijumu
	files.forEach(function(file) {
		// path.format() ce nam vratiti punu putanju do fajla
		let punaPutanja	= path.format({
			dir: 	dir,
			base: 	file
		})
		
		fs.readFile(punaPutanja, 'utf8', function(error, data) {
			if (error) {
				console.error(error);	
				return;
			}
			
			console.log("Sadrzaj fajla %s je: \n%s\n", file, data);
		});
	});
});