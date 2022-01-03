<<<<<<< HEAD:Unit 2/Node/02-express-tutorial/05-all-static.js
const express = require('express')
const app = express()
=======
const express = require("express");
const path = require("path");

const app = express();
>>>>>>> eba43cac10aeaca40e0038868cfc796f31385ef9:Unit 2/Node/02-express-tutorial/final/05-all-static.js

const path = require('path')

// setup static and middleware
<<<<<<< HEAD:Unit 2/Node/02-express-tutorial/05-all-static.js
//I changed the name of the folders /methods... and /navbar... to /public individually
//this allows the students to see that they are both working

//express.static is for any site that does not have updating information
//this does not mean the js changing the site.

//THIS WILL NOT WORK ON JAVASCRIPT YET BUT YOU CAN CLICK IT TO 
//TO SEE WHAT HAPPENS WHEN THE DATA FAILS TO LOAD
app.use(express.static('./public'))
=======
app.use(express.static("./public"));
>>>>>>> eba43cac10aeaca40e0038868cfc796f31385ef9:Unit 2/Node/02-express-tutorial/final/05-all-static.js

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
