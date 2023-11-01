import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Stack } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

export default function FAQAugmentedReality(props: Props) {
  const router = useRouter();

  let texts = {
    question1: "Brauche ich eine AR-Brille?",
    answer1: (
      <>
        Nein. Augmented Reality beschränkt sich nicht auf AR-Brillen, sondern
        kann auch als App oder vollständig im Web realisiert werden. Je nach
        Projekt und Ziel kann es aber Sinn machen, eine Anwendung auf einer
        AR-Brille bereitzustellen. Wir beraten dich zu deinen Anforderungen
        individuell, welche Plattform für dich die sinnvollste ist.
      </>
    ),
    answer1String:
      "Nein. Augmented Reality beschränkt sich nicht auf AR-Brillen, sondern kann auch als App oder vollständig im Web realisiert werden. Je nach Projekt und Ziel kann es aber Sinn machen, eine Anwendung auf einer AR-Brille bereitzustellen. Wir beraten dich zu deinen Anforderungen individuell, welche Plattform für dich die sinnvollste ist.",
    question2: "Für welche Unternehmen lohnt sich AR?",
    answer2: (
      <>
        AR kann für Unternehmen aus verschiedenen Branchen wie Einzelhandel,
        Immobilien, Bildung, Automobilindustrie, Tourismus und Medizin von
        Vorteil sein, um Kunden ein interaktives Erlebnis zu bieten und den
        Kaufprozess zu erleichtern oder die Kundenzufriedenheit zu erhöhen.
        Letztendlich lohnt sich AR für jedes Unternehmen, das seinen Kunden ein
        interaktives und ansprechendes Erlebnis bieten möchte.
      </>
    ),
    answer2String:
      "AR kann für Unternehmen aus verschiedenen Branchen wie Einzelhandel, Immobilien, Bildung, Automobilindustrie, Tourismus und Medizin von Vorteil sein, um Kunden ein interaktives Erlebnis zu bieten und den Kaufprozess zu erleichtern oder die Kundenzufriedenheit zu erhöhen. Letztendlich lohnt sich AR für jedes Unternehmen, das seinen Kunden ein interaktives und ansprechendes Erlebnis bieten möchte.",
    question3: "Was ist der Unterschied zwischen VR und AR?",
    answer3: (
      <>
        Virtual Reality (VR) und Augmented Reality (AR) sind zwei
        unterschiedliche Technologien. VR schafft eine komplett virtuelle
        Umgebung, die den Benutzer von der realen Welt abschirmt, während AR
        digitale Informationen in die reale Welt einbettet und diese ergänzt. AR
        kann beispielsweise genutzt werden, um virtuelle Objekte auf reale
        Objekte zu projizieren.
      </>
    ),
    answer3String:
      "Virtual Reality (VR) und Augmented Reality (AR) sind zwei unterschiedliche Technologien. VR schafft eine komplett virtuelle Umgebung, die den Benutzer von der realen Welt abschirmt, während AR digitale Informationen in die reale Welt einbettet und diese ergänzt. AR kann beispielsweise genutzt werden, um virtuelle Objekte auf reale Objekte zu projizieren.",
    question4:
      "Was sind die zukünftigen Trends in der AR-Technologie?",
    answer4: (
      <>
        Zukünftige Trends in der AR-Technologie sind breitere
        Anwendungsbereiche, höhere Genauigkeit und Benutzerfreundlichkeit sowie
        schnellere und stabilere Leistung. AR wird voraussichtlich in Bereichen
        wie Bildung, Medizin und Industrie weiter wachsen. AR-Brillen werden
        immer leistungsstärker und erschwinglicher.
      </>
    ),
    answer4String:
      "Zukünftige Trends in der AR-Technologie sind breitere Anwendungsbereiche, höhere Genauigkeit und Benutzerfreundlichkeit sowie schnellere und stabilere Leistung. AR wird voraussichtlich in Bereichen wie Bildung, Medizin und Industrie weiter wachsen. AR-Brillen werden immer leistungsstärker und erschwinglicher.",
  };

  if (router.locale == "en") {
    texts = {
      question1: "Do I need AR glasses?",
      answer1: (
        <>
          No. Augmented Reality is not limited to AR glasses, but can also be
          implemented as an app or completely on the web. Depending on the
          project and goal, however, it can make sense to provide an application
          on AR glasses. We advise you individually on your requirements as to
          which platform makes the most sense for you.
        </>
      ),
      answer1String:
        "No. Augmented Reality is not limited to AR glasses, but can also be implemented as an app or completely on the web. Depending on the project and goal, however, it can make sense to provide an application on AR glasses. We advise you individually on your requirements as to which platform makes the most sense for you.",
      question2: "For which companies is AR beneficial?",
      answer2: (
        <>
          AR can be beneficial for companies from various industries such as
          retail, real estate, education, automotive, tourism and medical to
          provide customers with an interactive experience and facilitate the
          buying process or increase customer satisfaction. Ultimately, AR is
          worthwhile for any business that wants to offer their customers an
          interactive and engaging experience.
        </>
      ),
      answer2String:
        "AR can be beneficial for companies from various industries such as retail, real estate, education, automotive, tourism and medical to provide customers with an interactive experience and facilitate the buying process or increase customer satisfaction. Ultimately, AR is worthwhile for any business that wants to offer their customers an interactive and engaging experience.",
      question3: "What is the difference between VR and AR?",
      answer3: (
        <>
          Virtual Reality (VR) and Augmented Reality (AR) are two different
          technologies. VR creates a completely virtual environment that shields
          the user from the real world, while AR embeds and complements digital
          information in the real world. For example, AR can be used to project
          virtual objects onto real objects.
        </>
      ),
      answer3String:
        "Virtual Reality (VR) and Augmented Reality (AR) are two different technologies. VR creates a completely virtual environment that shields the user from the real world, while AR embeds and complements digital information in the real world. For example, AR can be used to project virtual objects onto real objects.",
      question4: "What are future trends in AR technology?",
      answer4: (
        <>
          Future trends in AR technology are broader application areas, higher
          accuracy and ease of use, and faster and more stable performance. AR
          is expected to continue to grow in areas such as education, medicine,
          and industry. AR glasses are becoming more and more powerful and
          affordable.
        </>
      ),
      answer4String:
        "Future trends in AR technology are broader application areas, higher accuracy and ease of use, and faster and more stable performance. AR is expected to continue to grow in areas such as education, medicine, and industry. AR glasses are becoming more and more powerful and affordable.",
    };
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: texts.question1,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `<p>${texts.answer1String}</p>`,
                  },
                },
                {
                  "@type": "Question",
                  name: texts.question2,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `<p>${texts.answer2String}</p>`,
                  },
                },
                {
                  "@type": "Question",
                  name: texts.question3,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `<p>${texts.answer3String}</p>`,
                  },
                },
                {
                  "@type": "Question",
                  name: texts.question4,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `<p>${texts.answer4String}</p>`,
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <div>
        <Stack>
          <Accordion>
            <AccordionSummary sx={{ fontSize: "1.2em" }}>
              {texts.question1}
            </AccordionSummary>
            <AccordionDetails>{texts.answer1}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary sx={{ fontSize: "1.2em" }}>
              {texts.question2}
            </AccordionSummary>
            <AccordionDetails>{texts.answer2}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary sx={{ fontSize: "1.2em" }}>
              {texts.question3}
            </AccordionSummary>
            <AccordionDetails>{texts.answer3}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary sx={{ fontSize: "1.2em" }}>
              {texts.question4}
            </AccordionSummary>
            <AccordionDetails>{texts.answer4}</AccordionDetails>
          </Accordion>
        </Stack>
      </div>
    </>
  );
}
