import styles from "../styles/Footer.module.scss"
import Image from "next/image"
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carS}>
                <h1 className={styles.title}>Eric Strong</h1>
                <h1 className={styles.linkTitle}>
                    {/* <span>Work with us</span> */}
                    {/* <Image src="/img/link.png" alt="" width="40px" height="50px"/> */}
                </h1>
            </div>
            <div className={styles.carS}>
                <div className={styles.cardItem}>
                    132 Main St
                    <br/>
                    USA
                </div>
            </div>
            <div className={styles.carS}>
                <div className={styles.cardItem}>
                    132 Main St
                    <br/>
                    USA
                </div>
            </div>
        </div>
    )
}

export default Footer