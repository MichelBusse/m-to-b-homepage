import { useRouter } from "next/router";
import { useRef } from "react";
import TextSection from "./utility/TextSection";

export default function CostEstimateSection() {
  const router = useRouter();

  const sectionRef = useRef(null);

  let texts = {
    textSectionHeadline: "Angebot und Festpreis",
    textSectionText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Erhalte für deine App-Idee ein unverbindliches Angebot mit einem
          Festpreis für die App-Entwicklung. So kannst du die Entwicklungskosten
          genau einsehen und vermeidest unnötige Risiken.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Nachdem du dich bei uns gemeldet hast, besprechen wir gemeinsam mit
          dir deine Idee und planen die grobe Vorgehensweise. Anschließend schätzen
          wir den Aufwand für die Entwicklung ab und erstellen dir ein
          unverbindliches Angebot für deine App.
        </p>
      </>
    ),
    buttonText: "Anfrage senden",
  };

  if (router.locale == "en") {
    texts = {
      textSectionHeadline: "Non-Binding Offer and Fixed Price",
      textSectionText: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
          Receive a non-binding offer for your app idea with a fixed price for app development. This way you can see the development costs exactly and avoid unnecessary risks.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          After you have contacted us, we will discuss your idea with you and plan the rough procedure. We will then estimate the effort required for development and provide you with a non-binding offer for your app.
        </p>
        </>
      ),
      buttonText: "Send request",
    };
  }

  return (
    <>
      <TextSection
        key={"cost-estimate"}
        sectionRef={sectionRef}
        headline={texts.textSectionHeadline}
        text={texts.textSectionText}
        image="/images/app-development/cost-estimate.png"
        imageAlt={texts.textSectionHeadline}
        typewriterKey={"cost-estimate"}
        siteLink="#formular"
        siteLinkText={texts.buttonText}
      />
    </>
  );
}
