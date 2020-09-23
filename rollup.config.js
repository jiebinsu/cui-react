import { DEFAULT_EXTENSIONS } from "@babel/core";
import babel from "rollup-plugin-babel";
import styles from "rollup-plugin-styles";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: "inline",
      assetFileNames: "[name][extname]",
    },
  ],
  plugins: [
    styles({
      mode: ["extract", "cui-styles.css"],
    }),
    external({
      includeDependencies: true,
    }),
    babel({
      presets: ["react-app"],
      extensions: [...DEFAULT_EXTENSIONS],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "transform-react-remove-prop-types",
      ],
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    url(),
    resolve(),
    commonjs(),
    terser(),
  ],
  external: ["react", "react-dom"],
};
