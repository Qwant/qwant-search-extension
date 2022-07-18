import { merge } from 'webpack-merge';
import fs from 'fs';
import path from 'path';
import {
  BROWSERS_CONF,
} from './constants';
import {
  LOCALES_ABSOLUTE_PATH,
  LOCALE_DATA_FILENAME,
} from './locales/locales-constants';
import packageJson from '../package.json';

export const getEnvConf = () => {
  return { outputPath: '.', mode: 'production' };
};

export const getBrowserConf = (browser) => {
  const browserConf = BROWSERS_CONF[browser];
  if (!browserConf) {
    throw new Error(`No browser config for: "${browser}"`);
  }
  return browserConf;
};

/**
 * Updates manifest object with new values
 * @param env
 * @param targetPart
 * @param addedPart
 * @returns {*&{content_security_policy: string, version: string}}
 */
export const updateManifest = (targetPart, addedPart) => {
  const union = merge(targetPart, addedPart);

  delete union.version;

  const result = {
    version: packageJson.version,
    ...union,
  };

  return result;
};

/**
 * Receives targetPart as a buffer updates it and returns it as a buffer
 * @param env
 * @param targetPart
 * @param addedPart
 * @returns {Buffer}
 */
export const updateManifestBuffer = (targetPart, addedPart) => {
  const target = JSON.parse(targetPart.toString());

  const result = updateManifest(target, addedPart);

  return Buffer.from(JSON.stringify(result, null, 4));
};

export const chunkArray = (arr, size) => arr.reduce((chunks, el, idx) => {
  if (idx % size === 0) {
    chunks.push([el]);
  } else {
    chunks[chunks.length - 1].push(el);
  }
  return chunks;
}, []);

/**
 * Gets strings for certain locale
 * @param {string} locale
 * @returns {Object}
 */
export const getLocaleTranslations = async (locale) => {
  const filePath = path.join(LOCALES_ABSOLUTE_PATH, locale, LOCALE_DATA_FILENAME);
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
};

/**
 * Compares two arrays
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
export const areArraysEqual = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
