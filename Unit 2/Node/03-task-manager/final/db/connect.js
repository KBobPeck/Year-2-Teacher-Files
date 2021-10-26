const mongoose = require("mongoose");
<<<<<<< HEAD

const connectDB = (url) => {
  return mongoose.connect(
    url
    // {
=======

// const connectionString =
//   "mongodb+srv://Kyle:N6KCt4j27xMsf4cS@task-manager-practice.2qxug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("connected to db"))
//   .catch((err) => console.log(err));


const connectDB = (url) => {
  return mongoose.connect(url, {
    //only required if not using 6x or up
>>>>>>> 922f5c6ff28faa8b7504a11fc31aae117eb0490c
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
<<<<<<< HEAD
    // }
  );
};

module.exports = connectDB;
=======
  });
};

module.exports = connectDB;

>>>>>>> 922f5c6ff28faa8b7504a11fc31aae117eb0490c
