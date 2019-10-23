/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
const handleUserInput = function() {
  const stdin = process.stdin.on('data', (key) => {
    if (key === '\u0003') 
      process.exit(console.log("\nThanks for slithering!"));
})};
handleUserInput()
setupInput();