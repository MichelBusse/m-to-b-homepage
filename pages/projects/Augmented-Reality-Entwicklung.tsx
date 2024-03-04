import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import ServiceSection from "@/components/Utility/TextSection";
import CustomShapeDivider from "@/components/CustomShapeDivider";
import QuoteSection from "@/components/Utility/QuoteSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import IconTextSection from "@/components/Utility/IconTextSection";
import Image from "next/image";
import styles from "../../styles/ProjectPage.module.scss";
import FAQAugmentedReality from "@/components/FAQAugmentedReality";

export default function AugmentedRealityEntwicklungPage() {
  const router = useRouter();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  let texts = {
    title: "AR Entwicklung für den OP - M-to-B Software",
    description:
      "Wir entwickeln Augmente Reality Anwengunen für komplexe Anforderungen und schaffen neue Technologien.",
    requestButtonText: "Kostenloses Beratungsgespräch",
    headline: <>AR Entwicklung für den OP</>,
    company: <>Universität Leipzig / UPMC Pittsburgh</>,
    headlineText: (
      <p>
        Augmented Reality zur Navigation der Instrumente im OP und zur Lehre
      </p>
    ),
    section1Headline: "Motivation",
    section1Text: (
      <>
        <p>
          Für die Universität Leipzig in Zusammenarbeit mit dem University of
          Pittsburgh Medical Center wird in der Augmented Reality Navigation für
          die Anwendung im OP geforscht.
        </p>
        <p>
          Die Vision einer einfachen und universellen Möglichkeit zur Benutzung
          von Augmented Reality für den Chirurgen führt zu verschiedenen völlig
          neuen Herausforderungen in diesem Gebiet.
        </p>
        <p>
          Zusammen mit der Neurochirurgie des Uniklinikum Leipzig erkunden wir
          fortlaufend Anweundsmöglichkeiten von Augmented Reality für den OP und
          die Lehre.
        </p>
      </>
    ),
    section1Alt: "ERP-Software Beispiel",
    section2Headline: "Ergebnis",
    section2Text: (
      <>
        <p>
          Durch unsere gemeinsame Arbeit entstand schon ein Prototyp für die
          Navigation im menschlichen Gehirn mit einer Hololens 2 Augmented
          Reality Brille. Dabei werden die entsprechenden MRT-Bilder mit der
          Position der Instumentspitze Live in das Sichtfeld eingeblendet.
        </p>
        <p>
          Außerdem entwickelten wir Software zum Darstellen, Zoomen und
          Einblenden von anatomischen Strukturen für die Lehre in der
          Universität. Diese Software verfügt über eine Master-Slave-Möglichkeit
          und kann so auch von mehreren Anwendern gleichzeitig genutzt werden.
        </p>
      </>
    ),
    section2Alt: "ERP-Software Beispiel",
    quote:
      "Sehr schnelle Erfassung der technischen Problemstellung und Realisierung der Softwarelösung.",
  };

  if (router.locale == "en") {
    texts = {
      title: "AR Development for surgery - M-to-B Software",
      description:
        "We develop augmented reality applications for complex requirements and create new technologies.",
      headline: <>AR Development for surgery</>,
      requestButtonText: "Schedule a free consultation",
      company: <>University Leipzig / UPMC Pittsburgh</>,
      headlineText: (
        <p>
          Augmented Reality for navigating the instruments in surgery and for
          teaching
        </p>
      ),
      section1Headline: "Motivation",
      section1Text: (
        <>
          <p>
            For the University of Leipzig in cooperation with the University of
            Pittsburgh Medical Center, research is being carried out into
            augmented reality navigation for use in the operating room.
          </p>
          <p>
            The vision of a simple and universal way of using augmented reality
            for the surgeon leads to various completely new challenges in this
            field.
          </p>
          <p>
            Together with the neurosurgery department of the Leipzig University
            Hospital, we are continuously exploring possible applications of
            augmented reality for the operating room and teaching.
          </p>
        </>
      ),
      section1Alt: "Augmented Reality Software Example",
      section2Headline: "Result",
      section2Text: (
        <>
          <p>
            Our joint work has already resulted in a prototype for navigating in
            the human brain with Hololens 2 augmented reality glasses. The
            corresponding MRI images with the position of the instrument tip are
            displayed in the field of view.
          </p>
          <p>
            We also developed software for displaying, zooming and fading in
            anatomical structures for university teaching. This software has a
            master-slave option and can therefore also be used by several users
            at the same time.
          </p>
        </>
      ),
      section2Alt: "Augmented Reality Development Example",
      quote:
        "Very quick identification of the technical problem and implementation of the software solution.",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/projects/Augmented-Reality-Entwicklung"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/projects/Augmented-Reality-Entwicklung"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        topHeadline={texts.company}
        text={texts.headlineText}
        highlightImage={"/images/projects/project4/project4-header.png"}
        requestButtonText={texts.requestButtonText}
      />
      <main>
        <IconTextSection
          label1="Unity"
          label2="NodeJS"
          label3="ThreeJS"
          icon1={
            <div className={styles.logoWrapper}>
              <Image
                src="/images/technologies/unity.png"
                width={80}
                height={80}
                alt="Unity"
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
                src="/images/technologies/threejs.png"
                width={80}
                height={80}
                alt="ThreeJS"
              />
            </div>
          }
        />
        <CustomShapeDivider flip={true} />
        <ServiceSection
          key={"project4-1"}
          sectionRef={section1Ref}
          headline={texts.section1Headline}
          text={texts.section1Text}
          image="/images/projects/project4/project4-1.jpg"
          imageAlt={texts.section1Alt}
          typewriterKey={"project4-1"}
        />
        <ServiceSection
          key={"project4-2"}
          sectionRef={section2Ref}
          headline={texts.section2Headline}
          text={texts.section2Text}
          image="/images/projects/project4/project4-2.jpg"
          imageAlt={texts.section2Alt}
          typewriterKey={"project4-2"}
        />
        <CustomShapeDivider flip={false} />
        <QuoteSection quote={texts.quote} />
        <ContactSection qnaSection={<FAQAugmentedReality />} />
      </main>
    </>
  );
}
