import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import {useRouter} from 'next/router';
import {useState, useEffect} from "react"
import Logo from "../components/Logo"
import { motion } from "framer-motion";

const menu = [
    {
        title: 'About',
        path: '/about'
    }, {
        title: 'Priorities',
        path: '/priorities'
    }, {
        title: 'News',
        path: '/in-the-news'
    }, {
        title: 'Press',
        path: '/press-releases'
    }, {
        title: 'Contact',
        path: '/contact'
    }
]

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleScroll = () => {
      if(window.scrollY >= 120) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll); 
      return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <motion.header initial='initial' animate='animate' exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: 'linear' }}>
            <nav 
            // className={styles.navContainer}
            className={`${navbar
              ? styles.navContainer + " " +styles.scrolled
              : styles.navContainer}`}
            >
                <Link href="/" passHref>
                  <span>
                  <Logo className={styles.logo}/>
                  </span>
                </Link>
                <div
                    className={`${open
                    ? styles.hamburger + " open"
                    : styles.hamburger}`}
                    onClick={() => setOpen(!open)}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <ul
                    className={`${open
                    ? styles.list + " " + styles.open
                    : styles.list}`}
                    onClick={() => setOpen(false)}
                    style={{
                    right: open
                        ? "0px"
                        : "-100vw"
                }}>
                    {menu.map((item, index) => <li className={styles.listItem} key={index}>
                        <Link href={item.path} passHref>
                            <a className={`${router.pathname === item.path ? styles.active : ''}`}>
                                {item.title}
                            </a>
                        </Link>
                    </li>)}
                </ul>
                <a href="" className={styles.donate}>DONATE</a>
            </nav>
        </motion.header>
    )
}

export default Navbar
