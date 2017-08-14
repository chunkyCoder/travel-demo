var gulp          = require("gulp"),
    postcss       = require("gulp-postcss"),
    cssImport     = require("postcss-import"),
    autoprefixer  = require("autoprefixer"),
    cssVars       = require("postcss-simple-vars"),
    nested        = require("postcss-nested");

gulp.task("styles", function() {
    return gulp.src("./app/styles/styles.css")
    .pipe(postcss([cssImport,cssVars, nested, autoprefixer]))
    .on("err", function(errInfo) {
        console.log(errInfo.toString());
        this.emit("end");  
    })
    .pipe(gulp.dest("./app/temp/styles"));
});