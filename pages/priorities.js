import JoinCta from '../components/JoinCta'
import FullDarkLeft from '../components/FullDarkLeft'
import FullLightRight from '../components/FullLightRight'
import FullPrimaryLeft from '../components/FullPrimaryLeft'
import styles from '../styles/Priorities.module.scss'
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, FadeInLeftWhenVisible} from '../animations/animations';

const Priorities = () => {
    console.log("priorites page render")
    return (
        <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <motion.section
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className={styles.container}>
                <motion.img
                    src="/img/masthead_03.jpg"
                    alt="Picture of Los Angeles"
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}/> 
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
                    <motion.img
                        src="/img/full-feat_10.jpg"
                        alt="Picture of Los Angeles"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}/>
                </div>
                <div className={styles.textCol}>
                    <FadeInLeftWhenVisible>
                        <h2>Strong Leadership. Strong Priorities. Strong Policies.</h2>
                        <p>“By listening to the community we can put their needs first. I will strive to lead by example, and I will work with the community, stakeholders, and Elected Officials to identify solutions to our many shared problems. My platform is based on what I know is broken, and what our community is demanding their leaders take action to fix.”</p>
                        <motion.img
                            src="/img/signature.png"
                            alt="Eric Strong Signature"
                            initial="initial"
                            animate="animate"
                            variants={fadeIn}
                            className={styles.signature}/>
                    </FadeInLeftWhenVisible>
                </div>
            </motion.section>

            <motion.section
                className={styles.priorities}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
                <div className={styles.cards}>
              
              <FullDarkLeft image="/img/full-feat_03.jpg" content="<h2>Deputy Gangs and LASD's Dated Culture</h2>
              <p><em>Eric is the only candidate that has led investigations into incidents involving deputy gangs.</em></p>
              <p><strong>AS SHERIFF, ERIC WILL:</strong></p>
              <ul>
              <li>Acknowledge the existence of deputy gangs within the department and move decisively to eliminate them by banning the groups outright and implementing recommendations from the Sheriff’s Citizens Advisory Committee and Office of the Inspector General.</li>
              </ul>" readMoreContent="<ul> 
              <li>Implement policies to acknowledge and protect deputies who come forward to report department misconduct.</li>
              <li>Enhance discipline to further deter involvement in deputy gangs.</li>
              <li>Discipline deputies who are aware of misconduct and do nothing to report it.</li>
              <li>For the thousands of good women and men doing the job right, I will make it safe, easy, accepted and respected to do the right thing and speaks up against misconduct.  I will work with the union and the county to change work rules where policies interfere with management’s ability to end deputy gangs.</li> </ul>"/>

          <FullLightRight 
          image="/img/full-feat_04.jpg" 
          content=" <h2>Alternatives to Incarceration</h2>
          <p><em>With family members that have been incarcerated, Eric understands how important it is that we right-size the footprint of a sprawling criminal justice system that often exacerbates recidivism, insecurity, and homelessness.</em></p>
          <p><strong>AS SHERIFF, ERIC WILL:</strong></p>    
          <ul>
          <li>Be the first elected Sheriff in history to not support building a new Men’s Central Jail as  approximately 1/3rd of the in-custody population has behavioral and mental health challenges. By treating this population, we can better address the behavioral health crisis on our streets, its connection to homelessness and recidivism, and we can avoid building a costly new jail.</li>
          </ul>" readMoreContent=" <ul>
          <li>Work with and support the County’s Alternatives to Incarceration Initiative to keep people out of the criminal justice system.</li>
          <li>Work to break the cycle of addiction, petty crime, and homelessness by working with the ATI Initiative to divert people into services immediately at the point of contact.</li>
      </ul>"/>

              <FullDarkLeft image="/img/full-feat_05.jpg" 
              content="<h2>Use of Force</h2>
              <p><em>Jurisdictions with more restrictive use of force policies have fewer injuries to citizens and officers alike. When police unnecessarily and inappropriately use force we undermine trust in our community, and that makes everyone less safe. </em></p>
              <p><strong>AS SHERIFF, ERIC WILL:</strong></p>
              <ul>
              <li>Change use of force policies and the use of lethal weapons tactics to ensure police are using force when they must, not simply because they can.</li>
              </ul>" 
              readMoreContent="<ul>
              <li>Attend the Citizens Advisory Committee listening sessions to ensure families and survivors of violent crimes and police violence are heard.</li>
              <li>Personally contact the family of any individual killed by an on-duty member of the LASD, irrespective of the lawfulness of the use of force.</li>
              <li>Extend mental health training to line deputies to ensure those first on-scene do not need to wait for a sergeant with training in working with the mentally ill and less-lethal alternatives.</li>
              <li>Support a co-responder model to ensure mental health professionals respond with Sheriff's Deputies to mental health calls.</li>
          </ul>"/>

<FullLightRight 
          image="/img/full-feat_06.jpg" 
          content="<h2>Helping Victims and Reducing Crime</h2>
          <p><em>When someone is is victimized they are in a most vulnerable moment. It is necessary they are treated with great care and compassion and are made to feel safe.</em></p>
          <p><strong>AS SHERIFF, ERIC WILL:</strong></p>
          <ul>
              <li>Put the needs of victims first and take steps to protect them from their perpetrators and re-victimization. Ensure victims are able to freely participate in the justice system process, and that they receive verbal and written information about services and available assistance, which will guide them through a difficult journey.</li>
          </ul>" 
          readMoreContent="<ul>
          <li>Ensure victims are not re-victimized by a lack of compassion or discounted by any department member who makes contact. All victims need to be treated with respect, dignity and empathy, just as we would want our loved ones to be treated.</li>
          <li>Commit to standing with victims and making sure my department provides them with information about available resources to make them whole.</li>
          <li>Partner with communities and other law enforcement agencies to find solutions to neighborhood-specific problems including vandalism and shoplifting. Advocate for and work closely with violence reduction efforts such as the use of gang intervention workers.</li>
          <li>Use modern crime-fighting tactics that focus on the most prolific offenders. That, in turn, will have an outsized impact on overall crime in our communities.</li>
          <li>Require deputies to undergo cultural competency training to ensure they are respectful to all victims of crime. Additionally, I will ensure that, as part of regular training, deputies undergo vulnerable victim training to ensure victims of elder abuse, fraud, sexual assault, and domestic violence are treated with the utmost respect and dignity.</li>
          <li>Make sure deputies inform undocumented survivors, particularly victims of domestic violence, that they will never be reported to ICE when they make a report to Sheriff’s Deputies or testify against an abuser.</li>
      
      </ul>"/>


<FullPrimaryLeft image="/img/full-feat_11.jpg" 
              content="<h2>Trust and Transparency</h2>
              <p><em>Respect is earned, it is not demanded. We must prove that the Los Angeles County Sheriff's Department deserves the community's trust by earning it. By ensuring full transparency, the LASD can regain its stature as a respected agency so that we can better serve the needs of our community.</em></p>
              <p><strong>AS SHERIFF, ERIC WILL:</strong></p>
                  
              <ul>
                  <li>Fast track the use of body-worn cameras on all deputies engaging with the public.</li>
              </ul>" 
              readMoreContent=" <ul>
              <li>Enhance transparency and provide data about LASD stops, arrests, in-custody deaths, uses of force, homicides, sheriff’s deputies killed or injured in the line of duty, lawsuits, hate crimes, civilian complaints, deployment of less-lethal weapons, use of drones, use of canines and other key areas on the LASD website.</li>

              <li>Work with the Board of Supervisors to call a hearing on the effectiveness, efficacy, and costs of the department’s contract cities program to both LASD and the cities we serve.</li>

              <li>Make the LASD policies and procedures public.</li>

              <li>Enact a policy that ensures there are no retaliatory arrests for individuals or their family members who speak against the Department. Implement a modern approach to crowd control and other First Amendment activity.</li>

              <li>Foster relationships with the community and key stakeholders and ensure they have a seat at the table. That will include:
                  <ul>
                      <li>Creating station community advisory boards to ensure better communication between station deputies, leadership, and the communities they serve.</li>

                      <li>Building a positive working relationship with the Board of Supervisors, Inspector General, and Citizen Oversight Commission.</li>
                  </ul>
              </li>
              <li>Review policies that are subjective and allow for ambiguity, especially as it pertains to citizen complaints.</li>

              <li>Increase and enhance relevant, meaningful, and effective training and tools to impact racial sensitivity, diversity awareness, and implicit bias awareness.</li>

              <li>Modernize LASD’s mission statement to ensure serving and protecting the community is as much a priority as is treating people with respect, dignity, professionalism, and compassion.</li>

              <li>Prioritize accountability at all levels.</li>

              <li>Stop discriminatory hiring practices and put an end to cronyism.</li>

              <li>Make sure hiring practices prioritize the hiring and retention of staff that reflects the diversity of the community we are sworn to protect and serve.</li>

          </ul>"/>

                </div>
            </motion.section>
        </motion.div>
    )
}

Priorities.title =  "Strong Priorities for a Stronger LA Sheriff's Department #Strong4Sheriff — Eric Strong for Los Angeles County Sheriff";
Priorities.description = "Strong Priorities for a Stronger LA Sheriff's Department #Strong4Sheriff — Eric Strong for Los Angeles County Sheriff";

export default Priorities
