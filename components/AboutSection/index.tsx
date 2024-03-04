import { useRouter } from "next/router";
import { useRef } from "react";
import TextSection from "../Utility/TextSection";

export default function AboutSection() {
  const router = useRouter();

  const sectionRef = useRef(null);

  let texts = {
    textSectionHeadline: "Wer sind wir?",
    textSectionText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          M-to-B Software wurde 2020 von Michel Busse während des
          Informatikstudiums in Leipzig gegründet, mit dem Ziel, gemeinsam neue
          Ideen zu verwirklichen und innovative Software zu entwickeln.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Die Reise begann mit der Entwicklung von Websites für lokale kleine
          und große Unternehmen. Mit zunehmender Erfahrung und auf Nachfrage
          unserer Kunden setzten wir auch personalisierte ERP-Systeme, eigene
          App-Konzepte und sogar innovative AR-Apps für die Chirurgie um.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Schließlich haben wir mit der App-Entwicklung unsere Leidenschaft
          gefunden und sind zu einem ganzen Team aus Entwicklern und Designern
          gewachsen. Wir freuen uns immer wieder die App-Ideen unserer Kunden
          zum Leben erwecken zu können. Unser Geheimtipp für eine erfolgreiche
          Entwicklung ist dabei ein enges und persönliches
          Kommunikationsverhältnis. Wir wollen alle Ziele verstehen und sie bei
          der Entwicklung mit Leidenschaft realisieren.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      textSectionHeadline: "Who are we?",
      textSectionText: (
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
      <TextSection
        key={"app4"}
        sectionRef={sectionRef}
        headline={texts.textSectionHeadline}
        text={texts.textSectionText}
        image="/images/agency.png"
        imageAlt={texts.textSectionHeadline}
        typewriterKey={"about1"}
      />
    </>
  );
}
