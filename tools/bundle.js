import { program } from 'commander';

import { bundleRunner } from './bundle/bundle-runner';
import { BROWSERS } from './constants';
import { getWebpackConfig } from './bundle/webpack-config';

const bundleChrome = (watch) => {
  const webpackConfig = getWebpackConfig(BROWSERS.CHROME);
  return bundleRunner(webpackConfig, watch);
};

const bundleFirefoxAmo = (watch) => {
  const webpackConfig = getWebpackConfig(BROWSERS.FIREFOX_AMO);
  return bundleRunner(webpackConfig, watch);
};

const bundleEdge = () => {
  const webpackConfig = getWebpackConfig(BROWSERS.EDGE);
  return bundleRunner(webpackConfig);
};

const bundleOpera = () => {
  const webpackConfig = getWebpackConfig(BROWSERS.OPERA);
  return bundleRunner(webpackConfig);
};

const plan = [
  bundleChrome,
  bundleFirefoxAmo,
  bundleEdge,
  bundleOpera,
];

const runBuild = async (tasks) => {
  for (const task of tasks) {
    await task();
  }
};

const main = async () => {
  try {
    await runBuild(plan);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const chrome = async (watch) => {
  try {
    await bundleChrome(watch);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

const firefox = async (watch) => {
  try {
    await bundleFirefoxAmo(watch);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

program
  .command('chrome')
  .description('Builds extension for chrome browser')
  .action(() => {
    chrome(program.watch);
  });

program
  .command('firefox')
  .description('Builds extension for firefox browser')
  .action(() => {
    firefox(program.watch);
  });

program
  .description('By default builds for all platforms')
  .action(main);

program.parse(process.argv);
