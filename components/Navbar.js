import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router';
import {useState, useEffect} from "react"
import Logo from "../components/Logo";

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
                <a href="" className={styles.donate}>DONATE</a>
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
