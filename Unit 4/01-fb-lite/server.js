//* EXPRESS APP SETUP
const express = require("express");
const app = express();

//* NEXT APP SETUP
//! imports tools from the next library
const next = require("next");
//! find out if this is a dev or production build
const dev = process.env.NODE_ENV !== "production";
//! creates a project with dev error templates
const nextApp = next({ dev });
//! import req handlers for the server
const handler = nextApp.getRequestHandler();

//*ROUTES */
const signupRoute = require("./pages/api/signup");

//* MIDDLEWARES
const { connectDB } = require("./server/util/connect");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
app.use(express.json());

connectDB();

nextApp.prepare().then(() => {
  //*ROUTING */
  app.use("/api/v1/signup/:username", signupRoute);

  //*SERVER HANDLING */
  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening @ ${PORT}`);
  });
});
