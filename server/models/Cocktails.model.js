const mongoose = require("mongoose");

// Создаем схему для документов в коллекции
const cocktailSchema = new mongoose.Schema({
  NameRU: String,
  NameEN: String,
  Tags: Array,
  ImageURL: String,
  Contents: {
    Title: String,
    IngredientsImg: Array,
    Tools: String
  },
  Ingredient: Array,
  Tooles: Array,
  Recipe: {
    Name: String,
    Steps: Array
  },
  History: String
});

// Создаем модель для работы с коллекцией
const CocktailModel = mongoose.model("Cocktail", cocktailSchema);

module.exports = {
  CocktailModel,
};
