const Course = require("../module/Course");
const { singleToObject } = require("../../util/mongo");
class CourseController {
  show(req, res) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: singleToObject(course) })
      )
      .catch((err) => console.log(err));
  }
}
module.exports = new CourseController();
