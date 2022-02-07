const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const FollowerModel = require("../models/FollowerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");
const URL = require("../util/defaultProfilePic");

const regexUsername = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;


const getUserNameAvailable = async (req, res) => {
  const { username } = req.params;

  try {
    if (username.length < 1) return res.status(401).send("Username too Short");

    const test = regexUsername.test(username);
    //TODO I HAVE NO CLUE WHY THIS IS SO TEMPREMENTAL ITS DRIVING ME CRAZY
    if (!(test || regexUsername.test(username))) {
      return res.status(401).send("Username Invalid");
    }


    const user = await UserModel.findOne({ username: username.toLowerCase() });

    if (user) return res.status(401).send("Username already taken");

    return res.status(200).send("Available");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
};

const postLoginAuth = async (req, res) => {
  const { email, password } = req.body.user;

  if (!isEmail(email)) return res.status(401).send("Invalid Email");

  if (password.length < 6) {
    return res.status(401).send("Password must be atleast 6 characters");
  }

  try {
    const user = await UserModel.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

    if (!user) {
      return res.status(401).send("Invalid Credentials");
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).send("Invalid Credentials");
    }

    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
};

const createUser = async (req, res) => {

  const {
    name,
    email,
    username,
    password,
    bio,
    facebook,
    youtube,
    twitter,
    instagram,
  } = req.body.user;

  if (!isEmail(email)) return res.status(401).send("Invalid Email");

  if (password.length < 6) {
    return res.status(401).send("Password must be at least 6 characters");
  }

  try {
    let user;

    user = await UserModel.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(401).send("Email already registered");
    }

    user = await UserModel.findOne({ username: username.toLowerCase() });
    if (user) {
      return res.status(401).send("Username already registered");
    }

    user = new UserModel({
      name,
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password,
      profilePicURL: req.body.profilePicURL || URL,
    });

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    let profileFields = {};
    profileFields.user = user._id;

    profileFields.bio = bio;

    profileFields.social = {};
    if (facebook) profileFields.social.facebook = facebook;
    if (youtube) profileFields.social.youtube = youtube;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;

    await new ProfileModel(profileFields).save();
    await new FollowerModel({
      user: user._id,
      followers: [],
      following: [],
    }).save();

    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
};

module.exports = {getUserNameAvailable, createUser, postLoginAuth}
