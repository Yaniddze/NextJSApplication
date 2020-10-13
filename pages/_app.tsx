import { FC, ReactNode } from 'react';

type PropTypes = {
  Component: FC,
  pageProps: any,
}

export default function MyApp(
  { Component, pageProps }: PropTypes,
): ReactNode {
  return <Component {...pageProps} />;
}
