// const React = require('react')
// const ReactDOM = require('react-dom')
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = (env = {}) => {
    /**
     * Вытаскиваем переменную из запуска процесса
     * из скрипта в package.json
     */
    const
        ENV = env.NODE_ENV || 'dev',
        ENV_IS_DEV = ENV === 'dev'

    return {
        mode: ENV_IS_DEV ? 'development' : 'production',
        watch: ENV_IS_DEV,
        watchOptions: {
            ignored: /node_modules/
        },
        /**
         * Указываем где контекст точкам входа
         */
        context: path.resolve(__dirname, './js'),
        /**
         * Точка входа в приложение
         */
        entry: {
            index: './index'
        },
        /**
         * Точка сборки
         */
        output: {
            path: path.resolve(__dirname, './dist/js'),
            filename: `[name]${ENV_IS_DEV ? '.dev' : ''}.js`,
            /**
             * Указываем публичную директорию
             * откуда будут загружаться динамические модули
             */
            // publicPath: './dist'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.less?$/,
                    use: [
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            /**
             * Говорим вебпаку с какими расширениями
             * модули ему искать
             */
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
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
                minChunks: 2
            }
        },
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        },
        plugins: [
            /**
             * Передаем переменные в процесс компиляции
             * относительно переменных можно вставлять какой то код,
             * например делать console.log только если сборка
             * во время разработки (не в продакшн)
             */
            new webpack.DefinePlugin({
                ENV_IS_DEV
            }),
            /**
             * Делаем исключение модулей из сборки
             */
             new webpack.ContextReplacementPlugin(
                 /moment[/\\]locale$/,
                 /ru/
             ),

            new MiniCssExtractPlugin({})
        ],
        /**
         * Для формирования корректного source-map,
         * есть несколько значений,
         * по дефолту eval - самая быстая сборка и пересборка
         */
        devtool: 'source-map'
    }
}