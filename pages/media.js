import JoinCta from '../components/JoinCta'
import styles from '../styles/Media.module.scss'
import {motion} from "framer-motion";
import Link from "next/link";
import {
    fadeInUp,
    fadeIn,
    stagger,
    FadeInWhenVisible,
    fadeInLeft,
    FadeInRightWhenVisible,
    FadeInLeftWhenVisible
} from '../animations/animations';

const Media = () => {
    return (
        <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <motion.section
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className={styles.container}>
                <motion.img
                    src="/img/masthead_05.jpg"
                    alt="Picture of Los Angeles"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}/>
                <FadeInRightWhenVisible>
                    <div className={styles.textContainer}>
                        <p>
                            <strong>MEDIA</strong>
                        </p>
                        <h1>A 360 degree view of Law enforcement and Community.</h1>

                    </div>
                </FadeInRightWhenVisible>
            </motion.section>
            <JoinCta/>
            <motion.section
                className={styles.media}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.cards}>
                    <motion.div
                        className={styles.twoCol}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                        once: true
                    }}
                        variants={fadeInUp}>
                        <div className={styles.textCol}>
                            <p className={styles.small}>8/23/2021</p>
                            <h2>New Challenger To Sheriff Villanueva Promises To Root Out 'Deputy Gangs'</h2>
                            <a
                                className={styles.button}
                                href='https://laist.com/news/criminal-justice/another-insider-eric-strong-launches-his-bid-to-unseat-sheriff-villanueva-next-year'
                                target="_blank"
                                rel="noreferrer">
                                READ MORE</a>
                        </div>
                        <div className={styles.textCol}>
                            <FadeInLeftWhenVisible>
                                <p>EL.A. Sheriff’s Lt. Eric Strong, a nearly 30-year veteran of law enforcement,
                                    announced today that he will challenge embattled Sheriff Alex Villanueva in next
                                    year’s election. If successful, he would become the county's first Black
                                    sheriff.</p>
                                <p>“The leadership of this department is unwilling to even acknowledge the
                                    existence of gangs in our ranks, and that has left the community’s trust in the
                                    Sheriff’s Department in tatters,” Strong told a news conference outside the
                                    sheriff’s headquarters at the Hall of Justice.</p>

                            </FadeInLeftWhenVisible>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.twoCol}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                        once: true
                    }}
                        variants={fadeInUp}>
                        <div className={styles.textCol}>
                            <p className={styles.small}>8/16/21</p>
                            <h2>Eric Strong Runs for LA County Sheriff with Close to 30 Years of Law
                                Enforcement Experience</h2>
                            <a
                                className={styles.button}
                                href='https://citypridemagazine.com/eric-strong-runs-for-la-county-sheriff-with-close-to-30-years-of-law-enforcement-experience/'
                                target="_blank"
                                rel="noreferrer">
                                READ MORE</a>
                        </div>
                        <div className={styles.textCol}>
                            <FadeInLeftWhenVisible>
                                <p>With almost 30 years of LA-based law enforcement and much of his experience
                                    coming from working within community-based assignments, internal oversight and
                                    accountability positions, Strong believes he brings in a different set of skills
                                    that the policing of today’s world needs.</p>
                                <p>“As society goes through stages, so does policing,” said Strong. “I think all
                                    too often we try to separate the two, community and police, and that’s part of
                                    the problem. This ‘Us vs. Them’ dialogue that has been going on for so long has
                                    to change.”</p>

                            </FadeInLeftWhenVisible>
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.twoCol}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                        once: true
                    }}
                        variants={fadeInUp}>
                        <div className={styles.textCol}>
                            <p className={styles.small}>8/24/2021</p>
                            <h2>New ‘Reform’ Candidate in LA County Sheriff’s Race Pledges Fight Against
                                ‘Gangs’ of Deputies</h2>
                            <a
                                className={styles.button}
                                href='https://www.davisvanguard.org/2021/08/new-reform-candidate-in-la-county-sheriffs-race-pledges-fight-against-gangs-of-deputies/'
                                target="_blank"
                                rel="noreferrer">
                                READ MORE</a>
                        </div>
                        <div className={styles.textCol}>
                            <FadeInLeftWhenVisible>
                                <p>Lieutenant Eric Strong announced his campaign Monday for LA County Sheriff,
                                    and promised to investigate and end rumored “gangs” of deputies within the
                                    department. Strong has been in law enforcement for almost 30 years, graduating
                                    from the FBI’s National Academy at Quantico, and presently serving on the board
                                    of Police Against Racism.</p>
                                <p>“Leadership. That crisis of leadership has interfered with a course of calls
                                    for a modern and more transparent LA County Sheriff’s Department. It has
                                    undermined our honorable profession’s ability to deliver on our promise of a
                                    more safe and a more just future for Los Angeles,” Lt. Strong said during his
                                    speech.</p>

                            </FadeInLeftWhenVisible>
                        </div>
                    </motion.div>

                </div>
            </motion.section>
        </motion.div>
    )
}

export default Media
