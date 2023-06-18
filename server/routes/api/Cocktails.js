const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../utils");
const CocktailController = require("../../controllers/cocktail.controller");

router.post("/search", CocktailController.search);
router.get("/buttons", CocktailController.getAlcohols);
router.post("/favorites", 
// verifyToken,
 CocktailController.getByIds);

module.exports = router;
