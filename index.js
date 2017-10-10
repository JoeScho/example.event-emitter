const EE = require('events');

class MyEmitter extends EE { }

const myEmitter = new MyEmitter();

myEmitter.once('event', (date) => {
  console.log(`An event occurred at ${date}!`);
});

myEmitter.on('error', (err) => {
  console.log(`You've ruined everything. ${err}`);
});

function emitEvent () {
  myEmitter.emit('event', new Date())
}

setTimeout(emitEvent, 500);
setTimeout(emitEvent, 1000); // Ignored

myEmitter.emit('error', new Error('NOOOOOOO'));