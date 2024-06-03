export const chromeManifest = {
  manifest_version: 3,
  chrome_settings_overrides: {
    search_provider: {
      name: 'Qwant',
      keyword: 'www.qwant.com',
      search_url: 'https://www.qwant.com/?q={searchTerms}&client=plgn-opera-sb',
      favicon_url: 'https://www.qwant.com/favicon.ico',
      suggest_url: 'https://api.qwant.com/api/suggest/?q={searchTerms}&client=opensearch',
      encoding: 'UTF-8',
      is_default: true,
    },
  },
};
