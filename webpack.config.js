const webpack = require('webpack'),
    path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = (env = {}) => {
    /**
     * Вытаскиваем переменную из запуска процесса
     * из скрипта в package.json
     */
    const ENV = env.NODE_ENV || 'dev',
        ENV_IS_DEV = ENV === 'dev',
        config = {
            mode: ENV_IS_DEV ? 'development' : 'production',
            watch: ENV_IS_DEV,
            watchOptions: {
                ignored: /node_modules/,
            },
            /**
             * Указываем где контекст точкам входа
             */
            // context: path.resolve(__dirname, './dist'),
            /**
             * Точка входа в приложение
             */
            entry: {
                index: './src/js/index',
            },
            /**
             * Точка сборки
             */
            output: {
                path: path.resolve(__dirname, './dist'),
                filename: `[name]${ENV_IS_DEV ? '.dev' : ''}.js`,
                /**
                 * Указываем публичную директорию
                 * откуда будут загружаться динамические модули
                 */
                publicPath: '/',
            },
            module: {
                rules: [
                    // {
                    //     test: /\.tsx?$/,
                    //     use: 'ts-loader',
                    //     exclude: /node_modules/
                    // },
                    {
                        test: /\.(j|t)sx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                                babelrc: false,
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            targets: {
                                                browsers: 'last 2 versions',
                                            },
                                        }, // or whatever your project requires
                                    ],
                                    '@babel/preset-typescript',
                                    '@babel/preset-react',
                                ],
                                plugins: [
                                    // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                                    [
                                        '@babel/plugin-proposal-decorators',
                                        {legacy: true},
                                    ],
                                    [
                                        '@babel/plugin-proposal-class-properties',
                                        {loose: true},
                                    ],
                                    ['@babel/plugin-transform-runtime'],
                                    'react-hot-loader/babel',
                                ],
                            },
                        },
                    },
                    {
                        test: /\.(html)$/,
                        use: {
                            loader: 'html-loader',
                            options: {
                                interpolate: true,
                            },
                        },
                    },
                    {
                        test: /\.less?$/,
                        use: [
                            ENV_IS_DEV
                                ? 'style-loader'
                                : MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: 'less-loader',
                                options: {
                                    javascriptEnabled: true,
                                },
                            },
                        ],
                    },
                ],
            },
            resolve: {
                /**
                 * Говорим вебпаку с какими расширениями
                 * модули ему искать
                 */
                extensions: ['.tsx', '.ts', '.js', '.jsx', '.html'],
            },
            optimization: {
                splitChunks: {
                    /**
                     * Указываем способ подключения модулей,
                     * которое годится для извлечение в отдельный чанк
                     * Возможные значения
                     * all | async | initial
                     */
                    chunks: 'all',
                    /**
                     * Указывем что выносить в чанк модуль
                     * при использовании минимум в 1 модуле
                     * По умолчанию 1
                     */
                    minChunks: 2,
                },
            },
            externals: {
                react: 'React',
                'react-dom': 'ReactDOM',
            },
            plugins: [
                /**
                 * Передаем переменные в процесс компиляции
                 * относительно переменных можно вставлять какой то код,
                 * например делать console.log только если сборка
                 * во время разработки (не в продакшн)
                 */
                new webpack.DefinePlugin({
                    ENV_IS_DEV,
                }),
                /**
                 * Делаем исключение модулей из сборки
                 */
                new webpack.ContextReplacementPlugin(
                    /moment[/\\]locale$/,
                    /ru/
                ),
                new HtmlWebpackPlugin({
                    template: './index.html',
                    // chunks: ['index']
                }),
                new ScriptExtHtmlWebpackPlugin({
                    defaultAttribute: 'defer',
                }),
            ],
            /**
             * Для формирования корректного source-map,
             * есть несколько значений,
             * по дефолту eval - самая быстая сборка и пересборка
             */
            devtool: 'source-map',
            devServer: {
                contentBase: './',
                hot: true,
                historyApiFallback: true,
            },
        }

    if (!ENV_IS_DEV) config.plugins.push(new MiniCssExtractPlugin({}))

    return config
}
