const http = require('http');

http.get('http://nodejs.org/dist/index.json', function(response) {
	let rawData = '';
	
    response.on('data', function(chunk) {
    	rawData += chunk;
    });
		
	response.on('end', function() {
		try {
			let jsonData = JSON.parse(rawData);
			console.log(jsonData);
		} catch (e) {
			console.log(e);
		}
	});
});