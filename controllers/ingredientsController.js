const express = require("express");

const router = express.Router();

const Ingredient = require("../models/Ingredient");

router.get("/", (req, res) => {
  Ingredient.find({})
    .then((allIngredients) => {
      res.json(allIngredients);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  //TODO: Single ingredient by id
  Ingredient.findById(req.params.id)
    .then((foundIngredient) => {
      res.json(foundIngredient);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
  // TODO: Update a specific ingredient by ID
  Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedIngredient) => {
      res.json(updatedIngredient);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  // TODO: remove a specific ingredient by ID
  Ingredient.findByIdAndDelete(req.params.id)
    .then((deletedIngredient) => {
      res.json(deletedIngredient);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
