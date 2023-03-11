const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const context = req.context;
  res.render("home/index", context);
});

router.get("/404", (req, res) => {
  const context = req.context;
  res.render("home/404", context);
});

module.exports = router;
