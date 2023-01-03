import { useRouter } from "next/router";
import { useRef } from "react";
import ServiceSection from "../services/ServiceSection";

export default function LeipzigServicesSection() {
  const router = useRouter();

  const innovationRef = useRef(null);
  const agileRef = useRef(null);

  let texts = {
    headlineSection1: "Innovation aus Leipzig",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Als App Agentur aus Leipzig ist es unser Ziel, die neusten
          Technologien in die Region zu bringen. Ob Mobile Apps für Android und
          iOS oder Virtual Reality Systeme - wir freuen uns immer auf neue
          Software-Herausforderungen.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Mit großem Interesse entwickeln wir auch an neuen Technologien für die
          Universität und Uniklinik Leipzig und konnten bereits neue
          Augmented-Reality-Systeme für die Lehre und den OP entwickeln.
        </p>
      </>
    ),
    headlineSection2: "App-Entwicklungs-Prozess",
    textSection2: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Deine App beginnt den Entwicklungsprozess mit dem Konzept und der
          Planung. Gemeinsam mit dir entwickeln wir die beste Strategie für
          deine Anforderungen und wählen die geeignetsten Technologien.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Anschließend beginnt der Designprozess, bei welchem du direkt deine
          Vorstellungen einbringst und am Ende von unseren App-Designern ein
          UI-Design als Vorlage erhälst.
        </p>
        <p style={{ transitionDelay: "0.9s" }} key={3}>
          Die eigentliche Entwicklung läuft dann transparent und personalisiert
          ab. Du bleibst immer up-to-date mit dem aktuellen Fortschritt deiner
          App und verlierst so nie den Überblick.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      headlineSection1: "Innovation from Leipzig",
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
      <ServiceSection
        key={1}
        sectionRef={innovationRef}
        headline={texts.headlineSection1}
        text={texts.textSection1}
        image="/images/innovation.png"
        imageAlt={texts.headlineSection1}
        typewriterKey={"1"}
      />
      <ServiceSection
        key={2}
        sectionRef={agileRef}
        headline={texts.headlineSection2}
        text={texts.textSection2}
        image="/images/smartphone.png"
        imageAlt={texts.headlineSection2}
        typewriterKey={"2"}
      />
    </>
  );
}
