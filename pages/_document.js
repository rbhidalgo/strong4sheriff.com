import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* favicon & other app icons */}
                    <link rel='shortcut icon' href='/img/favicon.png' />
                    <meta property='og:title' content="Eric Strong for Los Angeles County Sheriff" />
                    <meta
                      property='og:description'
                      content='Over his nearly 30-years in law enforcement, Eric Strong has led units across virtually every function of the L.A. County Sheriff’s Department.'
                    />
                    <meta
                      property='og:image'
                      content='/img/og-image.jpg'
                    />
                    <meta property='og:url' content='https://www.strong4sheriff.com/' />
                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument