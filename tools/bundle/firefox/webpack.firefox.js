import CopyWebpackPlugin from 'copy-webpack-plugin';
import ZipWebpackPlugin from 'zip-webpack-plugin';
import path from 'path';
import { merge } from 'webpack-merge';

import { genCommonConfig } from '../webpack.common';
import { firefoxManifest } from './manifest.firefox';
import { updateManifestBuffer } from '../../helpers';

export const genFirefoxConfig = (browserConfig) => {
  const commonConfig = genCommonConfig(browserConfig);

  const zipFilename = `${browserConfig.browser}.zip`;

  const plugins = [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../manifest.common.json'),
          to: 'manifest.json',
          transform: (content) => updateManifestBuffer(content, firefoxManifest),
        },
      ],
    }),
    new ZipWebpackPlugin({
      path: '../',
      filename: zipFilename,
    }),
  ];

  const firefoxConfig = {
    output: {
      path: path.join(commonConfig.output.path, browserConfig.buildDir),
    },
    plugins,
  };

  return merge(commonConfig, firefoxConfig);
};
