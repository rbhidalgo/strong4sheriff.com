import styles from "../styles/JoinCta.module.scss"
import {motion} from "framer-motion";
import {
    fadeInUp,
    FadeInWhenVisibleScale,
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
          <p>Sign up to get news updates from Eric Strong and his campaign for Los Angeles County Sheriff.  Get involved today!</p>
          <a href="http://eepurl.com/hUV5c9" target="_blank" rel="noreferrer" className={styles.button}>Sign Me Up</a>
      {/* <form
          name="join-team-strong"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
          <FadeInWhenVisibleScale className={styles.wrapper}>
              <input type="text" name="name" placeholder='Name' required/>
          </FadeInWhenVisibleScale>
          <FadeInWhenVisibleScale delay={.3} className={styles.wrapper}>
              <input type="email" name="email" placeholder='Email' required/>
          </FadeInWhenVisibleScale>
          <input type="hidden" name="form-name" value="join-team-strong"/>
          <FadeInWhenVisibleScale delay={.6} className={styles.wrapperButton}>
              <button type="submit">Send</button>
          </FadeInWhenVisibleScale>
      </form> */}
  </motion.section>
    )
}

export default JoinCta