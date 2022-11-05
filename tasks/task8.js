const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.write("<html>");
    res.write("<head><title>message input</title></head>");
    res.write(
      "<body><form action='/' method='POST'><input type='text' name='msg'><button type='submit' >send message</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/" && method === "POST") {
    const body = [];
    req.on("data", (chuck) => {
      body.push(chuck);
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-type": "text/html" });
      const parsedbody = Buffer.concat(body).toString();
      res.write("<html>");
      res.write("<head><title>message input</title></head>");
      res.write(parsedbody.split("=")[1]);
      res.write(
        "<body><form action='/' method='POST'><input type='text' name='msg'><button type='submit' >send message</button></form></body>"
      );
      res.write("</html>");

      return res.end();
    });
  }
});
server.listen(5000);
