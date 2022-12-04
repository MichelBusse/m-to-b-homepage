import styles from "../../styles/home/ValuesSection.module.scss";

const ValuesSection = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.card}>
        <h3>Persönlich</h3>
        <p>
          Mit persönlichem Ansprechpartner und einem transparenten Projektablauf
          bist du immer auf dem aktuellen Entwicklungsstand.
        </p>
      </div>
      <div className={styles.card}>
        <h3>Modern</h3>
        <p>
          Wir suchen für jedes Projekt individuell die optimalen Technologien
          und programmieren agil, effizient und zukunftsorientiert.
        </p>
      </div>
      <div className={styles.card}>
        <h3>Mit Leidenschaft</h3>
        <p>
          Jede Software-Entwicklung begeistert uns auf's Neue und als App-Agentur
          freut es uns, die Vorstellungen unserer Kunden zu realisieren.
        </p>
      </div>
    </section>
  );
};

export default ValuesSection;
