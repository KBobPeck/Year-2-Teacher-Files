const UserModel = require('../models/UserModel')
const FollowerModel = require('../models/FollowerModel')

const searchUsers = async (req, res) => {
  const {searchText} = req.params

  if(searchText.length === 0)return

  try {
    let userPattern = new RegExp(searchText)

    const results = await UserModel.find({
      name: {$regex:userPattern, $options: 'i'}
    })

    res.status(200).json(results)
  } catch (error) {
    console.log(error);
    res.status(500).send("server Error @ search controller")
  }
}

module.exports = {searchUsers}