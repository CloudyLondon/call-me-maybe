const { User, Thoughts } = require("./../models");
const thoughtsController = {
  // GET all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .select("-__v") //this is from mongoose when the record is being created
      .then((dbThoughtData) => {
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // GET a single thought by its _id and populated thought and friend data
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.id })
      .select("-__v")
      .populate("friends")
      .populate("thoughts")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: "No Thought with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // POST to create a new thought (don’t forget to push the created thought’s _id to the associated user’s thoughts array field)
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((dbThoughtData) => {
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // PUT to update a thought by its _id
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $set: req.body,
      },
      {
        runValidators: true, //its a mongoose thing
        new: true,
      }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // DELETE to remove user by its _id , BONUS: and delete associated thoughts)
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        res.json({ message: "User and associated thoughts deleted!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // POST to create a reaction stored in a single thought’s reactions array field
  addANewReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.params.reactionId } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // DELETE to remove a friend from a user’s friend list
  removeAReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: req.params.reactionId } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtsController;
