import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import babelParser from "@babel/eslint-parser";

const config = {
  extends: ["eslint:recommended", "prettier"],
  ignores: ["node_modules"], // 제외할 디렉토리
  files: ["src/**/*.js", "src/**/*.jsx"], // 검사할 파일
  plugins: {
    react,
    prettier,
  },
  languageOptions: {
    ecmaVersion: "latest", // 최신 ECMAScript 지원
    sourceType: "module",
    globals: {
      React: "writable",
    },
    parser: babelParser,
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off", // React 17+에서는 필요 없음
    "react/prop-types": "off", // PropTypes를 사용하지 않을 경우 끄기
  },
  settings: {
    react: {
      version: "detect", // React 버전을 자동으로 감지
    },
  },
};

export default config;
