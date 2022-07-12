const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@views": path.resolve(__dirname, "./src/views"),
        "@img": path.resolve(__dirname, "./src/assets/images"),
        "@styles": path.resolve(__dirname, "./src/assets/css"),
      },
    },
  },
};
