import { useRouter } from "next/router";
import styles from "../../styles/home/ValuesSection.module.scss";

const ValuesSection = () => {
  const router = useRouter();

  let texts = {
    headline1: "Persönlich",
    text1: "Mit persönlichem Ansprechpartner und einem transparenten Projektablauf bleiben Sie immer auf dem aktuellen Entwicklungsstand.",
    headline2: "Modern",
    text2: "Wir suchen für jedes Projekt individuell die optimalen Technologien und programmieren agil, effizient und zukunftsorientiert.",
    headline3: "Leidenschaftlich",
    text3: "Jede Software-Entwicklung begeistert uns auf's Neue und als App-Agentur freut es uns, die Vorstellungen unserer Kunden zu realisieren.",
  };
  let phrases = ["Software", "Apps", "Zukunft"];

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
