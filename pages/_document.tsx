import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <div id='portal'></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
