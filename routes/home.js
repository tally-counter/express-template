var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  const context = req.context;
  res.render("home/index", context);
});

module.exports = router;
