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
const fadeInLeft = {
    initial: {
        x: -60,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: easing,
        }
    },
    animate: {
        x: 0,
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

function FadeInWhenVisibleScale({children, delay, className}) {
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
        }}className={className}>
            {children}
        </motion.div>
    );
}

function FadeInWhenVisible({children, delay, className}) {
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
                // scale: 1
            },
            hidden: {
                opacity: 0,
                // scale: 0
            }
        }}className={className}>
            {children}
        </motion.div>
    );
}

function FadeInLeftWhenVisible({children, delay}) {
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
                x: 0
            },
            hidden: {
                opacity: 0,
                x: 100
            }
        }}>
            {children}
        </motion.div>
    );
}

function FadeInRightWhenVisible({children, delay}) {
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
                x: 0
            },
            hidden: {
                opacity: 0,
                x: -100
            }
        }}>
            {children}
        </motion.div>
    );
}
export {easing, fadeInUp, fadeInLeft, stagger, FadeInWhenVisible, FadeInLeftWhenVisible, FadeInRightWhenVisible, fadeIn, FadeInWhenVisibleScale};