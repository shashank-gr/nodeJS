//we are readaing the response and writing the response to a file.
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log("hi there");
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>message input</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='msg'><button type='submit' >send message</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = []; // to store the user input data
    req.on("data", (chuck) => {
      // .on is an event listener ; data means getting data; data flows in chucks
      body.push(chuck); //pushing all the data chucks to the body
    });
    req.on("end", () => {
      //end means when data stops coming
      const parsedBody = Buffer.concat(body).toString(); // buffer is used to read a group of chucks-->here it is reading the chucks inside body
      console.log(parsedBody); //msg=hahaha
      const message = parsedBody.split("=")[1]; //hahaha i.e is user input

      fs.writeFile("./message", message, (err) => {
        //write files has a cb function with err as params-->if file creation fails-->err is thrown
        res.statusCode = 302;
        res.setHeader("Location", "/");
        //can use below cmd instead of above 2
        //res.writeHeader(statusCode,{"Location":"/","Content-Type":"text/html",...})
        return res.end();
      });
    });
  }
});

server.listen(3000);
