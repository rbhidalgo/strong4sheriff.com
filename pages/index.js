import styles from '../styles/Home.module.scss'
import {motion} from 'framer-motion';
import {fadeInUp, fadeIn, stagger, FadeInWhenVisible} from '../animations/animations';

export default function Home() {
    return (
        <motion.div initial="initial"
        animate="animate" variants={fadeIn}>
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
                    variants={fadeInUp}>Join Team Strong</motion.h2>
                <form action="">
                    <FadeInWhenVisible>
                        <input type="text" name="name" placeholder='name' id=""/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={.3}>
                        <input type="email" name="email" placeholder='email' id=""/>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={.6}>
                        <button>submit</button>
                    </FadeInWhenVisible>
                </form>
            </motion.section>
            <h1>Homepage</h1>
        </motion.div>
    )
}

Home.title = 'Eric Strong for Los Angeles County Sheriff'
Home.description = 'Eric Strong for Los Angeles County Sheriff'
