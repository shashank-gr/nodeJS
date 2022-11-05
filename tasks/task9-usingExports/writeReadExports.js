//we are readaing the response and writing the response to a file.
const http = require("http");
// const { handeler, someText } = require("./routes");// destructred
// const route= require('./routes) // route.handeler ;route.someText
const requestHandeler = require("./routes");

const server = http.createServer(requestHandeler);
// console.log(someText);
server.listen(3000);
