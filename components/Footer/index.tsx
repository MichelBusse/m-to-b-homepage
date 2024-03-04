import styles from "./styles.module.scss";
import Link from "next/link";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGooglemybusiness } from "react-icons/si";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  let texts = {
    imprint: "Impressum",
    privacy: "Datenschutz",
  };

  if (router.locale == "en") {
    texts = {
      imprint: "Imprint",
      privacy: "Privacy Policy",
    };
  }
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <li>
            <Link href="/Impressum">
              {texts.imprint}
            </Link>
          </li>
          <li>
            <Link href="/Datenschutz">
              {texts.privacy}
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
          <li>
            <a
              href="https://www.linkedin.com/company/m-to-b-software/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://app-entwickler-verzeichnis.de/programmierer/Kirchberg/4384-"
              title="App-Programmierung"
              style={{ border: "none" }}
            >
              <Image
                src="https://app-entwickler-verzeichnis.de/images/corporate/aev-mitglied-button3.png"
                alt="app-programmierung"
                width="70"
                height="70"
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
