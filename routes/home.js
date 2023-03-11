var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  const context = req.context;
  res.render("home/index", context);
});

router.get("/404", function(req, res, next) {
  const context = req.context;
  res.render("home/404", context);
});

module.exports = router;
