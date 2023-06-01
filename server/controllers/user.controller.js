const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require("../models/User.model");

module.exports.GetUserDataById = async (req, res, next) => {
  console.log("GetUserDataById", req?.params?.id )
  try {
    const user = await UserModel.findOne({ _id: req?.params?.id });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.SetLikedCocktail = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await UserModel.updateOne({ _id: data.userId }, { $set: { liked_cocktails: data.liked  } });

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.SetFiltersCocktail = async (req, res, next) => {
  const {userId, ...data} = req.body;
  try {
    const result = await UserModel.updateOne({ _id: userId }, { $set: { filters: data  } });

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};