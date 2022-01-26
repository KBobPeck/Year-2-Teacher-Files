//! creates an app using express
const app = require("express")();

//! this is a required step for next. nextjs creates its own server and you need to overwrite it
const server = require("http").server(app);

const express = require("express");
//! imports the tools from the nextjs library
const next = require("next");

//! true or false to check we are running production or development
const dev = process.env.NODE_ENV !== "production";

//! the true or false will tell next if it is in production mode
const nextApp = next({ dev });

//! this is the built in next router that can handle all the requests to the server
const handle = nextApp.getRequestHandler();

const { connectDB } = require("./server/connect");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json())
connectDB();

nextApp.prepare().then(() => {
  //! passes all page requests to the server for the next app. this is required due to ssr (server-side-rendering)
  app.all("*", (req, res) => handle(req, res));
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server running on port ${PORT}`);
  });
});
