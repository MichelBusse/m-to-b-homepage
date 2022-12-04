import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Stack } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {

}

export default function QnA(props : Props) {
  const router = useRouter();

  let texts = {
    question1: "Wie viel kostet die Entwicklung einer App?",
    answer1:
      "Eine pauschale Kostenbeschreibung vorab zu nennen ist in der App-Entwicklung praktisch unmöglich. In der Regel setzen wir uns mit dir zusammen und besprechen deine Vorstellungen, die gewünschten Funktionen, die Ziele und dein Budget. Dazu beraten wir dich zu den verschiedenen Möglichkeiten für das Projekt und geben unsere Empfehlungen. Danach entscheidest du, ob du deine App mit uns realisieren möchtest.",
    question2: "Wie lange dauert die Entwicklung einer App?",
    answer2:
      "Für die zeitliche Einordnung und einen überblick über den aktuellen Entwicklungsstand setzen wir auf häufige Kundenkommunikation. Du erfährst im wöchentlichen Abstand, wie weit die Entwicklung deiner App gerade ist und welche zeitlichen Risiken es noch gibt. So schaffen wir einen transparenten und nachvollziehbaren Arbeitsablauf.",
    question3: "Was passiert nach der Fertigstellung?",
    answer3:
      "Sobald deine App alle Features fertig enthält, du mit dem Ergebnis zufrieden bist und das Projekt abgenommen hast, kann es je nach Vereinbarung unterschiedlich weitergehen. Entweder übergeben wir die App komplett an dich, oder begleiten sie beim weiteren Prozess, wie z.B. dem Upload in den App-Store, der Live-Schaltung oder der Wartung.",
    question4: "Haben wir aktuell freie Projektkapazitäten?",
    answer4:
      "Ja! Natürlich ist das abhängig vom Umfang des Projekts und der aktuellen Auslastung unseres Teams, aber in der Regel lassen sich neue Projekte bei uns ohne Wartezeit verwirklichen.",
  };

  if (router.locale == "en") {
    texts = {
      question1: "How expensive is app development?",
      answer1:
        "It is impossible to calculate the price of an app without knowing the required features. Normally, we talk with our clients, gather all necessary information about their ideas and budget and then try to combine their vision with their budget. Afterwards we give them advice and it is up to them whether they want to develop their app with us or not.",
      question2: "How long does it take to develop an app?",
      answer2:
        "To give our costumers information about the state of the app developing process, we rely on extensive individual communication. Thereby, we create a transparent and comprehensive workflow.",
      question3: "What happens after my app is finished?",
      answer3:
        "After we included all features and you are happy with the results, there are different ways for your app to go. Either we hand you the finished product and you go on with the journey by yourself or we accompany you further through the placement in the app store or the maintenance of your app.",
      question4: "Do we currently have free project capacities?",
      answer4:
        "Yes! Of course that depends on the size of your project and our current utilization of the team but normally we can realize your ideas without any delay!",
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
                    text: `<p>${texts.answer1}</p>`,
                  },
                },
                {
                  "@type": "Question",
                  name: texts.question2,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `<p>${texts.answer2}</p>`,
                  },
                },
                {
                  "@type": "Question",
                  name: texts.question3,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `<p>${texts.answer3}</p>`,
                  },
                },
                {
                  "@type": "Question",
                  name: texts.question4,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `<p>${texts.answer4}</p>`,
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
              <strong>{texts.question1}</strong>
            </AccordionSummary>
            <AccordionDetails>{texts.answer1}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary sx={{ fontSize: "1.2em" }}>
              <strong>{texts.question2}</strong>
            </AccordionSummary>
            <AccordionDetails>{texts.answer2}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary sx={{ fontSize: "1.2em" }}>
              <strong>{texts.question3}</strong>
            </AccordionSummary>
            <AccordionDetails>{texts.answer3}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary sx={{ fontSize: "1.2em" }}>
              <strong>{texts.question4}</strong>
            </AccordionSummary>
            <AccordionDetails>{texts.answer4}</AccordionDetails>
          </Accordion>
        </Stack>
      </div>
    </>
  );
}
