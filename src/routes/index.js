const router = require("./news");
const siteRoute = require("./site");
function route(app) {
  app.use("/news", router);
  app.use("/", siteRoute);
}
module.exports = route;
