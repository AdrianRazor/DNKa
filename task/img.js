const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");

// Обработка Image
const img = () => {
  return src("./src/img/**/*.*")
    .pipe(plumber())
    .pipe(newer("./public/img"))
    .pipe(dest("./public/img"));
};

module.exports = img;
