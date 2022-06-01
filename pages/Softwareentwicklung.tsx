import type { NextPage } from "next";

import SoftwareHeader from "../components/services/SoftwareHeader";
import ServiceSection from "../components/services/ServiceSection";
import TechnologiesSection from "../components/services/TechnologiesSection";
import ContactSection from "../components/home/contactSection";
import CustomersSection from "../components/home/customersSection";
import AgileSection from "../components/services/AgileSection";
import CrossPlatformSection from "../components/services/CrossPlatformSection";
import Head from "next/head";
import { useRouter } from "next/router";

const DevelopmentPage: NextPage = () => {
  const router = useRouter();

  let texts = {
    title: <>Individuelle Softwareentwicklung aus Leipzig - M-to-B</>,
    description:
      "Wir entwickeln Software mit Kreativität und Begeisterung. Profitieren Sie von modernen Technologien, kompetenter Zusammenarbeit und neuen Lösungen!",
    alternate: (
      <link
        rel="alternate"
        hrefLang="en"
        href="https://m-to-b.com/Softwareentwicklung/en"
      />
    ),
    headlineSection1: "Individualsoftware",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          <strong>Individuell entwickelte Software</strong> lohnt sich überall,
          wo bestehende Programme die Anforderungen im Unternehmen nicht optimal
          abbilden können, oder wo völlig neue Ideen umgesetzt werden sollen.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Gemeinsam mit Ihnen erstellen wir{" "}
          <strong>maßgeschneiderte Softwarelösungen</strong>, welche alle Ziele
          treffen und Ihre Vorstellungen modern und effizienz umsetzen.
        </p>
        <p style={{ transitionDelay: "0.9s" }} key={3}>
          Von Mitarbeitermanagement, Projektmanagement, Inventarsystemen und
          Rechnungserstellung können nahezu alle Firmenprozesse digitalisiert
          werden.
        </p>
      </>
    ),
    headlineSection2: "Mobile App Entwicklung",
    textSection2: (
      <p style={{ transitionDelay: "0.3s" }} key={1}>
        Von der Idee bis zum Upload in den App Store führen wir Ihre App durch
        den Entwicklungsprozess und zum Erfolg. Mit Erfahrung in der
        Cross-Platform und nativen <strong>App-Entwicklung</strong> für Android
        und IOS können wir Ihre Anforderungen effizient und modern
        implementieren. Dabei legen wir genauso viel Wert auf verlässliche
        Funktionen wie auf ein überzeugendes und nutzbares UI-Design.
      </p>
    ),
    headlineSection3: "IT-Consulting",
    textSection3: (
      <p style={{ transitionDelay: "0.3s" }} key={1}>
        Wir bieten ausführliche <strong>IT-Beratung</strong> zu allen
        Möglichkeiten für Ihr Projekt. Dabei vergleichen wir für Sie
        verschiedene Lösungsmöglichkeiten und finden gemeinsam mit Ihnen die
        passende Technologie und Softwarearchitektur für Ihre Anwendung. Als
        modernes <strong>IT-Unternehmen</strong> ist es unser Ziel, die beste
        Strategie für Sie zu entwickeln und Zeit, Budget und Funktionalität
        optimal abzustimmen.
      </p>
    ),
  };

  if (router.locale == "en") {
    texts = {
      title: <>Individual software development from Leipzig - M-to-B</>,
      description:
        "We develop all kinds of software with creativity and passion. Take an advantage from new technologies, great teamwork and modern solutions",
      alternate: (
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/Softwareentwicklung/"
        />
      ),
      headlineSection1: "Individual software",
      textSection1: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            <strong>Individual software development</strong> provides value to
            all sectors, where excisting software cannot represent all the
            requirements or where there are completely new ideas and processes.
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            Together with you as the customer, we develop{" "}
            <strong>fully customized software</strong>, with the target of
            realizing your vision in a modern and efficient fashion.
          </p>
          <p style={{ transitionDelay: "0.9s" }} key={3}>
            The use cases are extremly versatile, from employee and project
            management, invoice systems, logistics and medical technologies to
            industrial processes.
          </p>
        </>
      ),
      headlineSection2: "Mobile app development",
      textSection2: (
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          We take up your ideas and escort them all the way through the
          development process and into the app store and to success. With our
          capabilities in cross platform as well as in nativ Android and IOS{" "}
          <strong>mobile development</strong>, we realize your requirements
          efficiently and truly modern. Therefore we take especially care of all
          functionalities as well as great design and usability.
        </p>
      ),
      headlineSection3: "IT-Consulting",
      textSection3: (
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          All of your problems and ideas can be further explored and discussed
          within a consulting We offer comprehensive advisory and guidancy to
          all of your ideas, projects and problems. Therefore we search for
          answers to all of your questions and compare possible solutions.
          Together, we work out the optimal strategy for your project and
          application. As a <strong>software agency</strong>, it is our goal to
          combine time, budget and functionality.
        </p>
      ),
    };
  }

  return (
    <>
      <Head>
        <title>{texts.title}</title>
        <meta name="description" content={texts.description} />
        {texts.alternate}
      </Head>
      <SoftwareHeader />
      <main>
        <section style={{ margin: "4em 0" }}>
          <ServiceSection
            key={1}
            headline={texts.headlineSection1}
            text={texts.textSection1}
            image="/images/Softwareentwicklung/pc.png"
            imageAlt={texts.headlineSection1}
            active={true}
          />
          <ServiceSection
            key={2}
            headline={texts.headlineSection2}
            text={texts.textSection2}
            image="/images/Softwareentwicklung/smartphone.png"
            imageAlt={texts.headlineSection2}
          />
        </section>
        <TechnologiesSection />
        <section
          style={{
            padding: "4em 0",
          }}
        >
          <ServiceSection
            key={3}
            headline={texts.headlineSection3}
            text={texts.textSection3}
            image="/images/Softwareentwicklung/consulting.svg"
            imageAlt={texts.headlineSection3}
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
