import {motion} from 'framer-motion';

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation initial: defines initial state of animation or
// stating point. exit: defines animation when component exits Custom variant
const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: easing,
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: easing
        }
    }
};

const fadeIn = {
    initial: {
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: easing
        }
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: easing
        }
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.8
        }
    }
};

function FadeInWhenVisible({children, delay}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
            once: true
        }}
            transition={{
            duration: 0.8,
            delay: delay
        }}
            variants={{
            visible: {
                opacity: 1,
                scale: 1
            },
            hidden: {
                opacity: 0,
                scale: 0
            }
        }}>
            {children}
        </motion.div>
    );
}
export {easing, fadeInUp, stagger, FadeInWhenVisible, fadeIn};