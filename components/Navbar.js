import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import {useRouter} from 'next/router';
import Image from 'next/image'
import {useState} from "react"

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

    return (
        <div className={styles.container}>
            <Link href="/" passHref>
                <Image src="/img/logo.svg" alt="Logo" width={100} height={100}/>
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
                className={styles.list}
                onClick={() => setOpen(false)}
                style={{
                right: open
                    ? "0px"
                    : "-100vw"
            }}>
                {menu.map((item, index) => 
                      <li className={styles.listItem} key={index}>
                        <Link href={item.path} passHref>
                            <a
                                className={`${router.pathname === item.path
                                ? styles.active
                                : ''}`}>
                                {item.title}
                            </a>
                        </Link>
                      </li>
                  )}
            </ul>

        </div>
    )
}

export default Navbar
