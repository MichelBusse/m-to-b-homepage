import styles from "../../styles/services/CrossPlatformSection.module.scss";
import { BsApple, BsWindows } from 'react-icons/bs';
import { DiAndroid } from 'react-icons/di';
import { FaLinux } from 'react-icons/fa';
import { SiMacos } from 'react-icons/si';


export default function CrossPlatformSection() {
  return (
    <>
      <section className={styles.crossPlatformSection}>
        <div className={styles.blueCurtain}></div>
        <div className={styles.text}>
          <h2>Cross-Platform Anwendungen</h2>
          <p>Erreichen Sie alle Nutzer</p>
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
