&nbsp;

<p align="center">
  <img src="https://user-images.githubusercontent.com/1442690/171180389-ad92ff55-0da7-4929-98b0-eff7a67e1765.png" width="300px" alt="Qwant Search Browser Extension" />
</p>
<h3 align="center">Qwant: The search engine that respects your privacy</h3>
<p align="center">
 Designed and based in France, Qwant is the first European search engine, both efficient and ethical, that protects the freedoms of its users and ensures the preservation of the digital ecosystem. 
 </p>

<p align="center">
    <a href="https://qwant.com/">Qwant.com</a> |
    <a href="https://twitter.com/Qwant_FR">Twitter</a> |
    <a href="https://twitter.com/QwantCom">Twitter (EN)</a> |
    <a href="https://t.me/ClubQwant">Telegram</a>
</p>

<hr />
<br />

- [Installation](#installation)
  - [Chrome and Chromium-based browsers](#installation-chrome)
  - [Firefox](#installation-firefox)
  - [Microsoft Edge](#installation-edge)
- [Reporting issues](#contribution-reporting)
- [Development](#dev)
  - [Requirements](#dev-requirements)
  - [How to build](#dev-build)
- [Minimum supported browser versions](#minimum-supported-browser-versions)
- [License](#license)

<br />
<hr />

<a id="installation"></a>

## Installation

<a id="installation-chrome"></a>

### Chrome and Chromium-based browsers

You can get the latest available Qwant Search Extension version from the [Chrome Web Store](TODO).

<a id="installation-firefox"></a>

### Firefox

You can get the latest version of Qwant Search Extension from the [Mozilla Add-ons website](TODO).

<a id="installation-edge"></a>

### Microsoft Edge

The latest stable version of Qwant Search browser extension is available in [Microsoft Store](TODO).

<a id="contribution-reporting"></a>

## Reporting issues

GitHub can be used to report a bug or to submit a feature request. To do so, go to [this page](https://github.com/Qwant/qwant-search-extension/issues) and click the _New issue_ button.

<a id="dev-requirements"></a>

## Development

### Requirements

- [Node.js LTS](https://nodejs.org/en/download/)
- [Yarn v1.22](https://yarnpkg.com/en/docs/install/)

Install local dependencies by running:

```
yarn install
```

<a id="dev-build"></a>

### How to build

**Building the dev version**

Run the following command:

```
yarn build
```

This will create a build directory with unpacked extensions for all browsers:

```
  build/edge
  build/opera
  build/chrome
  build/firefox
```


<a id="dev-linter"></a>

### Linter

Setup `eslint` in your editor to follow up with `.eslintrc`. Linting runs on every commit.

Or you can validate linting rules manually:

```
yarn lint
```


<a id="minimum-supported-browser-versions"></a>

## Minimum supported browser versions

| Browser                 | Version |
| ----------------------- | :-----: |
| Chromium Based Browsers |   79    |
| Firefox                 |   78    |
| Edge                    |   79    |


<a id="license"></a>

## License

GNU General Public License v3.0
