const {
  getProfile,
  getUserPosts,
  getFollowers,
  getFollowing,
  followUser,
  unfollowUser,
  updateProfile,
  updatePassword,
  updateMessageSettings,
} = require("../controllers/profile");

const router = require("express").Router();

router.route("/:username").get(getProfile);
router.route("/posts/:username").get(getUserPosts);
router.route("/followers/:userId").get(getFollowers);
router.route("/following/:userId").get(getFollowing);
router.route("/follow/:userToFollowId").post(followUser);
router.route("/unfollow/:userToUnfollowId").put(unfollowUser);
router.route("/update").post(updateProfile);
router.route("/settings/password").post(updatePassword);
router.route("/settings/messagePopup").post(updateMessageSettings);

module.exports = router;
