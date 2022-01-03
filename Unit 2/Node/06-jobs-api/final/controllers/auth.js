const User = require("../models/User");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  //THIS IS OPTIONAL, WE ARE DOING THIS WITH MONGOOSE VALIDATORS
  // const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   throw new BadRequestError('please provide name, email, and password')
  // }

  // THIS IS CREATING A HASH PASSWORD VALUE, MOVED TO MODEL.PRE
  const { password } = req.body;

  const salt = bcrypt.genSalt(10);
  const hashpass = bcrypt.hash(password, salt);
  // alternate style - genSalt() default value is 10
  // const hashpass = bcrypt.hash(password, bcrypt.genSalt())

  const user = await User.create({ ...req.body, password: hashpass });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
