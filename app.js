const http = require("http"); // importing the http module from node

const server = http.createServer((req, res) => {
  console.log("shashanka");
  console.log(req);
  res.write("<h1>Shashanka</h1>");
});

server.listen(4000);
