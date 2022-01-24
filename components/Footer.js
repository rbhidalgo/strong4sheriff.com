import styles from "../styles/Footer.module.scss"
import Image from "next/image"
import Link from 'next/link'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.social}>
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
                    <a
                        href="https://www.youtube.com/channel/UC5_3NIBfsWbzPGOr1M4o1Ag"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-yt.png" width={58} height={43} alt=""/>
                    </a>
                </div>
                <p>
                    6709 La Tijera Blvd. #555
                    <br/>
                    Los Angeles, CA 90045
                </p>
                <p className={styles.small}>Paid for by the Committee for Eric Strong for L.A.
                    County Sheriff 2022 | FPPC ID#1438273</p>
            </div>
        </section>
    )
}

export default Footer