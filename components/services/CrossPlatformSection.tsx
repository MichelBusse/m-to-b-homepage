import styles from "../../styles/services/CrossPlatformSection.module.scss";
import { BsApple, BsWindows } from 'react-icons/bs';
import { DiAndroid } from 'react-icons/di';
import { FaLinux } from 'react-icons/fa';
import { SiMacos } from 'react-icons/si';
import { useRouter } from "next/router";


export default function CrossPlatformSection() {
  const router = useRouter();

  let texts = {
    headline: "Cross-Platform Anwendungen",
    subHeadline: "Erreichen Sie alle Nutzer"
  };

  if (router.locale == "en") {
    texts = {
      headline: "Cross-Platform Applications",
      subHeadline: "Target all customers"
    };
  }
  return (
    <>
      <section className={styles.crossPlatformSection}>
        <div className={styles.blueCurtain}></div>
        <div className={styles.text}>
          <h2>{texts.headline}</h2>
          <p>{texts.subHeadline}</p>
        </div>
        <div className={styles.iconWrapper}>
          <BsWindows />
          <SiMacos />
          <FaLinux />
          <BsApple />
          <DiAndroid />
        </div>
      </section>
    </>
  );
}
