const express = require("express");
const router = express.Router();

const { uploadProfilePic } = require("../controllers/uploadPicToCloudinary");

router.route("/").post(uploadProfilePic);

module.exports = router;
