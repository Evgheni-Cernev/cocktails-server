const { UserModel } = require("../models/User.model");
const path = require("path");
const fs = require("fs");

module.exports.GetUserDataById = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req?.params?.id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.UpdateUser = async (req, res) => {
  const data = req.body;
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: req?.params?.id },
      { $set: { ...data } },
      { new: true }
    );
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.SearchUsers = async (req, res, next) => {
  const data = req.body;
  console.warn(data.query);
  try {
    const result = await UserModel.find({
      email: { $regex: data.query, $options: "i" },
    });
    console.warn("result", result);

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.AddUserFriend = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await UserModel.updateOne(
      { id: data.userId },
      { $set: { friends: data.friendId } }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.GetUserFriends = async (req, res, next) => {
  const { ids } = req.body;
  console.log(req.body);
  try {
    const friends = await UserModel.find({ _id: { $in: ids } });
    res.send(friends);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.SetLikedCocktail = async (req, res, next) => {
  const data = req.body;
  console.log(data.userId);
  try {
    const result = await UserModel.updateOne(
      { _id: data.userId },
      { $set: { liked_cocktails: data.liked } }
    );

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.SetFiltersCocktail = async (req, res, next) => {
  const { userId, ...data } = req.body;
  try {
    const result = await UserModel.updateOne(
      { _id: userId },
      { $set: { filters: data } }
    );

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.UploadAvatar = async (req, res, next) => {
  const { id } = req.params;
  if (!req.file || Object.keys(req.file).length === 0) {
    return res.status(400).json({ error: "No files were uploaded." });
  }
  const avatar = req.file;
  const path = `${avatar.filename}`;

  await UserModel.findByIdAndUpdate(
    id,
    { $set: { photo: path } },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports.GetUserAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.photo) {
      return res.status(404).json({ error: "No photo found for the user" });
    }
    const photoPath = path.resolve(__dirname, "..", "uploads");

    const photoData = fs.readFileSync(path.join(photoPath, user.photo));

    const base64Photo = photoData.toString("base64");

    const dataUrl = `data:image/png;base64,${base64Photo}`;

    res.send({ photo: dataUrl });
  } catch (error) {
    res.status(500).send(error);
  }
};
