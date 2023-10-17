const Course = require("../module/Course");
class SiteController {
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
  // [GET] /
  async index(req, res) {
    try {
      let courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      res.status(400).json({ err: "ERROR!!!" });
    }
  }
}
module.exports = new SiteController();
