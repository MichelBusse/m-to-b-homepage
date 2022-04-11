import styles from "../styles/Footer.module.scss"

export default function Footer() {
    return <>
        <section className={styles.footer}>
            <ul>
                <li><a href="/Impressum">Impressum</a></li>
                <li><a href="/Datenschutz">Datenschutz</a></li>
            </ul>
        </section>
    </>
}