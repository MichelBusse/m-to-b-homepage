import { useRouter } from "next/router";
import { useRef } from "react";
import TextSection from "../Utility/TextSection";

export default function WebServicesSections() {
  const router = useRouter();

  const textSection1Ref = useRef(null);
  const textSection2Ref = useRef(null);

  let texts = {
    textSection1Headline: "Full-Service-Web-Agentur",
    textSection1ImageAlt: "Full-Service-Web-Agentur",
    textSection1Text: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Full-Service heißt bei uns, wir begleiten dein Projekt durch den
          gesamten Prozess:
        </p>
        <ol>
          <li style={{ transitionDelay: "0.6s" }}>
            <b>Strategie:</b> Das Ziel deiner Web-Anwendung wird bestimmt und
            ein Konzept für die richtigen Technologien und Plattformen erstellt.
          </li>
          <li style={{ transitionDelay: "0.9s" }}>
            <b>Design:</b> Im Web-Design wird das Layout der Web-App gestaltet
            und ein einzigartiges, aber vor allem nutzerfreundliches Design
            erstellt.
          </li>
          <li style={{ transitionDelay: "1.2s" }}>
            <b>Implementierung:</b> Deine App wird mit den geeignetsten
            Technologien programmiert. Wir legen besonderen Wert auf eine
            möglichst effiziente und persönliche Entwicklung und halten dich
            während des Prozesses immer up-to-date.
          </li>
          <li style={{ transitionDelay: "1.5s" }}>
            <b>Betreuung:</b> Nach dem Rollout stehen wir dir auch weiterhin zur
            Verfügung um Probleme zu beheben, deine Anwendung zu aktualisieren
            oder dich bei weiteren Schritten zu beraten.
          </li>
        </ol>
      </>
    ),
    textSection2Headline: "Progressive Web Apps",
    textSection2ImageAlt: "Progressive Web Apps",
    textSection2Text: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Progressive Web Apps (PWAs) haben in den letzten Jahren einen immer
          bedeutsameren Einfluss auf die App-Industrie gewonnen. PWAs stellen
          eine moderne Lösung dar, die die Lücke zwischen traditionellen
          Websites und nativen Apps schließt.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Der Hauptvorteil von PWAs liegt in ihrer Fähigkeit, eine nahtlose
          Benutzererfahrung über verschiedene Plattformen hinweg zu bieten und
          das bei wesentlich geringeren Entwicklungskosten als bei nativer
          App-Entwicklung. Auch bestehende Websites können in eine PWA
          konvertiert und somit noch zugänglicher gemacht werden.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Durch fortschrittliche Technologien, wie Service Worker oder Web-Push,
          ermöglichen PWAs eine Offline-Nutzung und unterstützen sogar
          Benachrichtigungen auf dem Smartphone.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      textSection1Headline: "Full-Service Web Agency",
      textSection1ImageAlt: "Full-Service Web Agency",
      textSection1Text: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Full-Service means that we accompany your project through the entire
            process:
          </p>
          <ol>
            <li style={{ transitionDelay: "0.6s" }}>
              <b>Strategy:</b> The goal of your web application is determined
              and a concept for the right technologies and platforms is created.
            </li>
            <li style={{ transitionDelay: "0.9s" }}>
              <b>Design:</b> In web design, the layout of the web app is
              designed and a unique, but above all user-friendly design is
              created.
            </li>
            <li style={{ transitionDelay: "1.2s" }}>
              <b>Implementation:</b> Your app will be programmed with the most
              suitable technologies. We attach particular importance to the most
              efficient and personal development possible and always keep you up
              to date during the process.
            </li>
            <li style={{ transitionDelay: "1.5s" }}>
              <b>Support:</b> After the rollout, we will continue to be
              available to fix problems, update your application or advise you
              on further steps .
            </li>
          </ol>
        </>
      ),
      textSection2Headline: "Progressive Web Apps",
      textSection2ImageAlt: "Progressive Web Apps",
      textSection2Text: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Progressive Web Apps (PWAs) have gained an increasingly significant
            impact on the app industry in recent years. PWAs represent a modern
            solution that bridges the gap between traditional websites and
            native apps.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            The main advantage of PWAs is their ability to provide a seamless
            user experience across different platforms at a significantly lower
            development cost than native app development. Existing websites can
            also be converted into a PWA and thus made even more accessible.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            Through advanced technologies such as service workers or web push,
            PWAs enable offline use and even support notifications on
            smartphones.
          </p>
        </>
      ),
    };
  }

  return (
    <>
      <TextSection
        key={"webServices1"}
        sectionRef={textSection1Ref}
        headline={texts.textSection1Headline}
        text={texts.textSection1Text}
        image="/images/pwa-web-agency/section1.png"
        imageAlt={texts.textSection1ImageAlt}
        typewriterKey={"webServices1"}
      />
      <TextSection
        key={"webServices2"}
        sectionRef={textSection2Ref}
        headline={texts.textSection2Headline}
        text={texts.textSection2Text}
        image="/images/pwa-web-agency/section2.png"
        imageAlt={texts.textSection2ImageAlt}
        typewriterKey={"webServices2"}
      />
    </>
  );
}
