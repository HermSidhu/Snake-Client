const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  conn.on('close', () => {
    console.log('You died cuz you idled');
  });
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
  });
  conn.write("Name: SNK")
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
};

module.exports = { connect }