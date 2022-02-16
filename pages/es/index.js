import styles from '../../styles/Home.module.scss'
import {motion} from 'framer-motion';
import {fadeInUp, fadeIn, stagger, FadeInWhenVisible, FadeInLeftWhenVisible} from '../../animations/animations';
import Link from "next/link";

export default function Home() {
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
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    className={styles.textContainer}>
                    <h1>Vote por Eric Strong por un condado de Los Ángeles más seguro y más justo para todas las personas.</h1>
                    <Link href="/about">
                        <a className={styles.buttonInvert}>
                        Conoce a Eric</a>
                    </Link>
                </motion.div>
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
                <form
                    name="join-team"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field">
                    <FadeInLeftWhenVisible>
                        <input type="text" name="name" placeholder='Name' id=""/>
                    </FadeInLeftWhenVisible>
                    <FadeInLeftWhenVisible delay={.3}>
                        <input type="email" name="email" placeholder='Email' id=""/>
                    </FadeInLeftWhenVisible>
                    <input type="hidden" name="join-team" value="contact"/>
                    <FadeInLeftWhenVisible delay={.6}>
                        <button type="submit">Send</button>
                    </FadeInLeftWhenVisible>
                </form>
            </motion.section>

            <motion.section
                className={styles.twoCol}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.imgCol}>
                    <motion.img
                        src="/img/feat_01.jpg"
                        alt="Picture of Los Angeles"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}/>
                </div>
                <div className={styles.textCol}>
                <FadeInLeftWhenVisible delay={.3}>
                    <h2>Get to Know Eric Strong</h2>
                    </FadeInLeftWhenVisible>
                    <p>Over his nearly 30-years in law enforcement, Eric Strong has led units across
                        virtually every function of the L.A. County Sheriff’s Department, from patrol to
                        courts, custody, investigations, internal affairs, risk management and auditing.</p>
                    <p>While his professional experience sets him apart, Eric’s personal experience
                        as a victim of crime, someone who has been profiled by police, and who has
                        family members who have been incarcerated and even killed by law enforcement, is
                        what enables him to lead LA County at this critical time.</p>
                    <Link href="/about">
                        <a className={styles.button}>
                            Learn more about Eric</a>
                    </Link>
                </div>
            </motion.section>

            <motion.section
                className={styles.video}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <p className={styles.quote}>“As L.A. County Sheriff, my mission will be to
                    enhance your safety, protect victims of crime, and rid the Department of a
                    culture that has allowed deputy gangs to fester. Together, we can and will make
                    this a world-class department that will enhance safety and justice, and make Los
                    Angeles County proud.”<br/>
                    <span className={styles.small}>— Eric Strong</span>
                </p>
                <div className={styles.mw800}>
                    <div className={styles.videoContainer}>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/LXb3EKWsInQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}

Home.title = 'Eric Strong para el alguacil del condado de Los Ángeles'
Home.description = 'Eric Strong for Los Angeles County Sheriff'
