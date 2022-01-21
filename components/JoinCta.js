import styles from "../styles/JoinCta.module.scss"
import {motion} from "framer-motion";
import {
    fadeInUp,
    FadeInWhenVisible,
} from '../animations/animations';

const JoinCta = () => {
    return (
      <motion.section
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className={styles.cta}>
      <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={{
          once: true
      }}
          variants={fadeInUp}>Join The Movement</motion.h2>
      <form
          name="join-team"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
          <FadeInWhenVisible className={styles.wrapper}>
              <input type="text" name="name" placeholder='Name' id=""/>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={.3} className={styles.wrapper}>
              <input type="email" name="email" placeholder='Email' id=""/>
          </FadeInWhenVisible>
          <input type="hidden" name="contact" value="contact"/>
          <FadeInWhenVisible delay={.6} className={styles.wrapperButton}>
              <button>submit</button>
          </FadeInWhenVisible>
      </form>
  </motion.section>
    )
}

export default JoinCta