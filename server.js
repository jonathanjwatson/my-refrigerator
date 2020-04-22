const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const Recipe = require("./models/Recipe");
const Ingredient = require("./models/Ingredient");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/refrigerator",
  { useNewUrlParser: true }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/ingredients", (req, res) => {
  Ingredient.create(req.body)
    .then((createdIngredient) => {
      res.json(createdIngredient);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

app.post("/api/recipes", (req, res) => {
  Recipe.create(req.body)
    .then((createdRecipe) => {
      res.json(createdRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
