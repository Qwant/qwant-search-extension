/* eslint-disable max-len */
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';

import { BUILD_PATH } from '../constants';
import { getEnvConf } from '../helpers';
import { getModuleReplacements } from './module-replacements';

const config = getEnvConf();

const OUTPUT_PATH = config.outputPath;

export const genCommonConfig = (browserConfig) => {
  return {
    mode: config.mode,
    cache: false,
    devtool: false,
    entry: {},
    output: {
      path: path.join(BUILD_PATH, OUTPUT_PATH),
      filename: '[name].js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...getModuleReplacements(browserConfig),
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
