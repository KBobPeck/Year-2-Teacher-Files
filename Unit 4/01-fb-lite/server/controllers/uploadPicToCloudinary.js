const fs = require('fs')
const cloudinary = require('cloudinary').v2

const uploadProductImage = async (req, res) => {
  const src = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "Profile Pics",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(200).json({src: src.secure_url});
};

module.exports = {uploadProductImage};
