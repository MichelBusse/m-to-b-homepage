import Head from "next/head";
import { AnchorRefs } from "../_app";
import { useRouter } from "next/router";
import { useRef } from "react";
import ServiceSection from "../../components/ServiceSection";
import CustomShapeDivider from "../../components/CustomShapeDivider";
import QuoteSection from "../../components/QuoteSection";
import ContactSection from "../../components/ContactSection";
import Header from "../../components/Header";
import IconTextSection from "../../components/IconTextSection";
import Image from "next/image";
import styles from "../../styles/ProjectPage.module.scss";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function ManagementSoftwarePage(props: Props) {
  const router = useRouter();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  let texts = {
    title: "Management Software - M-to-B",
    description:
      "Wir entwickeln Management Software für das Mitarbeitermanagement und die Einsatzplanung. Erleichtern und automatisieren Sie Ihre Prozesse.",
    headline: <>Management Software</>,
    company: <>Special-Solutions GmbH</>,
    headlineText: (
      <p>
        Software-Lösung für das Mitarbeitermanagement und die Einsatzplanung
        eines IT-Dienstleisters
      </p>
    ),
    section1Headline: "Motivation",
    section1Text: (
      <>
        <p>
          Für den IT-Dienstleister Special-Solutions war es unser Ziel, eine
          effiziente Lösung für die Einsatzplanung zu entwickeln.
        </p>
        <p>
          Das Backoffice soll die Möglichkeit haben, jedem Mitarbeiter Einsätze
          zuzuweisen und die Mitarbeiter nach Projekten und Projektleiter zu
          sortieren. Jeder Mitarbeiter kann dann über seinen Zugang auf das
          Programm zugreifen und seine Wochenplanung aufrufen bzw. die Einsätze
          der zugehörigen Arbeiter des gleichen Projekts.
        </p>
        <p>
          Außerdem wurden die Stundenzettel mit im System digitalisiert und
          persönliche Daten sowie Dokumente können nun selbstständig von den
          Mitarbeitern in das Firmensystem eingetragen werden. Weitere
          Funktionen wie die Generierung von Auswertungen und Erinnerungsmails
          bei Planungsänderung ergänzen das Programm weiterhin.
        </p>
      </>
    ),
    section1Alt: "Management Software Beispiel",
    section2Headline: "Ergebnis",
    section2Text: (
      <>
        <p>
          Die Firma Special Solutions GmbH besitzt nun ein universelles System,
          auf das von überall parallel zugegriffen werden kann und welches
          optimal ihre individuelle Arbeitsplanung abbildet.
        </p>
        <p>
          Durch die selbstständige Eintragung der Arbeitszeit durch die
          Mitarbeiter, effiziente Zusammenfassungen und Auswertungen, sowie
          ständige Erreichbarkeit und Backups konnte die Effizienz im Management
          und der Buchhaltung optimiert und die Kommunikation zwischen
          Backoffice und Mitarbeitern automatisiert werden.
        </p>
      </>
    ),
    section2Alt: "Management Software Beispiel",
    quote:
      "Wir können M-to-B Softwareentwicklung nur weiterempfehlen [...]! Das Team von M-to-B hat uns eine auf unsere Bedürfnisse zugeschnittene Einsatzplanung für unsere Mitarbeiter entwickelt.",
    source: "Special Solutions GmbH",
  };

  if (router.locale == "en") {
    texts = {
      title: "Management Software - M-to-B",
      description:
        "Develop your app with us as an app agency. We offer professional advice and individual solutions for iOS, Android and Cross-Platform.",
      headline: <>Management Software</>,
      company: <>Special-Solutions GmbH</>,
      headlineText: (
        <p>
          Software-Lösung für das Mitarbeitermanagement und die Einsatzplanung
          eines IT-Dienstleisters
        </p>
      ),
      section1Headline: "Motivation",
      section1Text: (
        <>
          <p>
            Für den IT-Dienstleister Special-Solutions war es unser Ziel, eine
            effiziente Lösung für die Einsatzplanung zu entwickeln.
          </p>
          <p>
            Das Backoffice soll die Möglichkeit haben, jedem Mitarbeiter
            Einsätze zuzuweisen und die Mitarbeiter nach Projekten und
            Projektleiter zu sortieren. Jeder Mitarbeiter kann dann über seinen
            Zugang auf das Programm zugreifen und seine Wochenplanung aufrufen
            bzw. die Einsätze der zugehörigen Arbeiter des gleichen Projekts.
          </p>
          <p>
            Außerdem wurden die Stundenzettel mit im System digitalisiert und
            persönliche Daten sowie Dokumente können nun selbstständig von den
            Mitarbeitern in das Firmensystem eingetragen werden. Weitere
            Funktionen wie die Generierung von Auswertungen und Erinnerungsmails
            bei Planungsänderung ergänzen das Programm weiterhin.
          </p>
        </>
      ),
      section1Alt: "Management Software Example",
      section2Headline: "Result",
      section2Text: (
        <>
          <p>
            Die Firma Special Solutions GmbH besitzt nun ein universelles
            System, auf das von überall parallel zugegriffen werden kann und
            welches optimal ihre individuelle Arbeitsplanung abbildet.
          </p>
          <p>
            Durch die selbstständige Eintragung der Arbeitszeit durch die
            Mitarbeiter, effiziente Zusammenfassungen und Auswertungen, sowie
            ständige Erreichbarkeit und Backups konnte die Effizienz im
            Management und der Buchhaltung optimiert und die Kommunikation
            zwischen Backoffice und Mitarbeitern automatisiert werden.
          </p>
        </>
      ),
      section2Alt: "Management Software Example",
      quote:
        "Wir können M-to-B Softwareentwicklung nur weiterempfehlen [...]! Das Team von M-to-B hat uns eine auf unsere Bedürfnisse zugeschnittene Einsatzplanung für unsere Mitarbeiter entwickelt.",
      source: "Special Solutions GmbH",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/projects/Management-Software"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/projects/Management-Software"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        topHeadline={texts.company}
        text={texts.headlineText}
        highlightImage={"/images/projects/project1/project1-header.png"}
      />
      <main>
        <IconTextSection
          label1="ReactJS"
          label2="NestJS"
          label3="AWS"
          icon1={
            <div className={styles.logoWrapper}>
            <Image
              src="/images/technologies/reactjs.png"
              width={80}
              height={70}
              alt="ReactJS"
            /></div>
          }
          icon2={
            <div className={styles.logoWrapper}>
            <Image
              src="/images/technologies/nest.svg"
              width={80}
              height={80}
              alt="NestJS"
            /></div>
          }
          icon3={
            <div className={styles.logoWrapper}>
            <Image
              src="/images/technologies/aws.png"
              width={80}
              height={55}
              alt="AWS"
            /></div>
          }
        />
        <CustomShapeDivider flip={true} />
        <ServiceSection
          key={"project1-1"}
          sectionRef={section1Ref}
          headline={texts.section1Headline}
          text={texts.section1Text}
          image="/images/projects/project1/project1-1.png"
          imageAlt={texts.section1Alt}
          typewriterKey={"project1-1"}
        />
        <ServiceSection
          key={"project1-2"}
          sectionRef={section2Ref}
          headline={texts.section2Headline}
          text={texts.section2Text}
          image="/images/projects/project1/project1-2.png"
          imageAlt={texts.section2Alt}
          typewriterKey={"project1-2"}
        />
        <CustomShapeDivider flip={false} />
        <QuoteSection quote={texts.quote} source={texts.source} />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
