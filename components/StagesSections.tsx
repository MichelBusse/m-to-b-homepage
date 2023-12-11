import { useRouter } from "next/router";
import { useRef } from "react";
import TextSection from "./utility/TextSection";

export default function StagesSection() {
  const router = useRouter();

  const textSection1Ref = useRef(null);
  const textSection2Ref = useRef(null);
  const textSection3Ref = useRef(null);

  let texts = {
    textSection1Headline: "01 Die Strategie",
    textSection1ImageAlt: "App Entwicklung Strategie",
    textSection1Text: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Viele App-Projekte scheitern durch schlechte Planung und unnötige
          Funktionen. Bei Änderungen in den Anforderungen kann von der
          App-Agentur nicht reagiert werden und das Budget wird schon vor den
          ersten messbaren Ergebnissen verschlungen.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Mit der Lean-Prototype-Methode helfen wir dir, dieses Risiko zu
          minimieren. In der ersten Phase erarbeiten wir dafür gemeinsam mit dir
          die Hauptanforderungen und Kernkomponenten für deine App und
          definieren eindeutige und messbare Ziele.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Anschließend erhältst du einen verständlichen Entwicklungsplan und ein
          klares Konzept deiner App. Somit bist du von Anfang an eng beteiligt
          und behältst einen Überblick über den Stand der Entwicklung.
        </p>
      </>
    ),
    textSection2Headline: "02 Die Umsetzung",
    textSection2ImageAlt: "App Entwicklung Umsetzung",
    textSection2Text: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Mit den Anforderungen deiner App kann nun das Layout erstellt werden.
          Dabei liegt unser Fokus auf einer hohen Nutzerfreundlichkeit und den
          Zielen aus dem Konzept. Während dem Design halten wir dich immer up to
          date und du kannst zu jedem Schritt deine Impulse geben.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Bei der Programmierung werden die Kernkomponenten zunächst in einem
          ersten App-Prototyp implementiert. Damit hältst du schon nach wenigen
          Wochen die erste Version deiner App in den Händen und kannst direkt
          anfangen, die Funktionen zu testen und einzusetzen.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Der App-Prototyp wird dann mit allen noch ausstehenden Funktionen
          erweitert und Schritt für Schritt zur fertigen App ausgebaut. Da jede
          Funktion zeitnah von dir getestet und genutzt wird, können Fehler in
          der Kommunikation oder Umsetzung früh erkannt und schließlich
          vermieden werden.
        </p>
      </>
    ),
    textSection3Headline: "03 Der Release",
    textSection3ImageAlt: "App Entwicklung Release",
    textSection3Text: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Der Höhepunkt jeder App-Entwicklung ist der Release. Egal ob deine App
          firmenintern oder öffentlich für jeden sein soll, wir schützen dich
          vor den Gefahren der Veröffentlichung auf den entsprechenden
          Plattformen und beraten dich zu den geeignetsten Werbestrategien.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Schließlich ist der App-Release der Moment, in dem deine Ideen
          Wirklichkeit werden und du dein fertiges Produkt in deinen
          (virtuellen) Händen hältst.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Doch deine Reise endet hier noch nicht: Auch bei allen Aufgaben nach
          der Veröffentlichung bleiben wir dein Ansprechpartner und helfen dir,
          alle Bugs zu beheben und deine zukünftigen Wünsche umzusetzen.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      textSection1Headline: "01 Strategy",
      textSection1ImageAlt: "App Development Strategy",
      textSection1Text: (
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
      textSection2Headline: "02 Implementation",
      textSection2ImageAlt: "App Development Implementation",
      textSection2Text: (
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
      textSection3Headline: "03 Release",
      textSection3ImageAlt: "App Development Release",
      textSection3Text: (
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
    };
  }

  return (<>
    <TextSection
      key={"app1"}
      sectionRef={textSection1Ref}
      headline={texts.textSection1Headline}
      text={texts.textSection1Text}
      image="/images/app-development/section1.png"
      imageAlt={texts.textSection1ImageAlt}
      typewriterKey={"stages1"}
    />
    <TextSection
      key={"app2"}
      sectionRef={textSection2Ref}
      headline={texts.textSection2Headline}
      text={texts.textSection2Text}
      image="/images/app-development/section2.png"
      imageAlt={texts.textSection2ImageAlt}
      typewriterKey={"stages2"}
    />
    <TextSection
      key={"app3"}
      sectionRef={textSection3Ref}
      headline={texts.textSection3Headline}
      text={texts.textSection3Text}
      image="/images/app-development/section3.png"
      imageAlt={texts.textSection3ImageAlt}
      typewriterKey={"stages3"}
    /></>);

}