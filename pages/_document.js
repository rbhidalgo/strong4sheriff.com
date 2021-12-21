import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* favicon & other app icons */}
          <link rel="icon" href="/favicon.ico" />
          {/* Google Fonts */}
          <link rel='stylesheet' href='https://use.typekit.net/juf8edt.css'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument