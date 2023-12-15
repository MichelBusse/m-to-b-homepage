import Header from "../../components/Header";
import ContactSection from "../../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../../components/CustomShapeDivider";
import { AnchorRefs } from "../_app";
import { useRouter } from "next/router";
import ProjectsSection from "../../components/ProjectsSection";
import CustomersSection from "../../components/CustomersSection";
import SmallTechnologiesSection, {
  logos,
} from "../../components/SmallTechnologiesSection";
import AboutSection from "../../components/AboutSection";
import TextSection from "../../components/utility/TextSection";
import { useRef } from "react";
import ValuesSection from "../../components/ValuesSection";
import CostEstimateSection from "../../components/CostEstimateSection";
import IconTextSection from "../../components/utility/IconTextSection";
import { HiUsers } from "react-icons/hi";
import { BsCodeSlash, BsGraphUp } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { FaEdit, FaWrench } from "react-icons/fa";
import ARServicesSections from "../../components/ARServicesSections";
import FAQAugmentedReality from "../../components/FAQAugmentedReality";

type Props = {
  anchorRefs: AnchorRefs;
  id: string;
};

export default function AugmentedRealityCityPage(props: Props) {
  const router = useRouter();

  const textSectionRef = useRef(null);

  const currentYear = Math.max(new Date().getFullYear(), 2024);

  let texts = {
    headline: (
      <>
        Augmented Reality {props.id}
        <br />- Deine AR-Agentur {currentYear}
      </>
    ),
    text: (
      <>
        <p>
          Du suchst eine Agentur für Augmented Reality Entwicklung in {props.id}
          ?
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
    title: `Augmented Reality ${props.id} - AR-Agentur M-to-B - ${currentYear}`,
    description: `Dein Partner für Augmented-Reality-Entwicklung in ${props.id}. Als digitale AR-Agentur führen wir dein Projekt mit der richtigen Strategie sicher zum Ziel.`,
    textSectionHeadline: `AR-Consulting für ${props.id}`,
    textSectionImageAlt: `Augmented Reality Consulting ${props.id}`,
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
          Wir helfen {props.id}er Unternehmen, sich in der erweiterten Realität
          zurechtzufinden und beraten sie unverbindlich zur Umsetzung ihrer
          Projekte. Sprich mit unseren Experten für AR-Entwicklung und gestalte
          so die beste Strategie für dein Vorhaben.
        </p>
      </>
    ),
    connection: "Nutzerfreundlich",
    efficient: "Skalierbar",
    expand: "Transparent",
    concept: "Strategie",
    development: "Implementierung",
    support: "Betreuung",
  };

  if (router.locale == "en") {
    texts = {
      headline: (
        <>
          Augmented Reality {props.id}
          <br />| AR Agency {currentYear}
        </>
      ),
      text: (
        <>
          <p>
            Are you looking for an agency for augmented reality development in{" "}
            {props.id}?
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
      title: `Augmented Reality ${props.id} - AR Agency M-to-B - ${currentYear}`,
      description: `Your partner for augmented reality development in ${props.id}. As a digital AR agency, we lead your project with the right strategy safely to its goal.`,
      textSectionHeadline: `AR Consulting for ${props.id}`,
      textSectionImageAlt: `Augmented Reality Consulting ${props.id}`,
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
            We help {props.id} companies finding their way in augmented reality
            and provide them with non-binding advice on the implementation of
            their projects. Talk to our AR development experts and design the
            best strategy for your project.
          </p>
        </>
      ),
      connection: "User-friendly",
      efficient: "Scalable",
      expand: "Transparent",
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
          href={`https://m-to-b.com/Augmented-Reality-Agentur/${props.id}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://m-to-b.com/en/Augmented-Reality-Agentur/${props.id}`}
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
          key={"arCity1"}
          sectionRef={textSectionRef}
          headline={texts.textSectionHeadline}
          text={texts.textSectionText}
          image="/images/augmented-reality/augmented-reality.jpg"
          imageAlt={texts.textSectionImageAlt}
          typewriterKey={"arCity1"}
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
          location={props.id}
          locationLink={`/Augmented-Reality-Agentur/${props.id}`}
          qnaSection={<FAQAugmentedReality />}
          pageReference={texts.title}
        />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    "Berlin", // 8
    "Hamburg", // 7
    "München", // 9
    "Köln", // 4
    "Frankfurt", // 2
    "Stuttgart", // 6
    "Düsseldorf", // 5
    "Leipzig", // 3
    "Dortmund", // 2
    "Essen", // 1
    "Bremen", // 2
    "Dresden", // 3
    "Hannover", // 1
    "Nürnberg", // 1
    "Duisburg", // 1
    "Bochum", // 1
    "Wuppertal", // 1
    "Bielefeld", // 1
    "Bonn", // 1
    "Münster", // 1
    "Mannheim", // 1
    "Karlsruhe", // 1
    "Augsburg", // 4
    "Wiesbaden", // 1
    "Mönchengladbach", // 1
    "Gelsenkirchen", // 1
    "Aachen", // 1
    "Braunschweig", // 1
    "Chemnitz", // 1
    "Kiel", // 2
    "Halle", // 5
    "Magdeburg", // 5
    "Freiburg", // 7
    "Krefeld", // 5
    "Mainz", // 6
    "Lübeck", // 8
    "Erfurt", // 8
    "Oberhausen", // 2
    "Rostock", // 4
    "Kassel", // 3
    "Hagen", // 2
    // Ab hier weiter
    "Potsdam", // 3
    "Saarbrücken", // 8
    "Hamm", // 3
    "Ludwigshafen", // 3
    "Oldenburg", // 6
    "Mülheim", // 2
    "Osnabrück", // 4
    "Leverkusen", // 2
    "Heidelberg", // 7
    "Darmstadt", // 7
    "Solingen", // 2
    "Regensburg", // 6
    "Herne", // 1
    "Paderborn", // 8
    "Neuss", // 2
    "Ingolstadt", // 5
    "Offenbach", // 2
    "Fürth", // 2
    "Ulm", // 7
    "Heilbronn", // 7
    "Pforzheim", // 6
    "Würzburg", // 10
    "Wolfsburg", // 2
    "Göttingen", // 6
    "Bottrop", // 1
    "Reutlingen", // 6
    "Erlangen", // 3
    "Bremerhaven", // 1
    "Koblenz", // 7
    "Remscheid", // 1
    "Trier", // 6
    "Recklinghausen", // 2
    "Jena", // 5
    "Moers", // 2
    "Salzgitter", // 2
    "Siegen", // 4
    "Gütersloh", // 2
    "Hildesheim",
    "Hanau", // 1
    "Kaiserslautern", // 3
    "Cottbus", // 2
    "Schwerin", // 2
    "Witten", // 3
    "Esslingen", // 3
    "Ludwigsburg", // 3
    "Gießen", // 2
    "Gera", // 2
    "Düren", // 1
    "Tübingen",
    "Flensburg", // 6
    "Iserlohn", // 1
    "Ratingen", // 1
    "Villingen-Schwenningen", // 3
    "Zwickau", // 2
  ];
  return {
    paths: paths.flatMap((path) => [
      { params: { id: path }, locale: "de" },
      { params: { id: path }, locale: "en" },
    ]),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  return {
    props: {
      id: params.id,
    },
  };
}
