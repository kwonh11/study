// const {applyWebpackOptionsDefaults} = require("webpack/lib/config/defaults")
// const { getNormalizedWebpackOptions } = require("webpack/lib/config/normalization");
const WebpackOptionsDefaulterClass = require("webpack/lib/WebpackOptionsDefaulter");
const { stringify } = require("javascript-stringify");
const fs = require("fs");
const webpackDefaulter = new WebpackOptionsDefaulterClass();

const generateOptions = (mode) => {
  const options = webpackDefaulter.process({ mode });
  fs.writeFileSync(
    `./webpack.${mode}.config.js`,
    "module.exports = " + stringify(options)
  );
};

["none", "development", "production"].forEach(generateOptions);
