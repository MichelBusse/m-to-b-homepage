import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import Script from "next/script";
import { BsInstagram } from "react-icons/bs";
import { SiGooglemybusiness } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div
          id="ProvenExpert_widgetbar_container"
          className={styles.ProvenExpert_widgetbar_container}
        ></div>
        <ul>
          <li>
            <Link href="/Impressum">
              <a>Impressum</a>
            </Link>
          </li>
          <li>
            <Link href="/Datenschutz">
              <a>Datenschutz</a>
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/m_to_b.software/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/M-to-B+Softwareentwicklung/@51.3278759,12.3797865,15.25z/data=!4m5!3m4!1s0x0:0x94f3a6c758cfcdc2!8m2!3d51.3417825!4d12.3936349"
              target="_blank"
              rel="noreferrer"
            >
              <SiGooglemybusiness />
            </a>
          </li>
        </ul>
      </footer>
      <Script
        type="text/javascript"
        src="//www.provenexpert.com/widget/bar_m-to-b-softwareentwicklung.js?style=black&amp;feedback=1"
        strategy="lazyOnload"
      />
    </>
  );
}
