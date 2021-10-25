require("dotenv").config();

//allows errors to be handled without an async wrapper
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// products route
app.use("/api/v1/products", productsRouter);

// error handlers
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//Using a port veriable from the .env will let IT spin up the
//server on any port they want to in the future.

//you can define the port on windows using
//    set PORT=####
//    then you can run node ./app.js on that port
//and on mac using
//    starter % PORT=#### node ./app.js

//the or is there are a default in case the client doesn't
//define it
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
