const Course = require("../module/Course");
const { singleToObject } = require("../../util/mongo");
class CourseController {
  //[GET] /course/create
  create(req, res) {
    res.render("courses/create");
  }

  //[POST] /course/store
  async store(req, res) {
    const small = new Course(req.body);
    await small
      .save()
      .then(() => res.redirect(`/`))
      .catch((err) => console.log(err));
  }

  //[GET] /course/show show detail course
  show(req, res) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: singleToObject(course) })
      )
      .catch((err) => console.log(err));
  }
  //[GET] /course/update/:id
  edit(req, res, next) {
    Course.findById({ _id: req.params.id })
      .then((course) =>
        res.render("courses/update", { course: singleToObject(course) })
      )
      .catch(next);
  }
  //[PUT] /course/:id
  update(req, res, next) {
    //đối số thứ nhất là điều kiện để chọn ra phần tử muốn sửa, đs thứ 2 là giá trị đã sửa để ghi đè.
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/lists"))
      .catch(next);
  }
}
module.exports = new CourseController();
