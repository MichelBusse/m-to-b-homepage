import styles from "../styles/CrossPlatformSection.module.scss";
import { useRouter } from "next/router";
import WWWIcon from "./icons/WWWIcon";
import IOSIcon from "./icons/iOSIcon";
import AndroidIcon from "./icons/AndroidIcon";
import DesktopIcon from "./icons/DesktopIcon";

export default function CrossPlatformSection() {
  const router = useRouter();

  let texts = {
    headline: "App Plattformen",
    subHeadline: "Mit Ihrer App alle Nutzer erreichen",
  };

  if (router.locale == "en") {
    texts = {
      headline: "App Platforms",
      subHeadline: "Target all customers",
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
