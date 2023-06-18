const mongoose = require("mongoose");

// Создаем схему для документов в коллекции
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  filters: {},
  friends: Array(),
  name: String,
  liked_cocktails: {},
  photo: String,
  chats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat'
  }]
});

// Создаем модель для работы с коллекцией
const UserModel = mongoose.model("User", userSchema);

module.exports = {
    UserModel,
};
