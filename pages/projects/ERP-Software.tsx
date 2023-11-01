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

export default function ERPSoftwarePage(props: Props) {
  const router = useRouter();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  let texts = {
    title: "ERP-Software - M-to-B",
    description:
      "Wir entwickeln ERP-Software für alle individuellen Anforderungen Ihres Unternehmens. Erleichtere und automatisiere deine Prozesse.",
    requestButtonText: "Kostenloses Beratungsgespräch",
    headline: <>ERP-Software</>,
    company: <>Schülertreff GbR</>,
    headlineText: (
      <p>
        Software-Lösung für die Lehrkräfteplanung und zur Abwicklung des
        Bewerbungsprozesses
      </p>
    ),
    section1Headline: "Motivation",
    section1Text: (
      <>
        <p>
          Für den Nachhilfe-Anbieter Schülertreff GbR haben wir ein universelles
          ERP-System entwickelt. Es wurde eine Software-Lösung benötigt, um die
          verschiedenen Verfügbarkeiten von Lehrkräften und Kunden
          übereinzubringen.
        </p>
        <p>
          Weiterhin sollte die Rechnungsstellung und die Stundeneintragung durch
          die Lehrkräfte erleichtert und automatisiert werden. Dafür soll jede
          Lehrkraft auf ihr Profil mit den wichtigsten Funktionen und
          Informationen zugreifen können.
        </p>
        <p>
          Individuelle Algorithmen sorgen im Hintergrund für eine optimale
          Abstimmung der Verfügbarkeiten und Vorschlägen in der Planung der
          Stunden.
        </p>
      </>
    ),
    section1Alt: "ERP-Software Beispiel",
    section2Headline: "Ergebnis",
    section2Text: (
      <>
        <p>
          Das entstandene ERP-System automatisiert und optimiert nun Aufgaben in
          allen Bereichen der Planung. So kann eine große Menge von Kunden und
          Lehrkräften überblickt werden und die Buchhaltung ermöglicht werden.
        </p>
        <p>
          Für die Lehrkräfte bietet das Programm Erleichterung und Übersicht bei
          ihren täglichen Aufgaben. Neue Bewerber werden mithilfe der Software
          durch einen gut gemanagten Bewerbungsprozess geleitet.
        </p>
      </>
    ),
    section2Alt: "ERP-Software Beispiel",
    quote: "",
    source: "",
  };

  if (router.locale == "en") {
    texts = {
      title: "ERP-Software - M-to-B",
      description:
        "We develop ERP software for all individual requirements of your company. Facilitate and automate your processes.",
      requestButtonText: "Schedule a free consultation",
      headline: <>ERP Software</>,
      company: <>Schülertreff GbR</>,
      headlineText: (
        <p>
          Software solution for teacher planning and for handling the
          application process
        </p>
      ),
      section1Headline: "Motivation",
      section1Text: (
        <>
          <p>
            We have developed a universal ERP system for the tutoring provider
            Schülertreff GbR. A software solution was needed to match the
            different availability of teachers and customers.
          </p>
          <p>
            Furthermore, the invoicing and the entry of hours by the teachers
            should be simplified and automated. To this end, every teacher
            should be able to access their profile with the most important
            functions and information.
          </p>
          <p>
            In the background, individual algorithms ensure that availability
            and suggestions are optimally coordinated when planning the hours.
          </p>
        </>
      ),
      section1Alt: "ERP Software Example",
      section2Headline: "Result",
      section2Text: (
        <>
          <p>
            The resulting ERP system now automates and optimizes tasks in all
            areas of planning. In this way, a large number of customers and
            teachers can be surveyed and accounting made possible.
          </p>
          <p>
            For the teachers, the program offers relief and overview in their
            daily tasks. The software guides new applicants through a
            well-managed application process.
          </p>
        </>
      ),
      section2Alt: "ERP Software Example",
      quote: "",
      source: "",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/projects/ERP-Software"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/projects/ERP-Software"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        topHeadline={texts.company}
        text={texts.headlineText}
        highlightImage={"/images/projects/project2/project2-header.png"}
        requestButtonText={texts.requestButtonText}
      />
      <main>
        <IconTextSection
          label1="ReactJS"
          label2="NestJS"
          label3="PostgreSQL"
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
                src="/images/technologies/nest.svg"
                width={80}
                height={80}
                alt="NestJS"
              />
            </div>
          }
          icon3={
            <div className={styles.logoWrapper}>
              <Image
                src="/images/technologies/postgresql.png"
                width={80}
                height={80}
                alt="PostgreSQL"
              />
            </div>
          }
        />
        <CustomShapeDivider flip={true} />
        <ServiceSection
          key={"project2-1"}
          sectionRef={section1Ref}
          headline={texts.section1Headline}
          text={texts.section1Text}
          image="/images/projects/project2/project2-1.png"
          imageAlt={texts.section1Alt}
          typewriterKey={"project2-1"}
        />
        <ServiceSection
          key={"project2-2"}
          sectionRef={section2Ref}
          headline={texts.section2Headline}
          text={texts.section2Text}
          image="/images/projects/project2/project2-2.png"
          imageAlt={texts.section2Alt}
          typewriterKey={"project2-2"}
        />
        <CustomShapeDivider flip={false} />
        <QuoteSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
