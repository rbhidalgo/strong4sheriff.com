import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router';
import {useState, useEffect} from "react"
import Logo from "./Logo";

const menu = [
    {
        title: 'Acerca',
        path: '/es/about'
    }, {
        title: 'Priorities',
        path: '/es/priorities'
    }, {
        title: 'Noticias',
        path: '/es/in-the-news'
    }, {
        title: 'Press',
        path: '/es/press-releases'
    }, {
        title: 'Contact',
        path: '/es/contact'
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

    return (
        <header>
            <nav
                className={`${navbar
                ? styles.navContainer + " " + styles.scrolled
                : styles.navContainer}`}>
                <Link href="/" passHref>
                    <span>
                        <Logo className={styles.logo}/>
                    </span>
                </Link>
                <ul
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
                </ul>
                <div className={`${open
                    ? styles.social + " " + styles.open
                    : styles.social}`}>
                    <a
                        href="https://www.facebook.com/EricStrongforLACountySheriff2022"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-fb.png" width={45} height={43} alt=""/>
                    </a>
                    <a
                        href="https://twitter.com/Strong4Sheriff"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-twitter.png" width={45} height={43} alt=""/>
                    </a>
                    <a
                        href="https://www.instagram.com/strong4sheriff/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-ig.png" width={45} height={43} alt=""/>
                    </a>
                </div>
                <a href="https://secure.actblue.com/donate/ericstrong-digital_website" target="_blank" rel="noreferrer" className={styles.donate}>DONATE</a>
                <Link href={router.pathname === "/es"
                                ? "/"
                                : '/es'} passHref>
                            <a
                                className={styles.lang}>
                                {router.pathname === "/es"
                                ? "ENGLISH"
                                : 'ESPAÑOL'}
                            </a>
                        </Link>
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
