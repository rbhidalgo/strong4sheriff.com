import styles from '../styles/GetInvolved.module.scss'
import {motion} from "framer-motion";
import {
    fadeInUp,
    fadeIn,
    FadeInWhenVisible,
    FadeInRightWhenVisible,
} from '../animations/animations';

const GetInvolved = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeIn}>
    <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className={styles.container}>
        <motion.img
            src="/img/masthead_01.jpg"
            alt="Picture of Los Angeles"
            initial="initial"
            animate="animate"
            variants={fadeIn}/>
        <FadeInRightWhenVisible>
            <div className={styles.textContainer}>
                <p>
                    <strong>GET INVOLVED</strong>
                </p>
                <h1>Los Angeles County deserves better leadership.</h1>

            </div>
        </FadeInRightWhenVisible>
    </motion.section>
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
            <p>Join the team with your email address and receive the latest campaign news and updates.</p>
        <form
            name="GetInvolved"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            <FadeInWhenVisible>
                <input type="email" name="email" placeholder='Email' id="" required/>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={.3}>
                <input type="text" name="name" placeholder='Name' id="" required/>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={.6}>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Phone Number'/>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={.9}>
            <input type="text" pattern="[0-9]{5}" title="Five digit zip code" placeholder='Zip Code'/>

            </FadeInWhenVisible>
            <input type="hidden" name="contact" value="contact"/>
            <FadeInWhenVisible delay={1.2}>
                <button type="submit">Send</button>
            </FadeInWhenVisible>
        </form>
    </motion.section>
    </motion.div>
  )
}

export default GetInvolved
