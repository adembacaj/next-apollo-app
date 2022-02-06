import React from 'react';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../src/theme';
import { ApolloProvider } from '@apollo/client';
import client from 'src/client';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Next-Apollo-app</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}