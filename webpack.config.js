const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/transform-runtime",
              "babel-plugin-react-docgen",
            ],
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "",
    filename: "index.js",
    libraryTarget: "umd",
  },
};
