const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var slug = require("mongoose-slug-updater");
mongoose.plugin(slug);
const Course = new Schema(
  {
    name: String,
    description: String,
    image: String,
    videoId: String,
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("course", Course);
