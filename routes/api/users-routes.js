const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addANewFriend,
  removeAFriend,
} = require("./../../controllers/users-controller");

// The `/api/users` endpoint

// get all users
router.route("/").get(getUsers).post(createUser);

// get one user, find a single user by its `id`
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addANewFriend)
  .delete(removeAFriend);

module.exports = router;
