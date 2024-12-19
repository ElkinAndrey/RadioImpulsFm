import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] }, // Разрешить файлы
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Стандартные настройки
        __dirname: true, // Разрешить __dirname
        require: true, // Разрешить функцию require()
        module: true,
      },
    },
    plugins: {
      prettier: pluginPrettier, // Добавление связи с Prettier
    },
    rules: {
      "prettier/prettier": "error", // Добавление связи с Prettier
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
