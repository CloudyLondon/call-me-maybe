const mongoose = require("mongoose");

const reactionSchema = mongoose.Schema(
  {
    reactionId: {
      // Use Mongoose’s ObjectId data type
      type: mongoose.Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      // Set default value to the current timestamp
      // Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      getters: true, //reaction: dont need virtual, use: `getters: true`
    },
    id: false,
  }
);

module.exports = reactionSchema;
