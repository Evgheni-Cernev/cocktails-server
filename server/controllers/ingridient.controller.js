const { IngridientModel } = require("../models/Ingridients.model");

module.exports.getAllGroups = async (req, res, next) => {
  IngridientModel.find().where(req.query).exec(function (err, value) {
    if (err) return res.status(500).send(err);
    res.send(value.map(({ _doc }) => ({ ..._doc, items: _doc.items[0].img })));
  });
};

module.exports.getAll = async (req, res, next) => {
  const ingridients = await IngridientModel.find({});
  try {
    res.send(ingridients);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getByName = async (req, res, next) => {
  const ingridients = await IngridientModel.findOne().where(req.params) ?? [];
  try {
    res.send(ingridients);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getGroupsByType = async (req, res, next) => {
  const ingridients = await IngridientModel.find().where(req.params)
  try {
    res.send(ingridients);
  } catch (error) {
    res.status(500).send(error);
  }
};
