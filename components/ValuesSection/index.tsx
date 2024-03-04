import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const ValuesSection = () => {
  const router = useRouter();

  let texts = {
    headline1: "Innovativ",
    text1: "Wir suchen für jedes Projekt die besten Technologien und programmieren agil, effizient und erfolgsorientiert.",
    headline2: "Persönlich",
    text2: "Mit persönlichem Ansprechpartner und einem transparenten Projektablauf bleibst du immer auf dem aktuellen Entwicklungsstand.",
    headline3: "Leidenschaftlich",
    text3: "Jede Entwicklung begeistert uns auf's Neue und als App-Agentur freut es uns, deine Vision Wirklichkeit werden zu lassen.",
  };

  if (router.locale == "en") {
    texts = {
      headline1: "Personal",
      text1: "Get your pesonal contact person and benefit from a transparent project development to be always up to date and involved.",
      headline2: "Modern",
      text2: "We research the best technologies for each project individually and develop our apps agile, efficient and future oriented.",
      headline3: "Passionate",
      text3: "Because software development is not only our profession but also our passion. We enjoy to realize the requirements of our customers",
    };
  }

  return (
    <section className={styles.valuesSection}>
      <div className={styles.card}>
        <h3>{texts.headline1}</h3>
        <p>
          {texts.text1}
        </p>
      </div>
      <div className={styles.card}>
        <h3>{texts.headline2}</h3>
        <p>
          {texts.text2}
        </p>
      </div>
      <div className={styles.card}>
        <h3>{texts.headline3}</h3>
        <p>
          {texts.text3}
        </p>
      </div>
    </section>
  );
};

export default ValuesSection;
