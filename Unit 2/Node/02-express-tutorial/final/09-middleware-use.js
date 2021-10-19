const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const authorize = require("./middleware/authorize");
//req => middleware => res
//order matters, if you place the app.use after the
//  home get, then it won't run on the home get since the 
//  response will end before the middleware has a chance to run
// app.use(logger)

//if you have several middle wares then you can call them in an 
//  array and they will be used in order.

//api/home/about/products


app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});

app.use('/api', [logger, authorize]);
//this will apply the logger to any path that includes the /api 
//  as part of its path
//This is a nice way for you to run a logger on an api to stop 
//  a certian amount of requests but still  allow them on the home
//  and the documentation
//app.use('/api', logger)

app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
