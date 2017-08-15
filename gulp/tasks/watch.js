var gulp          = require("gulp"),
    watch         = require("gulp-watch");


gulp.task("watch", function() {
   watch("./app/styles/**/*.css", function() {
       gulp.start("styles");
   });
});