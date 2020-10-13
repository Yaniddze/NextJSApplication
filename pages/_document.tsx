import Document, {
  Html, Head, Main, NextScript, 
} from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>
            Profile
          </title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
