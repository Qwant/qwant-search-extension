/* eslint-disable max-len */
import path from 'path';

export const APP_ID_FIREFOX = 'qwant-search-ff@qwant.com';

export const BROWSERS = {
  CHROME: 'chrome',
  FIREFOX_AMO: 'firefox-amo',
  OPERA: 'opera',
  EDGE: 'edge',
};

export const BROWSERS_CONF = {
  [BROWSERS.CHROME]: {
    browser: BROWSERS.CHROME,
    buildDir: BROWSERS.CHROME,
  },
  [BROWSERS.FIREFOX_AMO]: {
    browser: BROWSERS.FIREFOX_AMO,
    buildDir: BROWSERS.FIREFOX_AMO,
  },
  [BROWSERS.OPERA]: {
    browser: BROWSERS.OPERA,
    buildDir: BROWSERS.OPERA,
  },
  [BROWSERS.EDGE]: {
    browser: BROWSERS.EDGE,
    buildDir: BROWSERS.EDGE,
  },
};

export const BUILD_PATH = path.resolve(__dirname, '../build');
