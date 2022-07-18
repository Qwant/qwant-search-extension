import { APP_ID_FIREFOX } from '../../constants';

export const firefoxManifest = {
  manifest_version: 2,
  applications: {
    gecko: {
      id: APP_ID_FIREFOX,
      strict_min_version: '78.0',
    },
  },
  chrome_settings_overrides: {
    search_provider: {
      name: 'Qwant',
      keyword: 'www.qwant.com',
      search_url: 'https://www.qwant.com/?q={searchTerms}&client=ext-firefox-sb',
      favicon_url: 'https://www.qwant.com/favicon.ico',
      suggest_url: 'https://api.qwant.com/api/suggest/?q={searchTerms}&client=opensearch',
      encoding: 'UTF-8',
      is_default: true,
    },
  },
};
