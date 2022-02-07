const UserModel = require("../models/UserModel");
const FollowerModel = require("../models/FollowerModel");

const getUserAuth = async (req, res) => {
  const {userId} = req;

  if(!userId) return res.status(500).send("no userId")

  try {
    const user = await UserModel.findById(userId)
    const followers = await FollowerModel.findOne({user:userId})
    return res.status(200).json({user, followers})

  } catch (error) {
    console.log(error);
    return res.status(500).send('server error')
  }
}


module.exports = { getUserAuth }
