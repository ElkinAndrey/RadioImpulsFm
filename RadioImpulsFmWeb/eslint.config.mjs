import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] }, // Разрешить файлы
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Стандартные настройки
        __dirname: true, // Разрешить __dirname
        require: true, // Разрешить функцию require()
        module: true,
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];