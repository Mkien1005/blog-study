const express = require("express");
const courseController = require("../app/controllers/CourseController");
const router = express.Router();
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.put("/:id", courseController.update);
router.get("/:slug", courseController.show);
router.get("/edit/:id", courseController.edit);
module.exports = router;
