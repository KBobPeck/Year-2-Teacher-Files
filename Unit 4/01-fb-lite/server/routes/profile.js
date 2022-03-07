const {
  getProfileInfo,
  getUserPosts,
  getUserFollowers,
  getUserFollowing,
  followUser,
  unfollowUser,
  updateProfile,
  updatePassword,
} = require("../controllers/profile");

const router = require("express").Router();

router.route("/:username").get(getProfileInfo);
router.route("posts/:username").get(getUserPosts);
router.route("/followers/:userId").get(getUserFollowers);
router.route("/following/:userId").get(getUserFollowing);
router.route("/follow/:userToFollowId").post(followUser);
router.route("/unfollow/:userToUnfollowId").put(unfollowUser);
router.route("/update").post(updateProfile);
router.route('/settings/password').post(updatePassword)
router.route('/settings/massagePopup').post(updateProfile)


module.exports = router