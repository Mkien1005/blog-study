const Courses = require("../module/Course");
const { multipleToObject } = require("../../util/mongo");
class List {
  show(req, res) {
    Courses.find({})
      .then((course) =>
        res.render("lists", { course: multipleToObject(course) })
      )
      .catch((err) => res.render(err));
  }
}
module.exports = new List();
