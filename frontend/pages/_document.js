import Document, { Html, NextScript, Main, Head } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-gb">
        {/* <Head></Head> */}
        <body>
          <Main>
            <NextScript />
          </Main>
        </body>
      </Html>
    );
  }
}
