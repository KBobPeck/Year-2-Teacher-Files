const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://Kyle:N6KCt4j27xMsf4cS@task-manager-practice.2qxug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("connected to db"))
//   .catch((err) => console.log(err));


const connectDB = (url) => {
  return mongoose.connect(url, {
    //only required if not using 6x or up
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;

