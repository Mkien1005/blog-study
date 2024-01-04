const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const morgan = require("morgan");
const route = require("./routes");
const db = require("./config/db");
//connect db
db.connect();
const app = express();
//ghi thêm cho app phương thức mình tự tạo
app.use(methodOverride("_method"));
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
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
//set view engine là handlebars
app.set("view engine", "hbs");
//set đường dẫn tới views
app.set("views", path.join(__dirname, "resources", "views"));
//Xét các route của app trong tệp routes
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
