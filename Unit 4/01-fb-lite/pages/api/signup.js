const UserModel = require("../../server/models/UserModel");
const ProfileModel = require("../../server/models/ProfileModel");
const FollowerModel = require("../../server/models/FollowerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");
const defaultUserPic = require("../../util/defaultProfilePic");
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

signupRoute = async (req, res) => {
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //*GET ROUTE */
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  console.log(req.params);
  if (req.method === "GET" && req.params) {
    const { username } = req.params;

    try {
      if (username.length < 1) return res.status(401).send("Invalid");

      if (!regexUserName.test(username)) return res.status(401).send("Invalid");

      const user = await UserModel.findOne({
        username: username.toLowerCase(),
      });

      if (user) return res.status(401).send("Username already taken");

      return res.status(200).send("Available");
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }

    return res.status(401).send("Invalid");

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //*POST ROUTE */
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  } else if (req.method === "POST") {
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
        return res.status(401).send("User already registered");
      }

      user = new UserModel({
        name,
        email: email.toLowerCase(),
        username: username.toLowerCase(),
        password,
        profilePicUrl: req.body.profilePicUrl || defaultUserPic,
      });

      user.password = await bcrypt.hash(password, 10);
      user = await user.save();

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
        process.env.jwtSecret,
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

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //*ERROR ROUTE */
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  } else {
    res.status(500).send("Method Not Supported");
  }
};

module.exports = signupRoute;
