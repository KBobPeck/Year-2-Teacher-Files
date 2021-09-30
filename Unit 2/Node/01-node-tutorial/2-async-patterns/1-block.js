//the point of this example is that it take a long
//time to run the loop in the middle called blocking code
//if you have 3 tabs open to the home page everything
//will load fine but change one page to /about and then
//even the home pages will take time to load since
//the about page is loading, thus blocking the entire server

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
