var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var del = require("del");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


gulp.task("babel", function() {
  return gulp.src("src/**/*.js")
             .pipe($.babel())
             .pipe($.plumber())
             .pipe(gulp.dest("build"));
});

gulp.task("browserify", function() {
  return browserify({
    entries: ["src/App.jsx"],
    extensions: ["jsx"],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .on("error", handleErrors)
  .pipe(source("app.js"))
  .pipe(gulp.dest("build"))
});

gulp.task("watch", ["babel", "browserify"], function() {
  gulp.watch(["src/**/*.js"], ["babel"]);
  gulp.watch(["src/**/*.jsx"], ["browserify"]);
});

gulp.task("clean", del.bind(null, ["build"]));


var handleErrors = function() {

  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  $.notify.onError({
    title: "Compile Error",
    message: "<%= error %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};
