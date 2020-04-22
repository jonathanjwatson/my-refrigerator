const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const RecipeSchema = new Schema(
  {
    title: {
      type: String,
    },
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ingredient",
      },
    ],
    timeToCook: {
      type: Number,
    },
    timeToPrepare: {
      type: Number,
    },
  },
  opts
);

RecipeSchema.virtual("totalTime").get(function () {
  return this.timeToCook + this.timeToPrepare;
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
