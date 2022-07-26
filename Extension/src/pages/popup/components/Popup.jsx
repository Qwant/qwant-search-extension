import React from 'react';

import Styles from './Popup.module.scss';

import Logo from './assets/logo.png';

export const Popup = () => {
  return (
    <div className={Styles.root}>

      <img src={Logo} alt="Qwant Search" className={Styles.logo} />
      <div className={Styles.tagline}>
        The search engine that respects your privacy.
      </div>
    </div>
  );
};
