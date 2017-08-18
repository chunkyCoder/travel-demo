var gulp          = require("gulp"),
    postcss       = require("gulp-postcss"),
    mixins        = require("postcss-mixins"),
    cssImport     = require("postcss-import"),
    autoprefixer  = require("autoprefixer"),
    cssVars       = require("postcss-simple-vars"),
    nested        = require("postcss-nested"),
    hexrgba       = require("postcss-hexrgba");

gulp.task("styles", function() {
    return gulp.src("./app/styles/styles.css")
    .pipe(postcss([cssImport, mixins, cssVars, nested, hexrgba, autoprefixer]))
    .on("err", function(errInfo) {
        console.log(errInfo.toString());
        this.emit("end");  
    })
    .pipe(gulp.dest("./app/temp/styles"));
});