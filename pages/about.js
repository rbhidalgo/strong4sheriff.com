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
                        <p>While his professional experience sets him apart, Eric’s personal experience as a victim of crime, someone who has had negative interactions with police, and who has family members who have been incarcerated and killed by law enforcement, is what will enable him to lead for LA County at this critical time.</p>
                        <p>Born and raised in L.A. County, Eric is a proud son, husband, father, brother, nephew, and youth counselor. After attending St. John Bosco High School, Eric attended to the University of California at Los Angeles.  He also served in the United States Marine Corps. Eric began his career in public safety in 1993, following in his father’s footsteps as an officer for the Compton Police Department. </p>
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
                        <h2>A community leader, born and raised in Los Angeles County</h2>
                        <p>Eric is a founding board member of Police Against Racism which strives to dismantle systemic racism in policing. He is a graduate of the FBI National Academy at Quantico and has received awards for his handling of some of the department’s most infamous internal affairs investigations, including the Quiet Cannon Case involving a Deputy Gang known as the 3000 Boys.</p>
                        <p>Eric has been a community leader and mentor. He has contributed to improving his communities as he worked with youth for over a decade coaching baseball, soccer, football, and basketball. Eric has worked with youth programs writing grants, providing leadership, and creating character development curriculums. He regularly volunteers for numerous programs such as the United Peace Officers Against Crime Summer camps, 999 for Kids, and food giveaways.</p>
                        <p>Eric holds a Bachelor of Science in Management; is a graduate of the FBI National Academy, LA County University Management Development Program, and Blue Courage Leadership combined with thousands of hours of training and education in police practices.</p>
                        <p>Eric lives in Inglewood with his wife Sidra who also serves in the LA County Sheriff’s Department, and they have three children ages 24, 22, and 21.</p>
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

about.title = 'About Eric Strong — Eric Strong for Los Angeles County Sheriff'
about.description = 'About Eric Strong — Eric Strong for Los Angeles County Sheriff'

export default about
