import AndroidIcon from "../Icons/AndroidIcon";
import DesktopIcon from "../Icons/DesktopIcon";
import WWWIcon from "../Icons/WWWIcon";
import IOSIcon from "../Icons/iOSIcon";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function CrossPlatformSection() {
  const router = useRouter();

  let texts = {
    headline: "Cross-Platform Apps",
    subHeadline: "Mit einer App alle Nutzer erreichen",
  };

  if (router.locale == "en") {
    texts = {
      headline: "Cross Platform Apps",
      subHeadline: "Target all customers with one app",
    };
  }
  return (
    <>
      <section className={styles.crossPlatformSection}>
        <div className={styles.text}>
          <h2>{texts.headline}</h2>
          <p>{texts.subHeadline}</p>
        </div>
        <div className={styles.iconWrapper}>
          <AndroidIcon className={styles.icon} />
          <IOSIcon className={styles.icon} />
          <WWWIcon className={styles.icon} />
          <DesktopIcon className={styles.icon} />
        </div>
      </section>
    </>
  );
}
