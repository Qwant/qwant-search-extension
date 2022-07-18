import path from 'path';

import inputConfig from './config.json';

const {
  locales_relative_path: LOCALES_RELATIVE_PATH,
  locales_data_filename: LOCALE_DATA_FILENAME,
} = inputConfig;

const LOCALES_ABSOLUTE_PATH = path.join(__dirname, LOCALES_RELATIVE_PATH);

export {
  LOCALE_DATA_FILENAME,
  LOCALES_RELATIVE_PATH,
  LOCALES_ABSOLUTE_PATH,
};
