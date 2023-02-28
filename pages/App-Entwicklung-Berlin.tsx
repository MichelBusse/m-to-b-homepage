import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import ProjectsSection from "../components/ProjectsSection";
import CustomersSection from "../components/CustomersSection";
import { useRef } from "react";
import ServiceSection from "../components/ServiceSection";
import PriceCalculatorSection from "../components/PriceCalculatorSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AppDevelopmentBerlinPage(props: Props) {
  const router = useRouter();

  const innovationRef = useRef(null);
  const agileRef = useRef(null);

  let texts = {
    headline: <>App-Entwicklung für Berlin</>,
    text: (
      <>
        <p>Auf der Suche nach einem Partner für App-Entwicklung in Berlin?</p>
        <p>
          Der App-Entwicklungsprozess kann ohne eine klare Strategie schnell zum
          Zeit- und Kostenfresser werden.
        </p>
        <p>
          Nutze ein kostenloses Beratungsgespräch und informiere dich zu
          effizienten Strategien um deine App zum Erfolg zu führen!
        </p>
      </>
    ),
    requestButtonText: "Kostenloses Beratungungsgespräch",
    title: "App Entwicklung für Berlin - M-to-B",
    description:
      "Wir entwickeln Apps für Berliner Unternehmen. Nutze unsere kostenlose Beratung und lass uns deine App verwirklichen!",
    headlineSection1: "Innovation für Berlin",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Wir entwickeln Apps für Berliner Unternehmen! Ob Start-Up oder
          Dax-Unternehmen, wir möchten bestmögliche Ergebnisse für dein Projekt.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Ob iOS, Android oder Web, wir erstellen deine App auf dem neuesten
          Stand der Technik. Lass dich von uns überzeugen und realisiere deine
          App.
        </p>
      </>
    ),
    headlineSection2: "Ablauf der App-Entwicklung",
    textSection2: (
      <>
        <p>Die App-Entwicklung besteht aus folgenden Schritten:</p>
        <ol>
          <li style={{ transitionDelay: "0.3s" }}>
            <b>Strategie:</b> Hier wird das Ziel deiner App festgelegt und ein
            Konzept erstellt, wie deine App ohne Umwege dorthin geführt werden
            kann.
          </li>
          <li style={{ transitionDelay: "0.6s" }}>
            <b>Design:</b> Das Layout deiner App wird erstellt. Dabei dreht sich
            alles um Nutzerfreundlichkeit und Wiedererkennungswert.
          </li>
          <li style={{ transitionDelay: "0.9s" }}>
            <b>Implementierung:</b> In diesem Schritt wird deine Idee Realität.
            Deine App erhält ihre Funktionen und wird zu einem fertigen Produkt.
          </li>
          <li style={{ transitionDelay: "1.2s" }}>
            <b>Rollout:</b> Sobald deine App fertig und auf Fehler getestet ist,
            wird sie im App-Store, oder auf den Plattformen deiner Wahl
            veröffentlicht.
          </li>
          <li style={{ transitionDelay: "1.5s" }}>
            <b>Betreuung:</b> Nach der Veröffentlichung ist es wichtig, die App
            regelmäßig zu aktualisieren und Probleme zu beheben. Mit uns hast du
            dafür auch nach der Veröffentlichung einen Ansprechpartner.
          </li>
        </ol>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      headline: <>App Development for Berlin</>,
      text: (
        <>
          <p>
            Modern apps from your region - we realize your ideas and develop
            your app.
          </p>
          <p>Take advantage of our advisory and send us your request.</p>
        </>
      ),
      requestButtonText: "Free consultation",
      title: "App Development for Berlin - M-to-B",
      description:
        "Use our free consultation and let us make your app a reality! We develop apps for enterprises and start ups from Berlin.",
      headlineSection1: "Innovation for Berlin",
      textSection1: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            We develop apps for Berlin companies! Whether start-up or DAX
            company, we want the best possible results for your project.{" "}
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            Whether iOS, Android or web, we create your app using the latest
            technology. Let us convince you and realize your app.
          </p>
        </>
      ),
      headlineSection2: "App Development Process",
      textSection2: (
        <>
          <p>The app development typically involves the following steps:</p>
          <ol>
            <li style={{ transitionDelay: "0.3s" }}>
              Strategy: Here the goal of your app is determined and a concept is
              created as to how your app can be led there most efficiently.
            </li>
            <li style={{ transitionDelay: "0.6s" }}>
              Design: The layout of your app is created. Everything revolves
              around user-friendliness and recognition value.
            </li>
            <li style={{ transitionDelay: "0.9s" }}>
              Implementation: In this step, your idea becomes reality. Your app
              gets its functions and becomes a finished product.
            </li>
            <li style={{ transitionDelay: "1.2s" }}>
              Release: Once your app is complete and bug tested, it will be
              released to the app store or platforms of your choice.
            </li>
            <li style={{ transitionDelay: "1.5s" }}>
              Maintenance: After release, it is important to regularly update
              the app and fix problems. With us you have a contact person for
              this even after the publication.
            </li>
          </ol>
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
        requestButtonText={texts.requestButtonText}
      />
      <main>
        <PriceCalculatorSection />
        <CustomShapeDivider flip={true} />
        <ServiceSection
          key={"berlin1"}
          sectionRef={innovationRef}
          headline={texts.headlineSection1}
          text={texts.textSection1}
          image="/images/app-development/innovation.png"
          imageAlt={texts.headlineSection1}
          typewriterKey={"berlin1"}
        />
        <ServiceSection
          key={"berlin2"}
          sectionRef={agileRef}
          headline={texts.headlineSection2}
          text={texts.textSection2}
          image="/images/app-development/cross-platform.png"
          imageAlt={texts.headlineSection2}
          typewriterKey={"berlin2"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
