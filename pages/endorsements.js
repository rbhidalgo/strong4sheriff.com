import JoinCta from '../components/JoinCta'
import styles from '../styles/Endorsements.module.scss'
import law from '../data/law'
import media from '../data/media'
import smDonors from '../data/smDonors'
import organizations from '../data/organizations'
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, FadeInRightWhenVisible, FadeInWhenVisible} from '../animations/animations';

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
                <h3>Eric has a very diverse mixture of people and professions that support him. Below are just a few of the wonderful people:</h3>
                <br/><br/>
                <h2><strong>Organizations</strong></h2>
                <div className={styles.med_donors}>
                <div className={styles.med_donors_grid}>
                        {organizations.map((item, index) => <div className={styles.med_donor} key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.title}</p>
                        </div>)}
                    </div>
                </div>
                        
                <h2 className={styles.title}><strong>Elected & Community Leaders</strong></h2>
                    <div className={styles.top_donors_grid}>

                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Mike Bonin</h3>
                                <p>Los Angeles City Councilmember</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Nithya Raman</h3>
                                <p>Los Angeles City Councilmember</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Jorge Marquez</h3>
                                <p>Councilmember City of Covina</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>James Costos</h3>
                                <p>US Ambassador</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>James Wally Brewster</h3>
                                <p>US Ambassador</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Jasmyne Cannick</h3>
                                <p>Journalist/Advocate</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Joe Gatlin</h3>
                                <p>San Pedro NAACP Vice-President</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Joseph Luis Piñon</h3>
                                <p>President of the Progressive Democratic Club</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Skipp Townsend</h3>
                                <p>Community Activist Interventionist</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Bruce McCall</h3>
                                <p>Pastor</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Calvin Blakely</h3>
                                <p>Clergy</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Gregory Sanders</h3>
                                <p>Clergy</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Charles Harris</h3>
                                <p>Clergy</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Phil Allen</h3>
                                <p>Pastor</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Stevie Wonder</h3>
                                <p>Activist & Musician</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Bishop Henry Hearns</h3>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Emeritus</h3>
                                <p>Lancaster Mayor</p>
                            </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible delay={.2} className={styles.top_donors_donor}>
                            <div className={styles.top_donors_donor__text}>
                                <h3>Emily Gordon</h3>
                                <p>Writer, Producer</p>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                    <br/><br/>
                <h2><strong>Media</strong></h2>
                <div className={styles.med_donors}>
                <div className={styles.med_donors_grid}>
                        {media.map((item, index) => <div className={styles.med_donor} key={index}>
                            <h3>{item.name}</h3>
                        </div>)}
                    </div>
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
                    {/* <h2>
                        <strong>Eric has a very diverse mixture of people and professions that support him. Below are just a few of the wonderful people:</strong>
                    </h2> */}
                        
                    <h2>Law Enforcement</h2>
                    <div className={styles.med_donors_grid}>
                        {law.map((item, index) => <div className={styles.med_donor} key={index}>
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
                  <h2><strong>Community</strong></h2>
                  <br/><br/>
                    <div className={styles.sm_donors_grid}>
                        <ul className={styles.sm_donor_list}>
                            {smDonors.map((name, index) => <li key={index} className={styles.sm_donor_list_item}>{name}</li>)}
                        </ul>
                    </div>
                    <br/>
                    <p className={styles.small}>*Titles used for identification purposes only.</p>
                </div>
            </motion.section>
        </motion.div>
    )
}

Endorsements.title = "Endorsements — Eric Strong for Los Angeles County Sheriff";
Endorsements.description = "Endorsements — Eric Strong for Los Angeles County Sheriff";

export default Endorsements;
