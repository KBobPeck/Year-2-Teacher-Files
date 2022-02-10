const UserModel = require("../models/UserModel");

const searchUsers = async (req, res) => {
  const { searchText } = req.params;

  if (searchText.length === 0) return;

  try {
    const results = await UserModel.find({
      name: { $regex: searchText, $options: "i" },
    });

    console.log(results);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).send("server Error @ search controller");
  }
};

module.exports = { searchUsers };
