const express = require("express");
const router = express.Router();

const IngridientsController = require("../../controllers/ingridient.controller");

router.get("/all/groups", IngridientsController.getAllGroups);
router.get("/all", IngridientsController.getAll);
router.get("/:name", IngridientsController.getByName);
router.get("/groups/type/:type/:base", IngridientsController.getGroupsByType);

module.exports = router;
