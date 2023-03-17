const { ItemModel } = require("../models/Items.model");
const { CocktailModel } = require("../models/Cocktails.model");

module.exports.getUserByName = async (req, resp, next) => {
  try {
    const d = await ItemModel.find({});
    resp.send(d);
  } catch (error) {
    resp.status(500).send(error);
  }
};

module.exports.createUserByName = async (req, res, next) => {
  const item = new ItemModel({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};
