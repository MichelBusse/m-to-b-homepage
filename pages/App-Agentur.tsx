import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import ServiceSection from "../components/ServiceSection";
import { useRef } from "react";
import CustomersSection from "../components/CustomersSection";
import SmallTechnologiesSection, {
  logos,
} from "../components/SmallTechnologiesSection";
import JourneySection from "../components/JourneySection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AppDevelopmentPage(props: Props) {
  const router = useRouter();

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  let texts = {
    headline: (
      <>
        Abenteuer: App-Entwicklung
        <br />- Deine App-Agentur
      </>
    ),
    text: (
      <>
        <p>
          Du hast die Idee für eine App und suchst noch nach Unterstützung für
          die Umsetzung?
        </p>
        <p>
          Bei der App-Entwicklung musst du dich verschiedenen Herausforderungen
          stellen. Ohne einen guten Plan kommst du dabei leicht vom Weg ab und
          verlierst Zeit und Budget.
        </p>
        <p>
          Wir begleiten dich durch deine Entwicklungs-Reise und führen deine App
          gemeinsam mit dir und der richtigen Strategie sicher zum Ziel!
        </p>
      </>
    ),
    requestButtonText: "Starte die Reise",
    title: "Abenteuer: App-Entwicklung - Deine App-Agentur M-to-B",
    description:
      "App-Entwicklung kann kompliziert sein - muss sie aber nicht! Realisiere deine App mit kosteneffizienten Strategien und erfolgreicher App-Entwicklung.",
    concept: "Strategie",
    development: "Implementierung",
    support: "Betreuung",
    headlineSection1: "01 Die Strategie",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Viele App-Projekte scheitern durch schlechte Planung und unnötige
          Funktionen. Bei Änderungen in den Anforderungen kann von der
          App-Agentur nicht reagiert werden und das Budget wird vor den ersten
          messbaren Ergebnissen verschlungen.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Mit der Lean-Prototype-Methode helfen wir dir, dieses Risiko zu
          minimieren. In der ersten Phase erarbeiten wir dafür gemeinsam und
          persönlich die Hauptanforderungen und Kernkomponenten für deine App
          und definieren klare und messbare Ziele.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Anschließend erhältst du einen verständlichen Entwicklungsplan und ein
          klares Konzept deiner App. Somit bist du von Anfang an eng beteiligt
          und behältst einen Überblick über den Stand der Entwicklung.
        </p>
      </>
    ),
    headlineSection2: "02 Die Umsetzung",
    textSection2: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Mit den Anforderungen deiner App kann nun das Layout erstellt werden.
          Dabei liegt unser Fokus auf einer hohen Nutzerfreundlichkeit und den
          Zielen aus dem Konzept. Während dem Design halten wir dich immer auf
          dem aktuellen Stand und du kannst zu jedem Schritt deine Rückmeldung
          geben.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Bei der Programmierung werden die Kernkomponenten zunächst in einem
          ersten App-Prototyp implementiert. Mit diesem hältst du bereits nach
          wenigen Wochen die erste Version deiner App in den Händen und kannst
          zeitnah anfangen, die Funktionen zu validieren und einzusetzen.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Der App-Prototyp wird dann mit allen ausstehenden Funktionen erweitert
          und Schritt für Schritt zur fertigen App ausgebaut. Da jede Funktion
          zeitnah von dir getestet und genutzt wird, können Fehler in der
          Kommunikation oder Umsetzung früh erkannt und schließlich vermieden
          werden.
        </p>
      </>
    ),
    headlineSection3: "03 Der Release",
    textSection3: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Der Höhepunkt von jeder App-Entwicklung ist der Release. Ob bei
          internen oder öffentlichen Apps, wir begleiten dich durch die Gefahren
          der Veröffentlichung auf den entsprechenden Plattformen und beraten
          dich zu den geeignetsten Werbestrategien.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Schließlich ist der App-Release der Moment, in dem deine Ideen
          Wirklichkeit werden und du dein fertiges Produkt in deinen
          (virtuellen) Händen hältst.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Doch deine Reise endet hier noch nicht: Auch bei allen Aufgaben nach
          der Veröffentlichung bleiben wir dein Ansprechpartner und helfen dir,
          alle Bugs zu beheben und deine zukünftigen Ideen umzusetzen.
        </p>
      </>
    ),
    headlineSection4: "Wer sind wir?",
    textSection4: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          M-to-B Software wurde 2020 von Michel Busse neben dem Studium
          gegründet, mit dem Ziel, gemeinsam neue Ideen zu versuchen und
          sinnvolle Software zu entwickeln.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Die Reise begann mit der Entwicklung von Websites für verschiedene
          kleine und große Unternehmen. Mit zunehmender Erfahrung und auf
          Nachfrage unserer Kunden setzten wir zunehmend auch personalisierte
          ERP-Software und sogar innovative AR-Apps um.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Schließlich haben wir mit der App-Entwicklung unsere Leidenschaft
          gefunden und freuen uns immer wieder unseren Kunden dabei zu helfen,
          ihre Apps zu verwirklichen. Unser Geheimtipp für eine erfolgreiche
          Entwicklung ist ein enges Verhältnis zu unseren Kunden. Wir wollen
          ihre Ziele verstehen und so bei der Entwicklung mit Herzblut dahinter
          stehen.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      headline: <>App Agency & Development</>,
      text: (
        <>
          <p>
            Do you have an idea for an app and are you still looking for
            guidance to implement it?
          </p>
          <p>
            When developing an app, you have to face various challenges. Without
            a good plan, it&apos;s easy to get sidetracked and lose time and budget.
          </p>
          <p>
            We accompany you through your development journey and guide your app
            safely to its goal together with you and the right strategy!
          </p>
        </>
      ),
      requestButtonText: "Start your journey",
      title: "App Development - Your App Development Agency M-to-B",
      description:
        "App development can be complicated - but it doesn't have to be! Realize your app with cost-efficient strategies and successful app development.",
      concept: "Strategy",
      development: "Implementation",
      support: "Maintenance",
      headlineSection1: "01 Strategy",
      textSection1: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Many app projects fail due to poor planning and unnecessary
            functions. If the requirements change, the app agency cannot react
            quickly and the budget is consumed before the first measurable
            results are achieved.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            With the Lean Prototype Method, we help you minimize this risk. In
            the first phase, we work together and personally to develop the main
            requirements and core components for your app and define clear and
            measurable goals.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            You will then receive an understandable development plan and a clear
            concept of your app. This means you are closely involved right from
            the start and have an overview of the status of development.
          </p>
        </>
      ),
      headlineSection2: "02 Implementation",
      textSection2: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            The layout can now be created based on the requirements of your app.
            Our focus is on a high level of user-friendliness and the goals of
            the concept. During the design, we always keep you up to date and
            you can give your feedback on every step.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            During programming, the core components are first implemented in an
            initial app prototype. With this, you will have the first version of
            your app in your hands after just a few weeks and can quickly start
            validating and using the functions.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            The app prototype is then expanded with all outstanding functions
            and developed step by step into the finished app. Since you test and
            use each function promptly, errors in communication or
            implementation can be identified early and ultimately avoided.
          </p>
        </>
      ),
      headlineSection3: "03 Release",
      textSection3: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            When it comes to app development, Flutter is our most advanced
            framework of choice. It enables us to present your first prototype
            quickly and cost-effectively, avoiding costly misjudgments.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Flutter is able to develop simultaneously for Android, iOS and web,
            saving time and money. With its high performance and low storage
            costs, Flutter offers a seamless user experience and stunning
            animations.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            Continuous updates from Flutter keep your app up to date with the
            latest technology and easily keep up with all technical trends.
          </p>
        </>
      ),
      headlineSection4: "Who are we?",
      textSection4: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            M-to-B Software was founded in 2020 by Michel Busse while he was
            studying, with the aim of trying new ideas together and developing
            useful software.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            The journey started with developing websites for various small and
            large companies. With increasing experience and upon demand from our
            customers, we are increasingly implementing personalized ERP
            software and even innovative AR apps.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            After all, we have found our passion in app development and are
            always happy to help our customers make their apps a reality. Our
            insider tip for successful development is a close relationship with
            our customers. We want to understand your goals and put our heart
            and soul behind their development.
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
          href="https://m-to-b.com/App-Agentur"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Agentur"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        priceCalculatorButton={false}
        highlightImage={"/images/app-development/header.png"}
        highlightImageAlt="App Entwicklung"
        requestButtonText={texts.requestButtonText}
        buttonLink="#start"
      />
      <main>
        <div className="scrollAnchor" id="start"></div>
        <JourneySection />
        <CustomShapeDivider flip={true} />
        <div className="scrollAnchor" id="main"></div>
        <ServiceSection
          key={"app1"}
          sectionRef={section1Ref}
          headline={texts.headlineSection1}
          text={texts.textSection1}
          image="/images/app-development/section1.png"
          imageAlt={texts.headlineSection1}
          typewriterKey={"app1"}
        />
        <ServiceSection
          key={"app2"}
          sectionRef={section2Ref}
          headline={texts.headlineSection2}
          text={texts.textSection2}
          image="/images/app-development/section2.png"
          imageAlt={texts.headlineSection2}
          typewriterKey={"app2"}
        />
        <ServiceSection
          key={"app3"}
          sectionRef={section3Ref}
          headline={texts.headlineSection3}
          text={texts.textSection3}
          image="/images/app-development/section3.png"
          imageAlt={texts.headlineSection3}
          typewriterKey={"app3"}
        />
        <SmallTechnologiesSection
          logos={[logos.flutter, logos.dart, logos.supabase, logos.firebase]}
        />
        <ServiceSection
          key={"app4"}
          sectionRef={section4Ref}
          headline={texts.headlineSection4}
          text={texts.textSection4}
          image="/images/agency.png"
          imageAlt={texts.headlineSection4}
          typewriterKey={"app4"}
        />
        <CustomShapeDivider flip={false} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
