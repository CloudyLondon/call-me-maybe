const { User, Thoughts } = require("./../models");
const usersController = {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addANewFriend,
  removeAFriend,
};

Users.findAll()
  .then((dbProductData) => res.json(dbProductData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

module.exports;
