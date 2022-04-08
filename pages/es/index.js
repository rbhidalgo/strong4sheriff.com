import JoinCta from '../../components/JoinCta'
import styles from '../../styles/Home.module.scss'
import {motion} from 'framer-motion';
import {
    fadeInUp,
    fadeIn,
    stagger,
    FadeInWhenVisible,
    FadeInLeftWhenVisible,
    FadeInRightWhenVisible
} from '../../animations/animations';
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
                        <h1>Vote a Eric Strong por un condado de Los Ángeles más seguro y más justo para todas las personas.</h1>
                        <Link href="/about">
                            <a className={styles.buttonInvert}>
                                Meet Eric</a>
                        </Link>
                    </div>
                </FadeInRightWhenVisible>
            </motion.section>
            <JoinCta/>
            <motion.section
                className={styles.video}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true
            }}
                variants={fadeInUp}>
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
                <p className={styles.quote}>“Como alguacil del condado de Los Ángeles, mi misión será mejorar su seguridad, proteger a las víctimas del crimen y librar al Departamento de una cultura que ha permitido que se enconen las pandillas de agentes. Juntos, podemos y haremos de este un departamento de clase mundial que mejorará la seguridad y la justicia, y enorgullecerá al condado de Los Ángeles”. <br/>
                    <motion.img
                        src="/img/light-signature.png"
                        alt="Eric Strong Signature"
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}/> {/* <span className={styles.small}>— Eric Strong</span> */}
                </p>
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
                        <h2>Conozca a Eric Strong</h2>

                        <p>Durante sus casi 30 años en la aplicación de la ley, Eric Strong ha dirigido unidades en prácticamente todas las funciones del Departamento del Sheriff del condado de Los Ángeles, desde patrullas hasta tribunales, custodia, investigaciones, asuntos internos, gestión de riesgos y auditoría.</p>
                        <p>Si bien su experiencia profesional lo distingue, la experiencia personal de Eric como víctima de un delito, alguien que ha sido perfilado por la policía y que tiene familiares que han sido encarcelados e incluso asesinados por la policía, es lo que le permite liderar el condado de Los Ángeles en este momento crítico.</p>
                        <Link href="/about">
                            <a className={styles.button}>
                            ACERCA de Eric</a>
                        </Link>
                    </FadeInLeftWhenVisible>
                </div>
            </motion.section>
            
        </motion.div>
    )
}

Home.title = 'Eric Strong for Los Angeles County Sheriff'
Home.description = 'Eric Strong for Los Angeles County Sheriff'
