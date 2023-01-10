const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");

// Обработка SCSS
const scss = () => {
  return src("./src/scss/*.{sass,scss,css}")
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(dest("./public/css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(dest("./public/css"));
};

module.exports = scss;
