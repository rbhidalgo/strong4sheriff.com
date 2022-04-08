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
                        <h2>Oficial de paz experimentado comprometido a ayudar a los demás</h2>
                        <p>Durante sus casi 30 años en la aplicación de la ley, Eric Strong ha dirigido unidades en prácticamente todas las funciones del Departamento del Sheriff del condado de Los Ángeles, desde patrullas hasta tribunales, custodia, investigaciones, asuntos internos, gestión de riesgos y auditoría. Si bien su experiencia profesional lo distingue, la experiencia personal de Eric como víctima de un delito, alguien que ha sido blanco de la policía y que tiene familiares que han sido encarcelados y asesinados por la policía, es lo que le permitirá liderar para el condado de Los Ángeles. en este momento crítico.</p>
                        <p>Nacido y criado en el condado de Los Ángeles, Eric es un orgulloso hijo, esposo, padre, hermano, sobrino y consejero juvenil. Después de asistir a la escuela secundaria St. John Bosco, Eric fue admitido en la Universidad de California en Los Ángeles. Sirvió en el Corp de Marines de los Estados Unidos y comenzó su carrera en seguridad pública en 1993, siguiendo los pasos de su padre para convertirse en oficial de patrulla del Departamento de Policía de Compton.</p>
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
                        <h2>Líder comunitario y residente de toda la vida de Los Angeles</h2>
                        <p>Eric es miembro fundador de la junta directiva de Police Against Racism, que se esfuerza por desmantelar el racismo sistémico en la vigilancia. Ha sido atacado personalmente por la policía, tiene familiares que han sido encarcelados y asesinados por la policía, y también ha sido víctima de delitos. Se graduó de la Academia Nacional del FBI en Quantico y ha recibido premios por su manejo de algunas de las investigaciones de asuntos internos más infames del departamento, incluido el caso Quiet Cannon que involucra a una pandilla adjunta conocida como 3000 Boys.</p>
                        <p>Eric vive en Inglewood con su esposa, Sidra, quien también trabaja en el Departamento del Sheriff del condado de Los Ángeles. Tienen tres hijos de 24, 22 y 21 años.</p>
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
