import { useRouter } from "next/router";
import ServiceSection from "../services/ServiceSection";

export default function ServicesSection(props) {
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
    headlineSection1: "App-Entwicklung",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Von der Idee bis zum Upload in den App Store führen wir deine App
          durch den Entwicklungsprozess. Mit Erfahrung in der Cross-Platform und
          nativen <strong>App-Entwicklung</strong> können wir deine
          Anforderungen effizient und modern implementieren. Dabei legen wir
          genauso viel Wert auf verlässliche Funktionen wie auf ein
          überzeugendes und nutzbares UI-Design.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Wir setzen auf einen transparenten Projektablauf mit persönlichen
          Ansprechpartnern und enger Beteiligung. So stellen wir sicher, dass
          deine Anforderungen auch getroffen werden und alle Ressourcen
          effizient genutzt werden.
        </p>
      </>
    ),
    headlineSection2: "Individualsoftware",
    textSection2: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          <strong>Individuelle Software</strong> lohnt sich überall, wo
          existierende Anwendungen die Anforderungen im Unternehmen nicht
          optimal abbilden können, oder wo völlig neue Ideen umgesetzt werden
          sollen.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Gemeinsam mit dir erstellen wir dafür{" "}
          <strong>maßgeschneiderte Softwarelösungen</strong>, die dann deine
          Anforderungen umsetzung bzw. den Firmenprozess optimal abbilden.
        </p>
        <p style={{ transitionDelay: "0.9s" }} key={3}>
          Von Mitarbeitermanagement, Projektmanagement, Inventarsystemen oder
          Kundenkommunikation können fast alle Firmenprozesse digitalisiert
          werden.
        </p>
      </>
    ),
    headlineSection3: "IT-Consulting",
    textSection3: (
      <p style={{ transitionDelay: "0.3s" }} key={1}>
        Wir bieten ausführliche <strong>IT-Beratung</strong> zu allen
        Möglichkeiten für dein Projekt. Dabei vergleichen wir verschiedene
        Lösungsmöglichkeiten und finden gemeinsam die passende Technologie und
        Softwarearchitektur für dein Einsatzgebiet. Als
        <strong>App-Entwicklungs-StartUp</strong> ist es unser Ziel, die beste
        Strategie für dich zu entwickeln und Zeit, Budget und Funktionalität
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
      headlineSection1: "Mobile app development",
      textSection1: (
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          We take up your ideas and escort them all the way through the
          development process and into the app store and to success. With our
          capabilities in cross platform as well as in nativ Android and IOS{" "}
          <strong>mobile development</strong>, we realize your requirements
          efficiently and truly modern. Therefore we take especially care of all
          functionalities as well as great design and usability.
        </p>
      ),
      headlineSection2: "Individual software",
      textSection2: (
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
      <div className="scrollAnchor" id="services"></div>
      <section style={{ margin: "4em 0" }} ref={props.anchorRefs.servicesRef}>
        <ServiceSection
          key={1}
          headline={texts.headlineSection1}
          text={texts.textSection1}
          image="/images/Softwareentwicklung/smartphone.png"
          imageAlt={texts.headlineSection1}
        />
        <ServiceSection
          key={2}
          headline={texts.headlineSection2}
          text={texts.textSection2}
          image="/images/Softwareentwicklung/pc.png"
          imageAlt={texts.headlineSection2}
        />
      </section>
    </>
  );
}
