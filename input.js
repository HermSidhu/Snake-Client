const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => handleUserInput(data, conn))
  return stdin;
}
const handleUserInput = function(data, conn) {
    if (data === '\u0003') 
      process.exit(console.log("\nThanks for slithering!"));
    if (data === "w")
      conn.write("Move: up");
    if (data === "a")
      conn.write("Move: left");
    if (data === "s")
      conn.write("Move: down");
    if (data === "d")
      conn.write("Move: right");   
};

module.exports = {
  setupInput,
}

// setInterval(() => {
//   conn.write("Move: up");
// }, 100);
// setInterval(() => {
//   conn.write("Move: right")
// }, 100)
// interpret incoming data as text