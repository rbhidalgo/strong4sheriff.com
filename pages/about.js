import Image from 'next/image'
import { motion } from "framer-motion";
import styles from '../styles/About.module.scss'


let easing = [0.6, -0.05, 0.01, 0.99];


const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const about = () => {
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: 'linear' }}>
       <div className={styles.container}>
      <Image
                    src="/img/masthead_02.jpg"
                    alt="Picture of Los Angeles"
                    layout="fill"
                    width="100%"
                    height="100%"
                    objectFit='cover'/>
      </div>
      <h1>About Page</h1>
    </motion.div>
  )
}

export default about
