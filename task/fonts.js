const { src, dest } = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

// Обработка Image
const fonts = () => {
  return src("./src/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}")
    .pipe(plumber())
    .pipe(newer("./public/fonts"))
    .pipe(
      fonter({
        formats: ["ttf", "woff", "svg"],
      })
    )
    .pipe(dest("./public/fonts"))
    .pipe(ttf2woff2())
    .pipe(dest("./public/fonts"));
};

module.exports = fonts;
