import {useState} from "react";
import styles from '../styles/FullPrimaryLeft.module.scss'
import {motion, AnimatePresence} from "framer-motion";
import {fadeInUp, fadeIn, FadeInRightWhenVisible, FadeInLeftWhenVisible} from '../animations/animations';
import { useMediaQuery } from "../utils/useMediaQuery";


export default function FullDarkLeft(props) {
    const [toggleMe,
        setToggleMe] = useState(false);

    function toggle() {
        setToggleMe(!toggleMe);
    }

    let isPageWide = useMediaQuery('(max-width: 1024px)')

    const variantsDesktop =  toggleMe ? {
      collapsed: { maxWidth: '100%' },
      open: { maxWidth: '100%' },
    } : {
      collapsed: { maxWidth: '100%' }
    }

    const variants =  toggleMe ? {
      collapsed: { maxWidth: '50%' },
      open: { maxWidth: '100%' },
    } : {
      collapsed: { maxWidth: '50%' }
    }


    return (
      <motion.div
      className={styles.fullRow + ' ' + styles.primary}
      initial="initial"
      whileInView="animate"
      viewport={{
      once: true
  }}
      variants={fadeInUp}>
      <div className={styles.fullImg + ' ' + styles.leftEric}>
          <motion.img
              src={props.image}
              alt={props.alt}
              initial="initial"
              animate="animate"
              variants={fadeIn}/>
      </div>
      <motion.div
      initial="collapsed"
      animate={toggleMe ? "open" : "collapsed"}
      exit="collapsed"
      variants={isPageWide ? variantsDesktop : variants}
      transition={{
      duration: .8,
      ease: [0.6, -0.05, 0.01, 0.99]
  }} 
      className={`${toggleMe 
        ? styles.textCol + ' ' + styles.textRight + ' ' + styles.fullWidth
        : styles.textCol + ' ' + styles.textRight}`}>
          <FadeInLeftWhenVisible>
            <div dangerouslySetInnerHTML={{
                __html: props.content
            }} />
              
              <p onClick={() => toggle(0)} className={styles.readMore + ' ' + styles.light}>Read More
                  <span
                      className={`${toggleMe 
                      ? styles.on + ' ' + styles.arrow
                      : styles.off + ' ' + styles.arrow}`}>&rsaquo;</span>
              </p>
          <AnimatePresence initial={false}>
          {toggleMe && (
              <motion.div
                  className={styles.content + ' ' + styles.primary}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                  open: {
                      opacity: 1,
                      height: "auto",
                      width: "auto"
                  },
                  collapsed: {
                      opacity: 0,
                      height: 0,
                      width: "100%"
                  }
              }}
                  transition={{
                  duration: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99],
              }}>
                  <span dangerouslySetInnerHTML={{
                __html: props.readMoreContent
            }} />
              </motion.div>
          )}
      </AnimatePresence>
          </FadeInLeftWhenVisible>
      </motion.div>

  </motion.div>
    );
}
