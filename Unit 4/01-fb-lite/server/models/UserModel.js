const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      //! this means that when you pull the user from mongo the password will not be returned in the response
      select: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    profilePicURL: { type: String },
    newMessagePopup: {
      type: Boolean,
      default: true,
    },
    unreadMessage: {
      type: Boolean,
      default: true,
    },
    unreadNotification: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "root"],
    },
    resetToken: { type: String },
    expireToken: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
