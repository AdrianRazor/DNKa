const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Задачи
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");
const fonts = require("./task/fonts.js");

// Наблюдение
const watcher = () => {
  watch("./src/html/**/*.html", html).on("all", browserSync.reload);
  watch("./src/scss/**/*.scss", scss).on("all", browserSync.reload);
  watch("./src/js/**/*.js", js).on("all", browserSync.reload);
  watch("./src/img/**/*.*", img).on("all", browserSync.reload);
  watch("./src/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}", img).on(
    "all",
    browserSync.reload
  );
};

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
};

// Задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.watch = watcher;
exports.clear = clear;

// Сборка
exports.dev = series(
  clear,
  parallel(html, scss, js, img, fonts),
  parallel(watcher, server)
);
