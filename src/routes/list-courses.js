const express = require("express");
const ListController = require("../app/controllers/ListsController");
const router = new express.Router();
router.get("/lists", ListController.show);
module.exports = router;
