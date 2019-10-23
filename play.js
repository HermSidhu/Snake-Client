const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  conn.on('close', () => {
    console.log('You died cuz you idled');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
}
console.log('Connecting ...');
connect();