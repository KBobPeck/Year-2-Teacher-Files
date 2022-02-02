//* EXPRESS APP SETUP
const express = require("express");
const app = express();

//* NEXT APP SETUP
//! imports tools from the next library
const next = require("next");
const { default: App } = require("next/app");
//! find out if this is a dev or production build
const dev = process.env.NODE_ENV !== "production";
//! creates a project with dev error templates
const nextApp = next({ dev });
//! import req handlers for the server
const handler = nextApp.getRequestHandler();

//* MIDDLEWARES
const { connectDB } = require("./DB/connect");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
app.use(express.json());

connectDB();

nextApp.prepare().then(() => {
  //*ROUTING */
  // app.use("/api/hello", require("pages/api/hello"));

  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening @ ${PORT}`);
  });
});
