import { BROWSERS } from '../constants';
import { genChromeConfig } from './chrome/webpack.chrome';
import { genFirefoxConfig } from './firefox/webpack.firefox';
import { genEdgeConfig } from './edge/webpack.edge';
import { getBrowserConf } from '../helpers';
import { genOperaConfig } from './opera/webpack.opera';

export const getWebpackConfig = (browser) => {
  const browserConf = getBrowserConf(browser);

  switch (browser) {
    case BROWSERS.CHROME: {
      return genChromeConfig(browserConf);
    }
    case BROWSERS.FIREFOX: {
      return genFirefoxConfig(browserConf);
    }
    case BROWSERS.OPERA: {
      return genOperaConfig(browserConf);
    }
    case BROWSERS.EDGE: {
      return genEdgeConfig(browserConf);
    }
    default: {
      throw new Error(`Unknown browser: "${browser}"`);
    }
  }
};
