import JoinCta from '../components/JoinCta'
import styles from '../styles/Endorsements.module.scss'
import medDonors from '../data/medDonors'
import smDonors from '../data/smDonors'
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, FadeInRightWhenVisible, FadeInLeftWhenVisible, FadeInWhenVisible} from '../animations/animations';
import Image from 'next/image'

const Endorsements = () => {

    return (
        <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <motion.section
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className={styles.masthead}>
                <motion.img
                    src="/img/masthead_04.jpg"
                    alt="About Eric Strong"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}/>
                <FadeInRightWhenVisible>
                    <div className={styles.textContainer}>
                        <h1>“I believe Los Angeles is in need of change, I think Eric Strong is the man
                            to provide that”</h1>
                        <p>
                            <strong>-Lauren Daniels</strong>
                        </p>
                    </div>
                </FadeInRightWhenVisible>
            </motion.section>
            <JoinCta/>
            <motion.section
                className={styles.top_donors}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.container}>
                    <div className={styles.top_donors_grid}>

                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__image}>
                                {/* <Image src="/img/feat_donor_01.jpg" alt="" layout='fill'/> */}
                            </div>
                            <div className={styles.top_donors_donor__text}>
                                <h3>James Costos</h3>
                                <p>US Ambassador</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.4} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__image}>
                                {/* <Image src="/img/feat_donor_01.jpg" alt="" layout='fill'/> */}
                            </div>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Eric Hirshberg</h3>
                                <p>Investor/Advisor/Former CEO Activision</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.6} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__image}>
                                {/* <Image src="/img/feat_donor_01.jpg" alt="" layout='fill'/> */}
                            </div>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Jorge Marquez</h3>
                                <p>Councilmember City of Covina</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.8} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__image}>
                                {/* <Image src="/img/feat_donor_01.jpg" alt="" layout='fill'/> */}
                            </div>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Ryan Raether</h3>
                                <p>Molina Healthcare Sr. Program Manager of Interventions</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={1} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__image}>
                                {/* <Image src="/img/feat_donor_01.jpg" alt="" layout='fill'/> */}
                            </div>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Derek Williams</h3>
                                <p>Ontario PD Chief (ret.)</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={1.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__image}>
                                {/* <Image src="/img/feat_donor_01.jpg" alt="" layout='fill'/> */}
                            </div>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Skipp Townsend</h3>
                                <p>Community Activist Interventionist (2nd Call)</p>
                            </div>
                        </FadeInWhenVisible>

                    </div>
                </div>
            </motion.section>
            <motion.section
                className={styles.quote}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.container}>
                    <div className={styles.quote_text}>
                        <p>“As a faculty in the Criminology and Justice Studies Department at California
                            State University, Northridge, I endorse the pursuit of Los Angeles County
                            Sheriff for Eric Strong. His passion and dedication to his community shines
                            through his great work and intentions for a safe and better environment for us
                            all.”</p>
                        <p className={styles.small}>
                            <strong>-Dr. Brandon Harris Educator – Professor USC/Cal State Northridge</strong>
                        </p>
                    </div>
                </div>
            </motion.section>
            <motion.section
                className={styles.med_donors}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.container}>
                    <h2>
                        <strong>Eric has a very diverse mixture of people and professions that support him. Below are just a few of the wonderful people:</strong>
                    </h2>
                    <div className={styles.med_donors_grid}>
                        {medDonors.map((item, index) => <div className={styles.med_donor} key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.title}</p>
                        </div>)}
                    </div>
                </div>
            </motion.section>
            <motion.section
                className={styles.sm_donors}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.container}>
                  <div className={styles.border_bottom}>
                    <h2>
                        <strong>“We Need leaders like Eric to win.”</strong>
                    </h2>
                    <p className={styles.small}>-Eric Hirshberg</p>
                  </div>
                    <div className={styles.sm_donors_grid}>
                        <ul className={styles.sm_donor_list}>
                            {smDonors.map((name, index) => <li key={index} className={styles.sm_donor_list_item}>{name}</li>)}
                        </ul>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}

Endorsements.title = "Endorsements — Eric Strong for Los Angeles County Sheriff";
Endorsements.description = "Endorsements — Eric Strong for Los Angeles County Sheriff";

export default Endorsements;
