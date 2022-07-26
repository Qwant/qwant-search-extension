import React from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '../../common/translators/i18n';
import { Popup } from './components/Popup';

import './base.scss';

export const popupPage = {
  init: () => {
    document.documentElement.lang = i18n.getUILanguage();

    ReactDOM.render(
      <React.StrictMode>
        <Popup />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  },
};
