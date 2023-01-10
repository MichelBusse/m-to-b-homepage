import Header from "../components/home/header";
import ContactSection from "../components/home/contactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import ValuesSection from "../components/home/valuesSection";
import { useRouter } from "next/router";
import ProjectsSection from "../components/home/projectsSection";
import CustomersSection from "../components/home/customersSection";
import { useRef } from "react";
import ServiceSection from "../components/services/ServiceSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  const innovationRef = useRef(null);
  const agileRef = useRef(null);

  let texts = {
    headline: <>App-Entwicklung für Berlin</>,
    text: (
      <>
        <p>
          Professionelle App-Entwicklung für Unternehmen und Endverbraucher -
          Wir realisieren Ihre Vorstellungen und entwickeln Ihre App.
        </p>
        <p>
          Nutzen Sie unsere kostenlose Beratung und senden Sie uns jetzt eine
          Anfrage!
        </p>
      </>
    ),
    title: "App Entwicklung für Berlin - M-to-B",
    description:
      "Wir entwickeln Apps für Berliner Unternehmen. Nutzen Sie unsere kostenlose Beratung und lassen Sie uns Ihre App verwirklichen!",
    headlineSection1: "Innovation für Berlin",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Wir entwickeln Apps für Berliner Unternehmen! Ob StartUp oder
          Dax-Unternehmen, wir möchten bestmögliche Ergebnisse für Ihr
          Projekt schaffen.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Ob iOS, Android oder Web, wir entwickeln Ihre App auf dem neuesten Stand
          der Technik. Lassen Sie sich von uns überzeugen und schaffen Sie
          moderne Lösungen.
        </p>
      </>
    ),
    headlineSection2: "App-Entwicklungs-Prozess",
    textSection2: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Ihre App beginnt den Entwicklungsprozess mit dem Konzept und der
          Planung. Gemeinsam mit Ihnen entwickeln wir die beste Strategie für
          Ihre Anforderungen und wählen die geeignetsten Technologien.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Anschließend beginnt der Designprozess, bei welchem Sie direkt Ihre
          Vorstellungen einbringen und am Ende von unseren App-Designern ein
          UI-Design als Vorlage erhalten.
        </p>
        <p style={{ transitionDelay: "0.9s" }} key={3}>
          Die eigentliche Entwicklung läuft dann transparent und personalisiert
          ab. Sie bleiben immer up-to-date mit dem aktuellen Fortschritt Ihrer
          App und verlieren so nie den Überblick.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      headline: <>App Development from Leipzig</>,
      text: (
        <>
          <p>
            Modern apps from your region - we realize your ideas and develop
            your app.
          </p>
          <p>Take advantage of our advisory and send us your request.</p>
        </>
      ),
      title: "App Development for Berlin - M-to-B",
      description:
        "Use our free consultation and let us make your app a reality! We develop apps for enterprises and start ups from Berlin.",
      headlineSection1: "Innovation for Berlin",
      textSection1: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            As an app agency from Leipzig, it is our goal to bring the latest
            technologies into our region. Whether they are mobile apps for
            Android and iOS or virtual reality systems - we always look forward
            to new software challenges.
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            We are also developing new technologies for the University of
            Leipzig and their Medical Center and have already been able to
            create new augmented reality systems for teaching and surgery.
          </p>
        </>
      ),
      headlineSection2: "App Development Process",
      textSection2: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            Your app starts the development process with the concept and
            planning. Together with you, we develop the best strategy for your
            requirements and select the most suitable technologies.
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            Then the design process begins, in which you directly contribute
            your ideas and at the end receive a UI design as a template from our
            app designers.
          </p>
          <p style={{ transitionDelay: "0.9s" }} key={3}>
            The actual development then runs transparently and personalized. You
            always stay up to date with the current progress of your app and
            never lose track.
          </p>
        </>
      ),
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/App-Entwicklung-Berlin"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Entwicklung-Berlin"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        priceCalculatorButton={true}
        highlightImage={"/images/app-development/app-development-header.png"}
        highlightImageAlt="App Entwicklung Berlin"
      />
      <main>
        <ValuesSection />
        <CustomShapeDivider flip={true} />
        <ServiceSection
          key={1}
          sectionRef={innovationRef}
          headline={texts.headlineSection1}
          text={texts.textSection1}
          image="/images/app-development/innovation.png"
          imageAlt={texts.headlineSection1}
          typewriterKey={"1"}
        />
        <ServiceSection
          key={2}
          sectionRef={agileRef}
          headline={texts.headlineSection2}
          text={texts.textSection2}
          image="/images/app-development/cross-platform.png"
          imageAlt={texts.headlineSection2}
          typewriterKey={"2"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
