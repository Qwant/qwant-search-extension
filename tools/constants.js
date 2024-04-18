/* eslint-disable max-len */
import path from 'path';

export const APP_ID_FIREFOX = 'qwant-search-firefox@qwant.com';

export const BROWSERS = {
  CHROME: 'chrome',
  FIREFOX: 'firefox',
  OPERA: 'opera',
  EDGE: 'edge',
};

export const BROWSERS_CONF = {
  [BROWSERS.CHROME]: {
    browser: BROWSERS.CHROME,
    buildDir: BROWSERS.CHROME,
  },
  [BROWSERS.FIREFOX]: {
    browser: BROWSERS.FIREFOX,
    buildDir: BROWSERS.FIREFOX,
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
