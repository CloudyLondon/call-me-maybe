const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
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
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions/").post(addANewReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeAReaction);

module.exports = router;
