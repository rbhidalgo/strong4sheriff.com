import styles from "../styles/Contact.module.scss"
import {motion} from "framer-motion";
import {
    fadeInUp,
    fadeIn,
    FadeInWhenVisible,
    FadeInRightWhenVisible,
} from '../animations/animations';
import Image from 'next/image'

const Contact = () => {
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
                            <strong>Contact Team Strong</strong>
                        </p>
                        <h1> Enhanced public safety, protecting residents, supporting victims.</h1>
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
                    variants={fadeInUp}>Contact Us</motion.h2>
                <p>For press or media inquiries, please email us.</p>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field">
                     <FadeInWhenVisible>
                       <input
                        type="text"
                        placeholder="First Name"
                        name="First Name"
                        required/>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2}>
                       <input
                        type="text"
                        placeholder="Last Name"
                        name="Last Name"
                        required/>
                        </FadeInWhenVisible>
                     <FadeInWhenVisible delay={.4}>
                     <input type="email" name="email" placeholder='Email' id="" required/>
                        </FadeInWhenVisible>
                     <FadeInWhenVisible delay={.6}>
                       <input type="tel" placeholder="Phone" name="Phone"/>
                       </FadeInWhenVisible>
                     <FadeInWhenVisible className={styles.text_area} delay={.8}>
                       <textarea
                        name="Message"
                        rows="10"
                        placeholder="Message"
                        required/>
                        </FadeInWhenVisible>
                    <input type="hidden" name="contact" value="contact"/>
                     <FadeInWhenVisible delay={1}>
                       <button type="submit" className={styles.button}>Submit</button>
                       </FadeInWhenVisible>
                </form>
                {/* <motion.h2
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                    once: true
                }}
                    variants={fadeInUp}>Contact Info</motion.h2> */}
                <div className={styles.contact_info}>
                  <div className={styles.contact_info_left}>
                    <p>Contact Info:</p>
                    <p>Email: press@strong4sheriff.com <br/>
                    Phone: (310) 908-1241
                    </p>
                  </div>
                  <div className={styles.contact_info_right}>
                  <p>Mailing Address:</p>
                  <p>6709 La Tijera Blvd. #555<br/>
                  Los Angeles, CA 90045</p>
                  </div>
                </div>
                <div className={styles.social}>
                    <a
                        href="https://www.facebook.com/EricStrongforLACountySheriff2022"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-fb_white.png" width={45} height={43} alt=""/>
                    </a>
                    <a
                        href="https://twitter.com/Strong4Sheriff"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-twitter_white.png" width={45} height={43} alt=""/>
                    </a>
                    <a
                        href="https://www.instagram.com/strong4sheriff/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-ig_white.png" width={45} height={43} alt=""/>
                    </a>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default Contact
