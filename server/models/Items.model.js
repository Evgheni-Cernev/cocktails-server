const mongoose = require("mongoose");

// Создаем схему для документов в коллекции
const itemSchema = new mongoose.Schema({
  name_ru: String,
  name_en: String,
  sub_name: String,
  tags: String,
  ingredients_img: Array,
  tools_img: Array,
  ingredients_things: Object,
  steps: Object,
  facts: String
});

// Создаем модель для работы с коллекцией
const ItemModel = mongoose.model("Item", itemSchema);

module.exports = {
    ItemModel,
};
