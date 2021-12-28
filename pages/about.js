import styles from '../styles/About.module.scss'
import { motion } from "framer-motion";
import {fadeInUp, fadeIn, stagger, FadeInWhenVisible} from '../animations/animations';

const about = () => {
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: 'linear' }}>
      <motion.section
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className={styles.container}>
       <motion.img
                    src="/img/masthead_02.jpg"
                    alt="Picture of Los Angeles"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}/>
      </motion.section>
      <h1>About Page</h1>
    </motion.div>
  )
}

export default about
