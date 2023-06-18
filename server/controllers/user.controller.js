const { UserModel } = require("../models/User.model");

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
  console.log({ _id: req?.params?.id }, { $set: { ...data } });
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
  try {
    const { id } = req.params;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No files were uploaded." });
    }

    const avatar = req.files.avatar; // Assuming the field name for the avatar file is "avatar"

    // Logic to save the avatar file to a storage system (e.g., filesystem, cloud storage)
    // Replace the following code with your implementation

    // Example code using fs module to save the file to the local filesystem
    const path = `avatars/${id}_${avatar.name}`;
    avatar.mv(path, function (err) {
      if (err) {
        return res.status(500).send(err);
      }

      // Update the user document in the database with the avatar path
      UserModel.findByIdAndUpdate(id, { $set: { avatar: path } }, { new: true })
        .then((user) => {
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }

          res.send(user);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
