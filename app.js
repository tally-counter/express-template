const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views/pages"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", require("express-ejs-extend"));

app.use((req, res, next) => {
  const context = {
    title_page: "ExpressJS Template"
  }

  req.context = context;
  next();
});

app.use("/home", require("./routes/home"));
app.all("/", (req, res) => res.redirect("/home"));
app.all("*", (req, res) => res.redirect("/home/404"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
