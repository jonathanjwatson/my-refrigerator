const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/refrigerator",
  { useNewUrlParser: true }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ingredientRoutes = require("./controllers/ingredientsController.js");
const recipeRoutes = require("./controllers/recipesController.js");

app.use("/api/ingredients", ingredientRoutes);
app.use(recipeRoutes);



app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
