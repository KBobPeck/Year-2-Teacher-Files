const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
<<<<<<< HEAD:Unit 2/Node/02-express-tutorial/04-express-app.js

//this will return the html to the page but it will still
//have the errors from the node way. 
//this is fixed using .use in the next file
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
=======
app.use(express.static("./navbar-app"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});
>>>>>>> eba43cac10aeaca40e0038868cfc796f31385ef9:Unit 2/Node/02-express-tutorial/final/04-express-app.js

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
