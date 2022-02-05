const express = require("express");
const router = express.Router();

const { getUserNameAvailable, createUser } = require("../controllers/user");

router.route("/").post(createUser);
router.route("/:username").get(getUserNameAvailable);

module.exports = router;
