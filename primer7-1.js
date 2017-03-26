const EventEmitter = require('events');

class MojPosiljalacDogadjaja extends EventEmitter {}

const mojPosiljalac = new MojPosiljalacDogadjaja();

console.log("Pocetak programa");

setTimeout(function() {
	console.log("Unutar setTimeout() funkcije");
}, 0);

mojPosiljalac.on('dogadjaj', () => {
  console.log('Unutar osluskivaca dogadjaja');
});

mojPosiljalac.emit("dogadjaj");

console.log("Kraj programa");



