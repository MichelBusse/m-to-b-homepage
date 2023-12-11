import { useRouter } from "next/router";
import { useRef } from "react";
import TextSection from "./utility/TextSection";

export default function ARServicesSections() {
  const router = useRouter();

  const textSection1Ref = useRef(null);
  const textSection2Ref = useRef(null);

  let texts = {
    textSection1Headline: "Leistungen",
    textSection1ImageAlt: "Augmented Reality Leistungen",
    textSection1Text: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Als Full-Service-AR-Agentur begleiten wir dich durch den gesamten
          Prozess deines Projekts.
        </p>
        <ol>
          <li style={{ transitionDelay: "0.6s" }}>
            <b>Strategie:</b> Das Ziel deiner Augmented-Reality-Anwendung wird
            bestimmt und ein Konzept für die richtigen Technologien und
            Plattformen erstellt.
          </li>
          <li style={{ transitionDelay: "0.9s" }}>
            <b>Design:</b> Das Layout der App wird gestaltet und alle 3D-Assets
            werden vorbereitet, durch Modellierung oder Scanning.
          </li>
          <li style={{ transitionDelay: "1.2s" }}>
            <b>Implementierung:</b> Deine Idee wird buchstäblich Realität. Deine
            AR-App erhält alle Funktionen und wird zu einem nutzerfreundlichen
            Produkt.
          </li>
          <li style={{ transitionDelay: "1.5s" }}>
            <b>Betreuung:</b> Nach der Fertigstellung stehen wir dir weiterhin
            zur Verfügung um Probleme zu beheben und deine Anwendung zu
            aktualisieren.
          </li>
        </ol>
      </>
    ),
    textSection2Headline: "AR-Plattformen",
    textSection2ImageAlt: "Augmented Reality Plattformen",
    textSection2Text: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Wo man Augmented Reality einsetzt ist vielfältig und abhängig vom
          Projekt und der Zielgruppe. Wir bieten sowohl die Entwicklung für
          modernste VR- und AR-Brillen wie der Hololens 2 oder der Apple Vision
          Pro, aber auch für klassische Plattformen.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Als mobile App für Android und iOS oder auch vollständig im Web ist
          Augmented Reality effektiv einsetzbar und bietet damit eine hohe
          Zugänglichkeit für alle Zielgruppen.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Mit den richtigen Technologien optimieren wir deine AR-Anwendung für
          eine beeindruckende und flüssige Nutzererfahrung und lassen deine
          Anwender staunen.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      textSection1Headline: "Services",
      textSection1ImageAlt: "Augmented Reality Services",
      textSection1Text: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            As a full-service AR agency, we accompany you through the entire
            process of your project.
          </p>
          <ol>
            <li style={{ transitionDelay: "0.6s" }}>
              <b>Strategy:</b> The goal of your augmented reality application is
              determined and a concept for the right technologies and platforms
              is created.
            </li>
            <li style={{ transitionDelay: "0.9s" }}>
              <b>Design:</b> The layout of the app is designed and all 3D assets
              are prepared, through modeling or scanning.
            </li>
            <li style={{ transitionDelay: "1.2s" }}>
              <b>Implementation:</b> Your idea literally becomes reality. Your
              AR app receives all functions and becomes a user-friendly product.
            </li>
            <li style={{ transitionDelay: "1.5s" }}>
              <b>Support:</b> After completion, we will continue to support you
              to troubleshoot issues and update your application.
            </li>
          </ol>
        </>
      ),
      textSection2Headline: "AR Platforms",
      textSection2ImageAlt: "Augmented Reality Platforms",
      textSection2Text: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Augmented reality usage varies and depends on the project and the
            target group. We offer development for the most modern VR and AR
            glasses such as Hololens 2 or Apple Vision Pro, but also for classic
            platforms.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            As mobile With an app for Android and iOS or even completely on the
            web, augmented reality can be used effectively and therefore offers
            high accessibility for all target groups.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            We optimize with the right technologies your AR application for an
            impressive and fluid user experience and leave your users amazed.
          </p>
        </>
      ),
    };
  }

  return (
    <>
      <TextSection
        key={"arServices1"}
        sectionRef={textSection1Ref}
        headline={texts.textSection1Headline}
        text={texts.textSection1Text}
        image="/images/augmented-reality/car.jpg"
        imageAlt={texts.textSection1ImageAlt}
        typewriterKey={"stages1"}
      />
      <TextSection
        key={"arServices2"}
        sectionRef={textSection2Ref}
        headline={texts.textSection2Headline}
        text={texts.textSection2Text}
        image="/images/augmented-reality/model.jpg"
        imageAlt={texts.textSection2ImageAlt}
        typewriterKey={"stages2"}
      />
    </>
  );
}
