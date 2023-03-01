import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import ServiceSection from "../components/ServiceSection";
import { useRef } from "react";
import ProjectsSection from "../components/ProjectsSection";
import CustomersSection from "../components/CustomersSection";
import CrossPlatformSection from "../components/CrossPlatformSection";
import PriceCalculatorSection from "../components/PriceCalculatorSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AppDevelopmentPage(props: Props) {
  const router = useRouter();

  const virtualRealityRef = useRef(null);
  const augmentedRealityRef = useRef(null);
  const agencyRef = useRef(null);

  let texts = {
    headline: <>App-Entwicklung & Agentur</>,
    text: (
      <>
        <p>
          Du suchst einen Partner für die Realisierung deiner App?
          <br />
          Du hast schon eine Idee, brauchst aber noch Unterstützung bei der
          Umsetzung?
        </p>
        <p>
          Der App-Entwicklungsprozess kann ohne eine klare Strategie schnell zum
          Zeit- und Kostenfresser werden.
        </p>
        <p>
          Nutze ein kostenloses Beratungsgespräch und informiere dich zu
          effizienten Strategien, um deine App zum Erfolg zu führen!
        </p>
      </>
    ),
    requestButtonText: "Kostenloses Beratungungsgespräch",
    title: "App-Entwicklung & -Agentur - M-to-B",
    description:
      "App-Entwicklung kann kompliziert sein - muss sie aber nicht! Realisiere deine App mit kosteneffizienten Strategien und erfolgreicher App-Entwicklung.",
    concept: "Strategie",
    development: "Implementierung",
    support: "Betreuung",
    strategyHeadline: "Die Lean-Prototype-Methode",
    strategyText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Viele App-Projekte scheitern durch schlechte Planung und überladene
          Funktionen. Bei Änderungen in den Anforderungen kann dann von der App
          Agentur nicht agil reagiert werden und das Budget wird schon vor den
          ersten messbaren Ergebnissen verschlungen.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Mit der Lean-Prototype-Methode minimierst du dieses Risiko. In der
          ersten Phase der App-Entwicklung erarbeiten wir gemeinsam die
          Hauptanforderungen und Kernkomponenten deiner App. Diese werden dann
          direkt mit einem ersten &quot;schmalen&quot; (lean) Prototypen
          entwickelt.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Dadurch hälst du bereits nach wenigen Wochen und mit minimalem Budget
          die erste Version deiner App in den Händen und kannst zeitnah
          anfangen, die Funktionen zu validieren und im Einsatz zu testen.
        </p>
      </>
    ),
    crossPlatformAlt: "Cross-Plattform",
    processHeadline: "Ablauf der App-Entwicklung",
    processText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Die App-Entwicklung in unserer Agentur besteht aus folgenden
          Schritten:
        </p>
        <ol>
          <li style={{ transitionDelay: "0.6s" }}>
            <b>Strategie:</b> Hier wird das Ziel deiner App festgelegt und ein
            Konzept erstellt, wie deine App ohne Umwege dorthin geführt werden
            kann.
          </li>
          <li style={{ transitionDelay: "0.9s" }}>
            <b>Design:</b> Das Layout deiner App wird erstellt. Dabei dreht sich
            alles um Nutzerfreundlichkeit und Wiedererkennungswert.
          </li>
          <li style={{ transitionDelay: "1.2s" }}>
            <b>Implementierung:</b> In diesem Schritt wird deine Idee Realität.
            Deine App erhält ihre Funktionen und wird zu einem fertigen Produkt.
          </li>
          <li style={{ transitionDelay: "1.5s" }}>
            <b>Rollout:</b> Sobald deine App fertig und auf Fehler getestet ist,
            wird sie im App-Store, oder auf den Plattformen deiner Wahl
            veröffentlicht.
          </li>
          <li style={{ transitionDelay: "1.8s" }}>
            <b>Betreuung:</b> Nach der Veröffentlichung ist es wichtig, die App
            regelmäßig zu aktualisieren und Probleme zu beheben. Mit uns hast du
            dafür auch nach der Veröffentlichung einen Ansprechpartner.
          </li>
        </ol>
      </>
    ),
    processAlt: "App-Entwicklungsprozess",
    connection: "Verbesserte Kundeninteraktion und -bindung",
    efficient: "Verbessert die Effizienz und Leistung",
    expand: "Neue Märkte erschließen",
    agencyHeadline: "Warum unsere App-Agentur?",
    agencyText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Wir setzen auf Kommunikation - In unseren Projekten haben wir
          festgestellt, dass der Erfolg deiner App-Entwicklung vor allem davon
          abhängt, dass wir als App-Agentur deine Ziele richtig verstehen und
          nicht nur blind entwickeln. Deshalb wirst du bei uns nicht nur während
          der Entwicklung, sondern vor allem bei der Planung deiner App von den
          richtigen Experten unterstützt.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Du hast die Möglichkeit für häufige Rücksprache und gemeinsames
          Brainstorming wobei wir dir helfen, die richtigen Schritte für dein
          Ziel zu unternehmen.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          In unserem unverbindlichem Erstgespräch kannst du deine Fragen
          beantworten lassen und bekommst einen Vorgeschmack auf die Arbeit mit
          unseren Experten.
        </p>
      </>
    ),
    agencyAlt: "Software Agentur",
  };

  if (router.locale == "en") {
    texts = {
      headline: <>App Development</>,
      text: (
        <>
          <p>
            Are you looking for a partner to realize your app?
            <br />
            Do you already have an idea, but still need help with the
            implementation?
          </p>
          <p>
            Without a clear strategy, the app development process can quickly
            become a waste of time and money.
          </p>
          <p>
            Use a free consultation and learn efficient strategies to make your
            app a success!
          </p>
        </>
      ),
      requestButtonText: "Schedule a free consultation!",
      title: "App Development - M-to-B",
      description:
        "App development can be complicated - but it doesn't have to be! Realize your app with cost-efficient strategies and successful app development.",
      concept: "Strategy",
      development: "Implementation",
      support: "Maintenance",
      strategyHeadline: "The Lean Prototype Method",
      strategyText: (
        <>
          <p>
            Many app projects fail due to poor planning and inflated functions.
            If the requirements change, it is then not possible to react agilely
            and the budget is gobbled up before the first measurable results.
          </p>
          <p style={{ transitionDelay: "0.3s" }}>
            With the lean prototype method you minimize this risk. In the
            first phase of app development, we work out the main requirements
            and core components of your app together. These are then immediately
            implemented in a lean prototype.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            As a result, after just a few weeks and with a minimal budget, you
            will have the first version of your app in your hands and can
            promptly start validating and testing the functions in use.
          </p>
        </>
      ),
      crossPlatformAlt: "Virtual Reality",
      processHeadline: "App Development Process",
      processText: (
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
      processAlt: "App Development Process",
      connection: "Improved customer interaction and engagement",
      efficient: "Improve Efficiency and Performance",
      expand: "Expansion into new markets",
      agencyHeadline: "Why our App Agency?",
      agencyText: (
        <>
          <p>
            We focus on communication - In our projects, we have found that the
            success of your app depends on us understanding your goal correctly
            instead of blindly executing the development. Therefore, you are
            supported not only during development, but above all in planning of
            your app by the right experts.
          </p>
          <p style={{ transitionDelay: "0.3s" }}>
            You have the opportunity for frequent consultation and brainstorming
            together, whereby we help you to take the right steps towards your
            goal.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            In our relaxed initial meeting, you can have your questions answered
            and get a foretaste of working with our experts.
          </p>
        </>
      ),
      agencyAlt: "Software Agency",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/App-Entwicklung"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Entwicklung"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        priceCalculatorButton={true}
        highlightImage={"/images/app-development/app-development-header.png"}
        highlightImageAlt="App Entwicklung"
        requestButtonText={texts.requestButtonText}
      />
      <main>
        <PriceCalculatorSection />
        <CustomShapeDivider flip={true} />
        <div className="scrollAnchor" id="main"></div>
        <ServiceSection
          key={"app1"}
          sectionRef={virtualRealityRef}
          headline={texts.strategyHeadline}
          text={texts.strategyText}
          image="/images/app-development/cross-platform.png"
          imageAlt={texts.crossPlatformAlt}
          typewriterKey={"app1"}
        />
        <ServiceSection
          key={"app2"}
          sectionRef={augmentedRealityRef}
          headline={texts.processHeadline}
          text={texts.processText}
          image="/images/app-development/app-development-process.png"
          imageAlt={texts.processAlt}
          typewriterKey={"app2"}
        />
        <CrossPlatformSection />
        <ServiceSection
          key={"app3"}
          sectionRef={agencyRef}
          headline={texts.agencyHeadline}
          text={texts.agencyText}
          image="/images/agency.png"
          imageAlt={texts.agencyAlt}
          typewriterKey={"app3"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
