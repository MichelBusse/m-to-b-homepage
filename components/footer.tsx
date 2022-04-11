import styles from "../styles/Footer.module.scss"
import Link from 'next/link'

export default function Footer() {
    return <>
        <section className={styles.footer}>
            <ul>
                <li><Link href="/Impressum"><a>Impressum</a></Link></li>
                <li><Link href="/Datenschutz"><a>Datenschutz</a></Link></li>
            </ul>
        </section>
    </>
}