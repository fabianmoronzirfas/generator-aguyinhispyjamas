import { Dependencies } from "./common/interfaces";
export const devDependencies: Dependencies = {
  shared: [
    "@types/jest",
    "@types/node",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
    "cz-conventional-changelog",
    "eslint-config-prettier",
    "eslint-plugin-jest",
    "eslint-plugin-prettier",
    "eslint",
    "jest",
    "prettier",
    "ts-jest",
    "typescript",
    "husky",
    "lint-staged"
  ],
  "typescript-express": ["@types/express", "@types/morgan", "nodemon"],
  "typescript-jekyll-webpack": [
    "tslib",
    "autoprefixer",
    "cross-env",
    "css-loader",
    "cssnano",
    "extract-loader",
    "file-loader",
    "node-sass",
    "npm-run-all",
    "postcss-cli",
    "postcss-load-config",
    "postcss-loader",
    "sass-loader",
    "ts-loader",
    "webpack",
    "webpack-cli",
    "webpack-merge"
  ],
  basiljs: []
};