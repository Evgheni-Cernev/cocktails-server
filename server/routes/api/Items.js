const express = require("express");
const router = express.Router();

const ItemController = require("../../controllers/item.controller");

router.get("/:id", ItemController.getUserByName);
router.post("/", ItemController.createUserByName);

module.exports = router;
