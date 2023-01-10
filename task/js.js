const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

// Обработка JS
const js = () => {
  return src("./src/js/*.js")
    .pipe(plumber())
    .pipe(babel())
    .pipe(webpack({
      mode: "production"
    }))
    .pipe(dest("./public/js"));
}

module.exports = js;