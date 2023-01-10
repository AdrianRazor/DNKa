const del = require("del");

// Удаление директории
const clear = () => {
  return del("./public");
}

module.exports = clear;