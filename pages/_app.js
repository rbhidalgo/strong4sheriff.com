import {AnimatePresence} from 'framer-motion';
import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/globals.scss'

const App = ({Component, pageProps, router}) => (
    <AnimatePresence exitBeforeEnter>
        <div key={router.route} style={{
            overflowX: 'hidden'
        }}>
            <Head>
                <title>
                    {Component.title ?? 'Page Title Goes Here'}
                </title>
                <meta
                    name="description"
                    content={Component.description ?? 'Page Description Goes Here'}/>
            </Head>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </div>
    </AnimatePresence>
)

export default App