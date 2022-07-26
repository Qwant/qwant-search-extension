/* eslint-disable max-len */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';

import { BUILD_PATH, ENVS } from '../constants';
import { getEnvConf } from '../helpers';
import { getModuleReplacements } from './module-replacements';

const POPUP_PATH = path.resolve(__dirname, '../../Extension/pages/popup');

const config = getEnvConf();

const OUTPUT_PATH = config.outputPath;

const htmlTemplatePluginCommonOptions = {
  cache: false,
  scriptLoading: 'blocking',
};

export const genCommonConfig = (browserConfig) => {
  const isDev = process.env.BUILD_ENV === ENVS.DEV;

  return {
    mode: config.mode,
    cache: false,
    devtool: false,
    entry: {
      'pages/popup': {
        import: POPUP_PATH,
        dependOn: ['vendors/react'],
      },
      'vendors/react': ['react', 'react-dom'],
    },
    output: {
      path: path.join(BUILD_PATH, OUTPUT_PATH),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      symlinks: false,
      // Node modules polyfills
      fallback: {
        url: require.resolve('url'),
      },
    },
    module: {
      rules: [
        /*
                * Prevent browser console warnings with source map issue
                * by deleting source map url comments in production build
                */
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          use: [
            {
              loader: 'source-map-loader',
              options: {
                filterSourceMappingUrl: () => (isDev ? 'skip' : 'remove'),
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: { babelrc: true },
          }],
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                url: false,
                modules: {
                  auto: true,
                  exportOnlyLocals: false,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
        }, {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...getModuleReplacements(browserConfig),
      new HtmlWebpackPlugin({
        ...htmlTemplatePluginCommonOptions,
        template: path.join(POPUP_PATH, 'index.html'),
        filename: 'pages/popup.html',
        chunks: ['vendors/react', 'vendors/mobx', 'pages/popup'],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            context: 'Extension',
            from: 'assets',
            to: 'assets',
          },
          {
            context: 'Extension',
            from: '_locales',
            to: '_locales',
          },
        ],
      }),
    ],
  };
};
