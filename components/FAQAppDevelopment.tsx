import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Stack } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {};

export default function FAQAppDevelopment(props: Props) {
  const router = useRouter();

  let texts = {
    question1: "Welche Branchen bedient ihr?",
    answer1: (
      <>
        Wir arbeiten in verschiedenen Branchen, darunter Gesundheitswesen,
        E-Commerce, Bildung, Unterhaltung und mehr. Unser Ziel ist es, passende
        Lösungen für jeden Kunden zu entwickeln. Wenn wir die Vision hinter der
        App verstehen, schließen wir keine Branche aus.
      </>
    ),
    answer1String:
      "Wir arbeiten in verschiedenen Branchen, darunter Gesundheitswesen, E-Commerce, Bildung, Unterhaltung und mehr. Unser Ziel ist es maßgeschneiderte Lösungen für jeden Kunden zu entwickeln. Wenn wir die Vision hinter der App verstehen, schließen wir keine Branche aus.",
    question2: "Wie lange dauert die Entwicklung einer App?",
    answer2: (
      <>
        Die Dauer der App-Entwicklung hängt von deinen individuellen
        Anforderungen ab. Wir möchten sicherstellen, dass deine App perfekt ist
        und werden so schnell wie möglich arbeiten, um deine Vision Wirklichkeit
        werden zu lassen. Um dir einen möglichst frühen ROI zu ermöglichen,
        kannst du bereits nach wenigen Wochen deinen ersten App-Prototyp
        verwenden und testen. Alle weiteren Funktionen bauen dann auf diesem
        Prototyp auf und sind so immer zeitnah in deinen Händen.
      </>
    ),
    answer2String:
      "Die Dauer der App-Entwicklung hängt von deinen individuellen Anforderungen ab. Wir möchten sicherstellen, dass deine App perfekt ist und werden so schnell wie möglich arbeiten, um deine Vision Wirklichkeit werden zu lassen. Um dir einen möglichst frühen ROI zu ermöglichen, kannst du bereits nach wenigen Wochen deinen ersten App-Prototyp verwenden und testen. Alle weiteren Funktionen bauen dann auf diesem Prototyp auf und sind so immer zeitnah in deinen Händen.",
    question3: "Wie steht es mit der Unterstützung nach der Veröffentlichung?",
    answer3: (
      <>
        Keine Sorge, auch nach dem Release lassen wir dich nicht im Stich! Wir
        bieten nach auch der Veröffentlichung umfassende Wartung und
        Unterstützung für deine App. Bei Problemen oder Aktualisierungen sind
        wir immer für dich da.
      </>
    ),
    answer3String:
      "Keine Sorge, auch nach dem Release lassen wir dich nicht im Stich! Wir bieten nach auch der Veröffentlichung umfassende Wartung und Unterstützung für deine App. Bei Problemen oder Aktualisierungen sind wir immer für dich da.",
    question4: "Wird jede App von euch betreut?",
    answer4: (
      <>
        Das Ergebnis der Entwicklung ist deine App und du kannst anschließend
        damit machen was du möchtest. Gerne unterstützen wir dich auch weiterhin
        nach dem Release, aber das ist natürlich keine Pflicht. Du kannst deine
        App und den Quellcode auch völlig selbstständig weiter betreuen.
      </>
    ),
    answer4String:
      "Das Ergebnis der Entwicklung ist deine App und du kannst anschließend damit machen was du möchtest. Gerne unterstützen wir dich auch weiterhin nach dem Release, aber das ist natürlich keine Pflicht. Du kannst deine App und den Quellcode auch völlig selbstständig weiter verwalten.",
  };

  if (router.locale == "en") {
    texts = {
      question1: "Which industries do you serve?",
      answer1: (
        <>
          We work across multiple industries including healthcare, e-commerce,
          education, entertainment and more. Our goal is to develop tailor-made
          solutions for every customer. When we understand the vision behind the
          app, we don&apos;t exclude any industry.
        </>
      ),
      answer1String:
        "We work across multiple industries including healthcare, e-commerce, education, entertainment and more. Our goal is to develop tailor-made solutions for every customer. When we understand the vision behind the app, we don't exclude any industry.",
      question2: "How long does it take to develop an app?",
      answer2: (
        <>
          The duration of app development depends on your individual
          requirements. We want to make sure your app is perfect and will work
          as quickly as possible to make your vision a reality. To give you as
          early an ROI as possible, you can use and test your first app
          prototype after just a few weeks. All other functions are then based
          on this prototype and are therefore always in your hands promptly.
        </>
      ),
      answer2String:
        "The duration of app development depends on your individual requirements. We want to make sure your app is perfect and will work as quickly as possible to make your vision a reality. To give you as early an ROI as possible, you can use and test your first app prototype after just a few weeks. All other functions are then based on this prototype and are therefore always in your hands promptly.",
      question3: "What about post-release support?",
      answer3: (
        <>
          Don&apos;t worry, we won&apos;t let you down even after the release!
          We offer comprehensive maintenance and support for your app after its
          release. If you have any problems or updates, we are always there for
          you.
        </>
      ),
      answer3String:
        "Don't worry, we won't let you down even after the release! We offer comprehensive maintenance and support for your app after its release. If you have any problems or updates, we are always there for you.",
      question4: "Is every app managed by you?",
      answer4: (
        <>
          The result of the development is your app and you can then do whatever
          you want with it. We would be happy to continue to support you after
          the release, but of course this is not mandatory. You can also
          continue to manage your app and the source code completely
          independently.
        </>
      ),
      answer4String:
        "The result of the development is your app and you can then do whatever you want with it. We would be happy to continue to support you after the release, but of course this is not mandatory. You can also continue to manage your app and the source code completely independently.",
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
