const EventEmitter = require('events');

class MojPosiljalacDogadjaja extends EventEmitter {}

const mojPosiljalac = new MojPosiljalacDogadjaja();

mojPosiljalac.on('dogadjaj', () => {
  console.log('Uhvacen dogadjaj!');
});

console.log("Pre slanja dogadjaja");

mojPosiljalac.emit('dogadjaj');

console.log("Nakon slanja dogadjaja");

