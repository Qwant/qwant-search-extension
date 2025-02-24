import { BROWSERS } from '../constants';
import { genChromeConfig } from './chrome/webpack.chrome';
import { genFirefoxConfig } from './firefox/webpack.firefox';
import { genEdgeConfig } from './edge/webpack.edge';
import { getBrowserConf } from '../helpers';
import { chromeManifest } from './chrome/manifest.chrome';
import { firefoxManifest } from './firefox/manifest.firefox';
import { edgeManifest } from './edge/manifest.edge';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BROWSER_CLIENTS } from './browser-config';

export const getNewtabPlugin = (browserConfig) => {
  return new CopyWebpackPlugin({
    patterns: [
      {
        from: 'Extension/pages/newtab.template.html',
        to: 'pages/newtab.html',
        transform: (content) => {
          const client = BROWSER_CLIENTS[browserConfig.browser];
          return content.toString().replace('<%= newtab_client %>', client);
        },
      }
    ]
  });
};

export const getWebpackConfig = (browser) => {
  const browserConf = getBrowserConf(browser);
  let manifest;
  let config;

  switch (browser) {
    case BROWSERS.CHROME: {
      manifest = chromeManifest;
      config = genChromeConfig(browserConf);
      break;
    }
    case BROWSERS.FIREFOX: {
      manifest = firefoxManifest;
      config = genFirefoxConfig(browserConf);
      break;
    }
    case BROWSERS.EDGE: {
      manifest = edgeManifest;
      config = genEdgeConfig(browserConf);
      break;
    }
    default: {
      throw new Error(`Unknown browser: "${browser}"`);
    }
  }

  // Ajouter le plugin newtab pour chaque navigateur
  config.plugins.push(getNewtabPlugin(browserConf));

  return config;
};
