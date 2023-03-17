const express = require("express");
const router = express.Router();

const CocktailController = require("../../controllers/cocktail.controller");

router.post("/search", CocktailController.search);
router.get("/buttons", CocktailController.getAlcohols);

module.exports = router;
