// first, import mongoose so that we can
// connect to the database
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = Schema(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
