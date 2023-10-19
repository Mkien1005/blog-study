const Course = require("../module/Course");
const { multipleToObject } = require("../../util/mongo");
class SiteController {
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
  // [GET] /
  async index(req, res) {
    // try {
    //   let courses = await Course.find({});
    //   res.json(courses);
    // } catch (err) {
    //   res.status(400).json({ err: "ERROR!!!" });
    // }
    Course.find({})
      .then((course) => {
        res.render("home", {
          course: multipleToObject(course),
        });
      })
      .catch((err) => console.log(err));
  }
}
module.exports = new SiteController();
