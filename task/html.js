const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");

// Обработка HTML
const html = () => {
  return src("./src/html/*.html")
    .pipe(plumber())
    .pipe(dest("./public"));
}

module.exports = html;