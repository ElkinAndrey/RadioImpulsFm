const { resolve } = require("path"); // Модуль предоставляет утилиты для работы с путями к файлам и каталогам.
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Плагин для добавления html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Плагин для сборки css в отдельный файл
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // Плагин для обновления кода без перезагрузки страницы

const mods = {
  development: "development",
  production: "production",
};

module.exports = (env) => {
  const mode = env.mode ?? mods.development; // Режим работы
  const isDev = mode === mods.development; // true, если режим разработки

  return {
    mode: mode, // Режим сборки
    entry: resolve(__dirname, "src", "index.jsx"), // Точка входа в JS (resolve - скреливает пути, __dirname - текущая папка)

    // Куда и как будет происходить сборка
    output: {
      path: resolve(__dirname, "dist"), // В какую дирректорию
      filename: "js/[name].[contenthash].js", // Какое название файла будет (название формируется автоматический, чтобы браузер обновлял кэш)
      clean: true, // Каждый раз очищать проект при сборке
      publicPath: "/",
    },

    // Сервер для разработки с автоматической перезагрузкой
    devServer: isDev
      ? {
          historyApiFallback: true, // Добавление роутингов
          port: 3000, // Порт
          open: true, // Открыть браузер после старта
          hot: true, // Перезагрузка после сохранения кода
          client: {
            logging: "none", // Убрать вывод логов от webpack-dev-server
          },
        }
      : undefined,

    // Лоадеры
    module: {
      rules: [
        {
          // Лоадер для работы с папкой configs
          test: resolve(__dirname, "src/assets/configs"),
          type: "asset/resource",
          generator: {
            filename: "configs/[name][ext]", // Помещает все языки в отдельную папку
          },
        },
        {
          // Лоадер для работы с картинками
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext]", // Помещает все картинки в отдельную папку
          },
        },
        {
          // Лоадер для работы с pdf
          test: /\.pdf$/,
          type: "asset/resource",
          generator: {
            filename: "pdf/[name][ext]", // Помещает все pdf в отдельную папку
          },
        },
        {
          // Лоадер для работы со шрифтами
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]", // Помещает все шрифты в отдельную папку
          },
        },
        {
          // Лоадер для работы css
          test: /\.css$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                // Включение css модулей
                modules: {
                  // Указание имени модуля
                  localIdentName: isDev
                    ? "[path][name]__[local]-[hash:base64:8]"
                    : "[hash:base64:8]",
                },
              },
            },
          ],
        },
        {
          // Лоадер для работы react
          test: /\.jsx?$/, // определяем тип файлов
          exclude: /(node_modules)/, // исключаем из обработки папку node_modules
          loader: require.resolve("babel-loader"), // определяем загрузчик
          options: {
            presets: ["@babel/preset-react"], // используемые плагины
            plugins: isDev ? [require.resolve("react-refresh/babel")] : undefined, // Плагин для обновления кода без перезагрузки страницы
          },
        },
      ],
    },

    // Плагины
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, "public", "index.html"), // Ссылка до html файла, который будет использоваться в качестве шаблона
        favicon: resolve(__dirname, "public", "favicon.ico"),
      }),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css", // Путь сохранения при сборке
          chunkFilename: "css/[name].[contenthash:8].css", // Путь сохранения при сборке
        }),
      isDev && new ReactRefreshWebpackPlugin(), // Плагин для обновления кода без перезагрузки страницы
    ],

    // Параметры работы с модулями
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"], // Автоматическая подстановка расширений в import
      alias: {
        "@": resolve(__dirname, "src"), // Если указать @ в import, то перейдешь в папку src
      },
    },
  };
};
