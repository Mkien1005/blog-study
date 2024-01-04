const router = require("./news");
const siteRoute = require("./site");
const courseRoute = require("./courses");
const list = require("./list-courses");
function route(app) {
  app.use("/news", router);
  app.use("/course", courseRoute);
  app.use("/me", list);
  app.use("/", siteRoute);
}
module.exports = route;
