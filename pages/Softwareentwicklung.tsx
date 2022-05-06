import type { NextPage } from "next";

import SoftwareHeader from "../components/services/SoftwareHeader";
import ServiceSection from "../components/services/ServiceSection";
import TechnologiesSection from "../components/services/TechnologiesSection";
import ContactSection from "../components/home/contactSection";
import CustomersSection from "../components/home/customersSection";
import AgileSection from "../components/services/AgileSection";
import CrossPlatformSection from "../components/services/CrossPlatformSection";
import Head from "next/head";

const DevelopmentPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Individuelle Softwareentwicklung aus Leipzig - M-to-B</title>
        <meta
          name="description"
          content="Wir entwickeln Software mit Kreativität und Erfahrung. Profitieren Sie von modernen Technologien, kompetenter Zusammenarbeit und neuen Lösungen!"
        />
      </Head>
      <SoftwareHeader />
      <main>
        <section style={{ margin: "4em 0" }}>
          <ServiceSection
            headline="Individualsoftware"
            text={[
              <p style={{ transitionDelay: "0.3s" }} key={1}>
                Individuell entwickelte Software lohnt sich überall, wo
                bestehende Programme die Anforderungen und Firmenprozesse nicht
                optimal abbilden können, oder wo völlig neue Ideen umgesetzt
                werden sollen.
              </p>,
              <p style={{ transitionDelay: "0.6s" }} key={2}>
                Gemeinsam mit Ihnen erstellen wir maßgeschneiderte Lösungen,
                welche alle Ziele treffen und Ihre Vorstellungen modern und
                effizienz umsetzen.
              </p>,
              <p style={{ transitionDelay: "0.9s" }} key={3}>
                Von Mitarbeitermanagement, Projektmanagement, Inventarsystemen
                und Rechnungserstellung können nahezu alle Firmenprozesse
                digitalisiert werden.
              </p>,
            ]}
            image="/images/Softwareentwicklung/pc.png"
            imageAlt="Individualsoftware"
          />
          <ServiceSection
            headline="App Entwicklung"
            text={[
              <p style={{ transitionDelay: "0.3s" }} key={1}>
                Von der Idee bis zum Upload in den App Store führen wir Ihre App
                durch den Entwicklungsprozess und zum Erfolg. Mit Erfahrung in
                der Cross-Platform und nativen Entwicklung für Android und IOS
                können wir Ihre Anforderungen effizient und modern
                implementieren. Dabei legen wir auf verlässliche Funktionen
                genauso viel Wert wie auf ein überzeugendes und nutzbares
                UI-Design.
              </p>,
            ]}
            image="/images/Softwareentwicklung/smartphone.png"
            imageAlt="Mobile App-Entwicklung"
          />
        </section>
        <TechnologiesSection />
        <section
          style={{
            padding: "4em 0",
          }}
        >
          <ServiceSection
            headline="IT Beratung"
            text={[
              <p style={{ transitionDelay: "0.3s" }} key={1}>
                Wir beraten Sie ausführlich zu allen Möglichkeiten für Ihr
                Projekt. Wir vergleichen für Sie verschiedene
                Lösungsmöglichkeiten und finden gemeinsam mit Ihnen die passende
                Technologie und Softwarearchitektur für Ihre Anwendung. Als
                modernes IT-Unternehmen ist es unser Ziel, die beste Strategie
                für Sie zu entwickeln und Zeit, Budget und Funktionalität
                optimal abzustimmen.
              </p>,
            ]}
            image="/images/Softwareentwicklung/consulting.svg"
            imageAlt="IT Beratung - IT Consulting"
          />
        </section>
        <CrossPlatformSection />
        <AgileSection />
        <CustomersSection />
        <ContactSection />
      </main>
    </>
  );
};

export default DevelopmentPage;
