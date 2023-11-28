const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;
const hostname = "127.0.0.1";

const handleReadFile = (fileName, statusCode, req, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile("./views/index.html", 200, req, res);
  } else if (req.url === "/about") {
    handleReadFile("./views/about.html", 200, req, res);
  } else if (req.url === "/contact") {
    handleReadFile("./views/contact.html", 200, req, res);
  } else {
    handleReadFile("./views/error.html", 404, req, res);
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server is running succesfully at http://${hostname}:${PORT}`);
});
