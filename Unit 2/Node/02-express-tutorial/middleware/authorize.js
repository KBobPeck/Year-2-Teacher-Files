const authorize = (req, res, next) => {

  //an expample way of how an API key can be used. NOT PROPPER FOR REAL USE
  //  this is just a small example for now
  const { apikey } = req.query;
  if (apikey === "ping") {
    console.log("authorized");
    //this modifies the req object for the next response
    req.user = { name: "jimmy", id: 123456 };
    next();
  } else {
    console.log("unauthorized access");
    res.send({ results: [], status: 401, message: "unauthorized access" });
  }
};

module.exports = authorize;
