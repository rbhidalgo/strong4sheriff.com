import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router';
import {useState, useEffect} from "react"
import Logo from "../components/Logo";
import { useMediaQuery } from "../utils/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
    {
        title: 'About',
        path: '/about'
    }, {
        title: 'Priorities',
        path: '/priorities'
    }, {
        title: 'Endorsements',
        path: '/endorsements'
    }, 
    // {
    //     title: 'Get Involved',
    //     path: '/get-involved'
    // },
    {
        title: 'Media',
        path: '/media'
    }, {
        title: 'Contact',
        path: '/contact'
    }
]

const Navbar = () => {
    const router = useRouter();
    const [open,
        setOpen] = useState(false);
    const [navbar,
        setNavbar] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 120) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    let isPageWide = useMediaQuery('(max-width: 768px)')

    const variants = isPageWide ? {
      open: { opacity: 1, x: 0, display: 'flex' },
      closed: { opacity: 0, x: '100%', display: 'none' },
    } : {
      closed: { opacity: 1, x: 0 },
    }

    return (
        <header className={`${router.pathname === '/about' || router.pathname === '/endorsements'
          ? styles.whiteNav
          : ''}`}>
            <nav
                className={`${navbar
                ? styles.navContainer + " " + styles.scrolled
                : styles.navContainer}`}>
                <Link href="/" passHref>
                    <span>
                        <Logo className={styles.logo}/>
                    </span>
                </Link>
                <AnimatePresence>
                <motion.ul
                    animate={open ? "open" : "closed"}
                    variants={variants}
                    transition={{
                      duration: 0.6,
                      ease: "linear"
                  }}
                    className={`${open
                    ? styles.list + " " + styles.open
                    : styles.list}`}
                    onClick={() => setOpen(false)}>
                    {menu.map((item, index) => <li className={styles.listItem} key={index}>
                        <Link href={item.path} passHref>
                            <a
                                className={`${router.pathname === item.path
                                ? styles.active
                                : ''}`}>
                                {item.title}
                            </a>
                        </Link>
                    </li>)}
                </motion.ul>
                </AnimatePresence>
                <div
                    className={`${open
                    ? styles.social + " " + styles.open
                    : styles.social}`}>
                    <a
                        href="https://www.facebook.com/EricStrongforLACountySheriff2022"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-fb.png" width={30} height={28} alt=""/>
                    </a>
                    <a
                        href="https://www.instagram.com/strong4sheriff/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-ig.png" width={30} height={28} alt=""/>
                    </a>
                    <a
                        href="https://twitter.com/Strong4Sheriff"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-twitter.png" width={30} height={28} alt=""/>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC5_3NIBfsWbzPGOr1M4o1Ag"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-yt.png" width={43} height={28} alt=""/>
                    </a>
                </div>
                <a
                    href="https://secure.actblue.com/donate/ericstrong-digital_website"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.donate}>DONATE</a>
                {/* <Link
                    href={router.pathname === "/es"
                    ? "/"
                    : '/es'}
                    passHref>
                    <a className={styles.lang}>
                        {router.pathname === "/es"
                            ? "EG"
                            : 'ES'}
                    </a>
                </Link> */}
                <div
                    className={`${open
                    ? styles.hamburger + " " + styles.open
                    : styles.hamburger}`}
                    onClick={() => setOpen(!open)}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
