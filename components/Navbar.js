import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import Image from 'next/image'
import {useState} from "react"

const Navbar = () => {

    const [open,
        setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <Link href="/" passHref>
            <Image src="/img/logo.svg" alt="Logo" width={100} height={100} />
            </Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/priorities">Priorities</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/in-the-news">News</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/press-releases">Press</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
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
                onClick={() => setOpen(false)}
                className={styles.menu}
                style={{
                right: open
                    ? "0px"
                    : "-100vw"
            }}>
                <li className={styles.listItem}>
                    <Link href="/products/design">Design</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/development">Development</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/production">Production</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/photography">Photography</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
