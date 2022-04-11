import serviceSectionStyles from "../../styles/services/ServiceSection.module.scss";
import styles from "../../styles/services/CTASection.module.scss";

export default function CTASection() {
  return (
    <>
      <section
        className={
          styles.ctaSection + " " + serviceSectionStyles.serviceSection
        }
        style={{
          backgroundImage: "url('/images/ctaSection.jpg')",
        }}
      >
        <div className={serviceSectionStyles.blueCurtain}></div>
        <div className={serviceSectionStyles.flexCell}>
          <h2>Interessiert?</h2>
          <a href="/#contact">
            <button>ANGEBOT ERSTELLEN LASSEN</button>
          </a>
        </div>
      </section>
    </>
  );
}
