import JoinCta from '../components/JoinCta'
import styles from '../styles/About.module.scss'
import {motion} from "framer-motion";
import {
    fadeInUp,
    fadeIn,
    stagger,
    FadeInWhenVisible,
    fadeInLeft,
    FadeInRightWhenVisible,
    FadeInLeftWhenVisible
} from '../animations/animations';

const about = () => {
    return (
        <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <motion.section
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className={styles.container}>
                <motion.img
                    src="/img/masthead_02.jpg"
                    alt="About Eric Strong"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}/>
                <FadeInRightWhenVisible>
                    <div className={styles.textContainer}>
                        <p>
                            <strong>ABOUT ERIC STRONG</strong>
                        </p>
                        <h1>Los Angeles County deserves better leadership.</h1>

                    </div>
                </FadeInRightWhenVisible>
            </motion.section>
            <JoinCta />
            <motion.section
                className={styles.fullLeft}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.fullImg}>
                    <motion.img
                        src="/img/full-feat_01.jpg"
                        alt="Picture of Los Angeles"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}/>
                </div>
                <div className={styles.textCol}>
                    <FadeInLeftWhenVisible>
                        <h2>Experienced Peace Officer Committed to Helping Others</h2>
                        <p>Over his nearly 30-years in law enforcement, Eric Strong has led units across
                            virtually every function of the L.A. County Sheriff’s Department, from patrol to
                            courts, custody, investigations, internal affairs, risk management and auditing.
                            While his professional experience sets him apart, Eric’s personal experience as
                            a victim of crime, someone who has been targeted by police, and who has family
                            members who have been incarcerated and killed by law enforcement, is what will
                            enable him to lead for LA County at this critical time.</p>
                        <p>Born and raised in L.A. County, Eric is a proud son, husband, father,
                            brother, nephew, and youth counselor. After attending St. John Bosco High
                            School, Eric was admitted to the University of California at Los Angeles. He
                            served in the United States Marine Corps and began his career in public safety
                            in 1993, following in his father’s footsteps to become a patrol officer for the
                            Compton Police Department.</p>
                    </FadeInLeftWhenVisible>
                </div>
            </motion.section>
            <motion.section
                className={styles.fullRight}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={`${styles.textCol + ' ' + styles.primaryBg}`}>
                    <FadeInRightWhenVisible>
                        <h2>Community Leader and Lifelong Resident of L.A.</h2>
                        <p>Eric is a founding board member of Police Against Racism which strives to
                            dismantle systemic racism in policing. He has personally been targeted by
                            police, has family members that have been incarcerated and killed by police, and
                            he has also been a victim of crime. He is a graduate of the FBI National Academy
                            at Quantico and has received awards for his handling of some of the department’s
                            most infamous internal affairs investigations, including the Quiet Cannon Case
                            involving a Deputy Gang known as the 3000 Boys.</p>
                        <p>Eric lives in Inglewood with his wife, Sidra, who also serves in the LA
                            County Sheriff’s Department. They have three kids ages 24, 22 and 21.</p>
                    </FadeInRightWhenVisible>
                </div>
                <div className={styles.fullImg}>
                    <motion.img
                        src="/img/full-feat_02.jpg"
                        alt="Picture of Los Angeles"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}/>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default about
