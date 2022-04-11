import type { NextPage } from "next";
import CTASection from "../components/services/CTASection";
import Header from "../components/services/header";
import ServiceSection from "../components/services/ServiceSection";
import CircleImage from "../components/services/CircleImage";

const stringsDE: Record<string, string> = {
  headline: "Webdesign",
};

const WebdesignPage: NextPage = () => {
  return (
    <>
      <Header
        backgroundImage="/images/Webdesign/background.jpg"
        headline="Webdesign"
        slogan="Modern, Einzigartig, Effektiv"
      />
      <ServiceSection
        headline="Homepage-Design"
        text={[
          <p style={{ transitionDelay: "0.3s" }}>
            Wichtigstes Aushängeschild für jede Firma ist eine überzeugende
            Webpräsenz. Wir legen bei der Konzipierung und Erstellung von jeder
            Website Wert auf Nutzbarkeit und Überzeugungskraft. Eine gut
            durchdachte und übersichtliche Struktur ist dabei genauso wichtig,
            wie ein modernes und außergewöhnliches Design, um sich sowohl von
            der Konkurrenz, als auch von einfachen Baukastensystemen abzuheben.
          </p>,
          <p style={{ transitionDelay: "0.6s" }}>
            Durch eine individuelle Beratung, aufwändigen Designideen,
            Animationen und Funktionen sind wir Ihr Partner für besondere
            Anforderungen!
          </p>,
        ]}
        image={
          <CircleImage
            image="/images/Webdesign/vorbesprechung.png"
            imageAlt="Homepage-Design"
          />
        }
      />
      <ServiceSection
        headline="Web-Apps und Progressive Web-Apps"
        sectionStyle="blue"
        backgroundImage="/images/Webdesign/blueSection.jpg"
        text={[
          <p>
            Durch Web-Applikationen können komplexe Anwendungen realisiert
            werden. Web-Apps bieten sich an für z.B. einen umfangreichen
            Produkt-Konfigurator, ein virtuelles Wartezimmer oder andere
            individuelle Funktionen für den Nutzer. Wo die Einsatzbereiche in
            speziell Ihrem Fall liegen, kann ganz verschieden sein: ob im
            internen Bereich für die Mitarbeiter, oder auf der Kundenseite.
            <br />
            Lassen Sie sich von uns gerne kostenlos beraten und entdecken Sie
            vielseitige Einsatzmöglichkeiten.
          </p>,
        ]}
        image={
          <CircleImage
            image="/images/Webdesign/layout.png"
            imageAlt="Web-Apps und Progressive Web-Apps"
          />
        }
      />
      <ServiceSection
        headline="3D-Umgebungen"
        text={[
          <p style={{ transitionDelay: "0.3s" }}>
            Als Besonderheit bieten wir neben der eher klassischen Webgestaltung
            auch aufwändige 3-dimensionale Websites. Diese sind nicht nur
            besondere Hingucker, sondern bieten auch Möglichkeiten für eine
            Vielzahl von Anforderungen:
            <br />
            Haben Sie z.B. ein Produkt, das eindrucksvoll aber dennoch
            übersichtlich präsentiert werden soll?
            <br />
            Möchten Sie besondere Interaktionsmöglichkeiten mit den Inhalten
            Ihrer Seite bieten?
            <br />
            Gibt es besondere Technologien, die anders nur sehr schwierig oder
            unmöglich darzustellen sind?
            <br />
            <b>
              Dann könnte eine 3-dimensionale Website interessant für Sie sein!
            </b>
          </p>,
        ]}
        image={
          <CircleImage
            image="/images/Webdesign/programmierung.png"
            imageAlt="3D-Umgebungen"
          />
        }
      />
      <CTASection />
    </>
  );
};

export default WebdesignPage;
