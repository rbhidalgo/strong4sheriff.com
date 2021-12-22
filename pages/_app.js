import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/globals.scss'

const App = ({ Component, pageProps, router }) => (
  <AnimatePresence exitBeforeEnter>
  <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
    pageInitial: {
      opacity: 0,
      height: "100vh",
    },
    pageAnimate: {
      opacity: 1,
      transition: {
        type: "tween", duration: .8, ease: "easeIn"
      }
    },
    pageExit: {
      opacity: 0,
    }
  }}>
    <Head>
      <title>
        {Component.title ??
          'Page Title Goes Here'}
      </title>
      <meta
        name="description"
        content={
          Component.description ??
          'Page Description Goes Here'
        }
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </motion.div>
    </AnimatePresence>
)

export default App