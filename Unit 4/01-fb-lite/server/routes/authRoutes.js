const express = require("express");
const router = express.Router();

const { postLoginUser } = require("../controllers/auth");

router.route("/").post(postLoginUser);

module.exports = router;
