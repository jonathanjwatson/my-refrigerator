const express = require("express");

const router = express.Router();

const Recipe = require("../models/Recipe");

router.post("/api/recipes", (req, res) => {
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
module.exports = router;
