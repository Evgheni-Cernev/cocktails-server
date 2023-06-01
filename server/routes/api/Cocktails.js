const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../utils");
const CocktailController = require("../../controllers/cocktail.controller");

router.post("/search", verifyToken, CocktailController.search);
router.get("/buttons", CocktailController.getAlcohols);
router.post("/favorites", CocktailController.getByIds);

module.exports = router;
