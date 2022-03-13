const mongoose = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //use moment
      get: (timestamp) => timestamp, //TODO: Set default value to the current timestamp,     //Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true, //reaction: dont need virtual, use: `getters: true`
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const thought = mongoose.model("Thought", thoughtSchema);

module.exports = thought;
