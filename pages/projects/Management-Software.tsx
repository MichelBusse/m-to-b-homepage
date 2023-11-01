import Head from "next/head";
import { AnchorRefs } from "../_app";
import { useRouter } from "next/router";
import { useRef } from "react";
import ServiceSection from "../../components/utility/TextSection";
import CustomShapeDivider from "../../components/CustomShapeDivider";
import QuoteSection from "../../components/utility/QuoteSection";
import ContactSection from "../../components/ContactSection";
import Header from "../../components/Header";
import IconTextSection from "../../components/utility/IconTextSection";
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
      "Wir entwickeln Management Software für das Mitarbeitermanagement und die Einsatzplanung. Erleichtere und automatisiere deine Prozesse.",
    requestButtonText: "Kostenloses Beratungsgespräch",
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
          Außerdem wurden die Stundenzettel digitalisiert und persönliche Daten
          sowie Dokumente können nun selbstständig von den Mitarbeitern in das
          Firmensystem eingetragen werden. Weitere Funktionen wie die
          Generierung von Auswertungen und Erinnerungsmails bei Planungsänderung
          ergänzen das Programm weiterhin.
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
        "We develop management software for employee management and resource planning. Facilitate and automate your processes.",
      requestButtonText: "Schedule a free consultation",
      headline: <>Management Software</>,
      company: <>Special-Solutions GmbH</>,
      headlineText: (
        <p>
          Software solution for employee management and resource planning for an
          IT service provider
        </p>
      ),
      section1Headline: "Motivation",
      section1Text: (
        <>
          <p>
            Our goal for the IT service provider Special-Solutions was to
            develop an efficient software for resource planning.
          </p>
          <p>
            The back office should be able to assign projects to each employee
            and to sort the employees according to their project managers. Each
            employee can then access the program via his login credentials and
            view his weekly plan or the assignments of the associated workers of
            the same project.
          </p>
          <p>
            In addition, the timesheets were digitized and personal data and
            documents can now be entered independently by the employees into the
            company system. Further functions such as the generation of
            evaluations and reminder e-mails in the event of a change in
            planning continue to improve the program.
          </p>
        </>
      ),
      section1Alt: "Management Software Example",
      section2Headline: "Result",
      section2Text: (
        <>
          <p>
            The company Special Solutions GmbH now has a universal system that
            can be accessed from anywhere in parallel and which optimally maps
            their individual workflow.
          </p>
          <p>
            Through the independent entry of working hours by the employees,
            efficient summaries and evaluations, as well as constant
            availability and backups, efficiency in management and accounting
            was optimized and communication between the back office and
            employees was automated.
          </p>
        </>
      ),
      section2Alt: "Management Software Example",
      quote:
        "We can recommend M-to-B software development [...]! The M-to-B team has developed a project management software for our employees that is tailored to our needs.",
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
        requestButtonText={texts.requestButtonText}
      />
      <main>
        <IconTextSection
          label1="ReactJS"
          label2="NodeJS"
          label3="AWS"
          icon1={
            <div className={styles.logoWrapper}>
              <Image
                src="/images/technologies/reactjs.png"
                width={80}
                height={70}
                alt="ReactJS"
              />
            </div>
          }
          icon2={
            <div className={styles.logoWrapper}>
              <Image
                src="/images/technologies/nodejs.png"
                width={80}
                height={50}
                alt="NodeJS"
              />
            </div>
          }
          icon3={
            <div className={styles.logoWrapper}>
              <Image
                src="/images/technologies/aws.png"
                width={80}
                height={50}
                alt="AWS"
              />
            </div>
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
