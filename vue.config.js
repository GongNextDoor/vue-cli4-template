module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    port: 300,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/dev-api": {
        target: "http://172.18.40.40:20001",
        ws: true,
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: {
          "^/dev-api": "",
        },
      },
    },
  },
};
