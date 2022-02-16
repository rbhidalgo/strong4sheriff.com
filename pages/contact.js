import styles from "../styles/Contact.module.scss"
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, FadeInWhenVisible, FadeInRightWhenVisible} from '../animations/animations';
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
                    src="/img/masthead_06.jpg"
                    alt="Picture of Los Angeles"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}/>
                <FadeInRightWhenVisible>
                    <div className={styles.textContainer}>
                        <p>
                            <strong>Contact Team Strong</strong>
                        </p>
                        <h1>
                            Enhanced public safety, protecting residents, supporting victims.</h1>
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
                    variants={fadeInUp}>Contact Team Strong</motion.h2>
                <p>For media inquiries, please email us at: Info@strong4sheriff.com <br/>To reach Eric’s Campaign Manager Paula Ramirez email:  Paula@strong4sheriff.com or call (323) 328-7502</p>
                <form
                    name="contact-us"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field">
                    <FadeInWhenVisible>
                        <input type="text" placeholder="First Name" name="First Name" required/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={.2}>
                        <input type="text" placeholder="Last Name" name="Last Name" required/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={.4}>
                        <input type="email" name="email" placeholder='Email' required/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={.6}>
                        <input type="tel" placeholder="Phone" name="Phone"/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible className={styles.text_area} delay={.8}>
                        <textarea name="Message" rows="10" placeholder="Message" required/>
                    </FadeInWhenVisible>
                    <input type="hidden" name="form-name" value="contact-us"/>
                    <FadeInWhenVisible delay={1}>
                        <button type="submit" className={styles.button}>Submit</button>
                    </FadeInWhenVisible>
                </form>
                <div className={styles.social}>
                    <a
                        href="https://www.facebook.com/EricStrongforLACountySheriff2022"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-fb_white.png" width={45} height={43} alt=""/>
                    </a>
                    <a
                        href="https://www.instagram.com/strong4sheriff/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-ig_white.png" width={45} height={43} alt=""/>
                    </a>
                    <a
                        href="https://twitter.com/Strong4Sheriff"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-twitter_white.png" width={45} height={43} alt=""/>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC5_3NIBfsWbzPGOr1M4o1Ag"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-yt_white.png" width={58} height={43} alt=""/>
                    </a>
                </div>
                <motion.h2
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                    once: true
                }}
                    variants={fadeInUp}>Join The Movement</motion.h2>
                    <p>Join the team with your email address and receive the latest campaign news and updates.</p>

                    <form
                    name="get-involved"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field">
                    <FadeInWhenVisible>
                        <input type="email" name="email" placeholder='Email' required/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={.2}>
                        <input type="text" placeholder="Name" name="Name" required/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={.4}>
                        <input type="tel" placeholder="Phone" name="Phone" required/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={.6}>
                    <input type="text" pattern="[0-9]{5}" title="Five digit zip code" placeholder='Zip Code' required/>
                    </FadeInWhenVisible>
                    <input type="hidden" name="form-name" value="get-involved"/>
                    <FadeInWhenVisible delay={.8}>
                        <button type="submit" className={styles.button}>Submit</button>
                    </FadeInWhenVisible>
                </form>


                <div className={styles.contact_info}>
                    <div className={styles.contact_info_center}>
                        <p>Mailing Address:</p>
                        <p>6709 La Tijera Blvd. #555<br/>
                            Los Angeles, CA 90045 <br/>
                            (310) 908-1241</p>
                    </div>
                </div>
                
            </motion.section>
        </motion.div>
    )
}

Contact.title = "Contact — Eric Strong for Los Angeles County Sheriff";
Contact.description = "Contact — Eric Strong for Los Angeles County Sheriff";

export default Contact
