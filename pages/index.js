import JoinCta from '../components/JoinCta'
import styles from '../styles/Home.module.scss'
import {motion} from 'framer-motion';
import {
    fadeInUp,
    fadeIn,
    stagger,
    FadeInWhenVisible,
    FadeInLeftWhenVisible,
    FadeInRightWhenVisible
} from '../animations/animations';
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
                <FadeInRightWhenVisible>
                    <div className={styles.textContainer}>
                        <h1>VOTE ERIC STRONG FOR A SAFER AND MORE JUST LOS ANGELES COUNTY.</h1>
                        <Link href="/about">
                            <a className={styles.buttonInvert}>
                                Meet Eric</a>
                        </Link>
                    </div>
                </FadeInRightWhenVisible>
            </motion.section>
            <JoinCta/>
            <motion.section
                className={styles.twoCol}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.imgCol}>
                <motion.video
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        autoPlay="autoplay"
                        loop={true}
                        playsInline 
                        muted>
        <source src="/video/eric-comp.mp4" type="video/mp4"/>
      </motion.video>
                </div>
                <div className={styles.textCol}>
                    <FadeInLeftWhenVisible>
                        <h2>Meet Eric Strong</h2>

                        <p>Over his nearly 30-year career in public safety, Eric Strong has led units across virtually every function of law enforcement, from patrol to courts, custody, investigations, Internal Affairs, risk management, and auditing. He has also commanded a patrol station the Advocacy Bureau and the Audit and Accountability Bureau.</p>
                        <p>While his professional experience sets him apart, Eric’s personal experience as a victim of crime, someone who has had negative interactions with police, and who has family members who have been incarcerated and even killed by law enforcement, is what enables him to lead LA County at this critical time.</p>
                        <Link href="/about">
                            <a className={styles.button}>
                            Click here to learn more about Eric</a>
                        </Link>
                    </FadeInLeftWhenVisible>
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
                <p className={styles.quote}>“As L.A. County Sheriff, my mission will be to enhance your safety, protect victims of crime, and rid the Department of a culture that has allowed deputy gangs to fester. Together, we can and will make this a world-class department that will enhance safety and justice, and make Los Angeles County proud.” <br/>
                    <motion.img
                        src="/img/light-signature.png"
                        alt="Eric Strong Signature"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}/> {/* <span className={styles.small}>— Eric Strong</span> */}
                </p>
                <div className={styles.mw800}>
                    <div className={styles.videoContainer}>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/J2lM-pX9kD0"
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

Home.title = 'Eric Strong for Los Angeles County Sheriff'
Home.description = 'Eric Strong for Los Angeles County Sheriff'
