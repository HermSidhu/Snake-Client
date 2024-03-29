const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('close', () => {
    console.log('You died cuz you idled');
  });
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
  });
  conn.write("Name: SNK");
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 100);
  // setInterval(() => {
  //   conn.write("Move: right")
  // }, 100)
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
};

module.exports = { connect }