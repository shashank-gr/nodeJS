const http = require("http"); // importing the http module from node

const server = http.createServer((req, res) => {
  console.log(req.headers); //gives me the incoming request header
  console.log(req.url); //gives me the incoming req URL
  console.log(req.method); //gives the incoming req method; default: GET
  const url = req.url; //getting the request url and storing it
  res.setHeader("Content-Type", "text/html"); //setting the response header
  // res.setHeader("Authentication", "auth tocken here");
  if (url == "/home") {
    res.write("<h1>Welcome Home</h1>");
  } else if (url == "/about") {
    res.write("<h1>Welcome to About Us Page</h1>");
  } else if (url == "/node") {
    res.write("<h1>Welcome to my Node Js project</h1>");
  } else {
    res.write("<h1>Enter valid route</h1>");
  }

  res.end();
});

server.listen(4000);
