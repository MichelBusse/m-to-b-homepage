import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import ProjectsSection from "../components/ProjectsSection";
import CustomersSection from "../components/CustomersSection";
import SmallTechnologiesSection, {
  logos,
} from "../components/SmallTechnologiesSection";
import AboutSection from "../components/AboutSection";
import TextSection from "../components/utility/TextSection";
import { useRef } from "react";
import ValuesSection from "../components/ValuesSection";
import CostEstimateSection from "../components/CostEstimateSection";
import IconTextSection from "../components/utility/IconTextSection";
import { HiUsers } from "react-icons/hi";
import { BsCodeSlash, BsGraphUp } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { FaEdit, FaWrench } from "react-icons/fa";
import ARServicesSections from "../components/ARServicesSections";
import FAQAugmentedReality from "../components/FAQAugmentedReality";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AugmentedRealityPage(props: Props) {
  const router = useRouter();

  const textSectionRef = useRef(null);

  const currentYear = Math.max(new Date().getFullYear(), 2024);

  let texts = {
    headline: (
      <>
        Augmented Reality Entwicklung
        <br />- Deine AR-Agentur {currentYear}
      </>
    ),
    text: (
      <>
        <p>
          Du suchst eine Agentur für Augmented Reality Entwicklung?
        </p>
        <p>
          Mit den modernsten Technologien unterstützen wir unsere Kunden bei der
          Realisierung von beeindruckenden AR-Erlebnissen. Vom Marketing bis zur
          Medizin konnten wir bereits in diversen Branchen innovative
          Anwendungen realisieren.
        </p>
        <p>
          Wir begleiten dein Projekt vom Design bis zum Rollout und mit der
          richtigen Strategie zum Ziel.
        </p>
      </>
    ),
    requestButtonText: "Starte die Reise",
    title: `Augmented Reality Entwicklung - AR-Agentur M-to-B - ${currentYear}`,
    description: `Dein Partner für Augmented-Reality-Entwicklung. Als digitale AR-Agentur führen wir dein Projekt mit der richtigen Strategie sicher zum Ziel.`,
    textSectionHeadline: `AR-Consulting`,
    textSectionImageAlt: `Augmented Reality Consulting`,
    textSectionText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Augmented Reality ist relevanter als jemals zuvor. Viele verschiedene
          Technologien und Plattformen bieten ungeahnte Möglichkeiten, aber
          können auch schnell überfordernd wirken.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Die Wahl der richtigen Plattform, die passende Technologie und das
          eigentliche Design sind wichtige Entscheidungen, von denen der Erfolg
          einer AR-Anwendung abhängen kann.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Wir helfen unseren Kunden, sich in der erweiterten Realität
          zurechtzufinden und beraten sie unverbindlich zur Umsetzung ihrer
          Projekte. Sprich mit unseren Experten für AR-Entwicklung und gestalte
          so die beste Strategie für dein Vorhaben.
        </p>
      </>
    ),
    connection: "Verbesserte Kundeninteraktion",
    efficient: "Verbesserte Leistung",
    expand: "Erschließung neuer Märkte",
    concept: "Strategie",
    development: "Implementierung",
    support: "Betreuung",
  };

  if (router.locale == "en") {
    texts = {
      headline: (
        <>
          Augmented Reality Development
          <br />| AR Agency {currentYear}
        </>
      ),
      text: (
        <>
          <p>
            Are you looking for an agency for augmented reality development?
          </p>
          <p>
            We support our customers with the most modern technologies for
            immersive AR experiences. From marketing to medicine, we have
            already been able to implement innovative applications in various
            sectors.
          </p>
          <p>
            We accompany your project from design to rollout and with the right
            strategy to reach your goal.
          </p>
        </>
      ),
      requestButtonText: "Start your journey",
      title: `Augmented Reality Development - AR Agency M-to-B - ${currentYear}`,
      description: `Your partner for modern augmented reality development. As a digital AR agency, we lead your project with the right strategy safely to its goal.`,
      textSectionHeadline: `AR Consulting`,
      textSectionImageAlt: `Augmented Reality Consulting`,
      textSectionText: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Augmented reality is more relevant than ever before. Many different
            technologies and platforms offer unimagined possibilities, but can
            also quickly seem overwhelming.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Choosing the right platform, the right technology and the actual
            design are important decisions on which the success of the AR
            application can depend.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            We help our customers finding their way in augmented reality and
            provide them with non-binding advice on the implementation of their
            projects. Talk to our AR development experts and design the best
            strategy for your project.
          </p>
        </>
      ),
      connection: "Improved Customer Interaction",
      efficient: "Improved Performance",
      expand: "Expansion into new Markets",
      concept: "Strategy",
      development: "Development",
      support: "Support",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href={`https://m-to-b.com/Augmented-Reality-Agentur`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://m-to-b.com/en/Augmented-Reality-Agentur`}
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        requestButtonText={texts.requestButtonText}
        buttonLink="#start"
      />
      <main>
        <div className="scrollAnchor" id="start"></div>
        <ValuesSection />
        <CustomShapeDivider flip={true} />
        <TextSection
          key={"ar1"}
          sectionRef={textSectionRef}
          headline={texts.textSectionHeadline}
          text={texts.textSectionText}
          image="/images/augmented-reality/augmented-reality.jpg"
          imageAlt={texts.textSectionImageAlt}
          typewriterKey={"ar1"}
        />
        <IconTextSection
          icon1={<FaEdit />}
          icon2={<BsCodeSlash />}
          icon3={<FaWrench />}
          label1={texts.concept}
          label2={texts.development}
          label3={texts.support}
        />
        <ARServicesSections />
        <SmallTechnologiesSection
          logos={[logos.unity, logos.mrtk, logos.three, logos.realitykit]}
        />
        <AboutSection />
        <IconTextSection
          icon1={<HiUsers />}
          icon2={<BsGraphUp />}
          icon3={<BiSearchAlt />}
          label1={texts.connection}
          label2={texts.efficient}
          label3={texts.expand}
        />
        <CostEstimateSection />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection
          anchorRefs={props.anchorRefs}
          qnaSection={<FAQAugmentedReality />}
          pageReference={texts.title}
        />
      </main>
    </>
  );
}
