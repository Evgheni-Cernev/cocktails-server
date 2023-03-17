const mongoose = require("mongoose");




// Создаем схему для документов в коллекции
const ingridientSchema = new mongoose.Schema({
  name: String,
  items: Array({
    name: String,
    img: String
  }),
  base: Boolean,
  type: String,
});

// Создаем модель для работы с коллекцией
const IngridientModel = mongoose.model("Ingridient", ingridientSchema);

module.exports = {
  IngridientModel,
};
