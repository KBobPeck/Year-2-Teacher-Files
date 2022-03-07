const {
<<<<<<< HEAD
  getProfileInfo,
  getUserPosts,
  getUserFollowers,
  getUserFollowing,
=======
  getProfile,
  getUserPosts,
  getFollowers,
  getFollowing,
>>>>>>> c32a8c6f88211f84ab3cb1d980f179b23c80ce85
  followUser,
  unfollowUser,
  updateProfile,
  updatePassword,
<<<<<<< HEAD
=======
  updateMessageSettings,
>>>>>>> c32a8c6f88211f84ab3cb1d980f179b23c80ce85
} = require("../controllers/profile");

const router = require("express").Router();

<<<<<<< HEAD
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
=======
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
>>>>>>> c32a8c6f88211f84ab3cb1d980f179b23c80ce85
