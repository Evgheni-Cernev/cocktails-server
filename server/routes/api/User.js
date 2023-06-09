const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user.controller");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/user_data/:id", UserController.GetUserDataById);
router.post("/user_data", UserController.SetLikedCocktail);
router.post("/user_filters", UserController.SetFiltersCocktail);
router.post("/search", UserController.SearchUsers);
router.post("/addFriend", UserController.AddUserFriend);
router.post("/getFriends", UserController.GetUserFriends);
router.post("/updateUser/:id", UserController.UpdateUser);
router.post("/uploadAvatar/:id", upload.single("file"), UserController.UploadAvatar);
router.get("/getUserAvatar/:id", UserController.GetUserAvatar);

module.exports = router;
