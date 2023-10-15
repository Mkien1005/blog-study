const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;
// app.use(morgan());
//đưa thư mục public lên có thể xem đc phía web
app.use(express.static(path.join(__dirname, "public")));
//dùng middleware xử lý việc lấy dữ liệu từ body trong form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//.json() để lấy dữ liệu khi dùng fetch, XMLHttp, axios,...
//urlencoded() để lấy dữ liệu khi dùng form
//Template engine
//dòng dưới nghĩa là: app đang sử dụng engine đặt tên là handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
//set view engine là handlebars
app.set("view engine", "hbs");
//set đường dẫn tới views
app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
