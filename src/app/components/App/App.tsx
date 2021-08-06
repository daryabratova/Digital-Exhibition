import React from 'react';
import { AppProps } from 'next/app';

import * as Styles from './App.styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Styles.Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
