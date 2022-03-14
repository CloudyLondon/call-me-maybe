const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThouhght,
  deleteThought,
  addANewReaction,
  removeAReaction,
} = require("./../../controllers/thoughts-controllers");

// The `/api/thoughts` endpoint

// get all thoughts
router.route("/").get(getThoughts).post(createThought);

// get one thoughts, find a single thoughts by its `id`
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThouhght)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions/:reactionId")
  .post(addANewReaction)
  .delete(removeAReaction);

module.exports = router;
