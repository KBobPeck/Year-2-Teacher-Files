const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    bio: { type: String, required: true },
    social: {
      youtube: { type: String },
      twitter: { type: String },
      instgram: { type: String },
      facebook: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
