const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {

  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return res.status(401).send("unauthorized");
    }

    const token = req.headers.authorization.split(' ')[1]

    //returned from the payload attached to the token
    const {userId} = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = userId

    next()

  } catch (error) {
    console.log(error);
    return res.status(401).send("unauthorized");
  }
};

module.exports = auth;
