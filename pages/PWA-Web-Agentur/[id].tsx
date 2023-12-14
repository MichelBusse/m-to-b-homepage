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
import FAQAugmentedReality from "../../components/FAQAugmentedReality";
import WebServicesSections from "../../components/WebServicesSections";

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
        Mission: Web-Entwicklung
        <br />Ziel: {props.id} {currentYear}
      </>
    ),
    text: (
      <>
        <p>
          Du suchst eine Agentur für Web-Entwicklung in {props.id}?
        </p>
        <p>
          Die Entwicklung von Web-Anwendungen kann schnell kompliziert werden
          und viel Zeit und Budget verschlingen. Die Wahl der richtigen
          Technologie, ein passender Entwicklungsplan und ein zielorientiertes
          Design sind wichtige Bestandteile einer erfolgreichen Web-App.
        </p>
        <p>
          Wir begleiten dein Projekt persönlich vom Design bis zum Upload und
          mit der richtigen Strategie sicher zum Ziel.
        </p>
      </>
    ),
    requestButtonText: "Starte die Reise",
    title: `Web-Entwicklung ${props.id} - Web-Agentur M-to-B - ${currentYear}`,
    description: `Dein Partner für Web-Entwicklung und PWAs in ${props.id}. Als digitale Web-Agentur führen wir dein Projekt mit der richtigen Strategie sicher zum Ziel.`,
    textSectionHeadline: `Web-Consulting für ${props.id}`,
    textSectionImageAlt: `Web-Entwicklung Consulting ${props.id}`,
    textSectionText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Umfangreiche Web-Projekte erfordern ausreichend Planung. Wir helfen{" "}
          {props.id}er Unternehmen durch den Dschungel der Web-Entwicklung und
          beraten sie bei der Wahl der richtigen Strategie.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Mit dem rasanten Fortschritt in der Web-Technologie kann es oft auch
          schwer sein, den Überblick zu behalten. Unsere Experten helfen dir
          dabei, den richtigen Weg für dein Projekt zu finden und stehen dir in
          einem unverbindlichen Gespräch für alle Fragen ausführlich zur
          Verfügung.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          So stellen wir sicher, dass du zu allen Möglichkeiten für dein
          Vorhaben informiert bist und dein Projekt möglichst effizient zum
          Erfolg geführt wird.
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
          Web Development {props.id}
          <br />| Web Agency {currentYear}
        </>
      ),
      text: (
        <>
          <p>
            Are you looking for an agency for web development in{" "}
            {props.id}?
          </p>
          <p>
            Developing web applications can quickly become complicated and
            consume a lot of time and budget. Choosing the right technology, a
            suitable development plan and a goal-oriented design are important
            components of a successful web app.
          </p>
          <p>
            We accompany your project personally from design to upload and with
            the right strategy to reach your goal.
          </p>
        </>
      ),
      requestButtonText: "Start your journey",
      title: `Web Development ${props.id} - Web Agency M-to-B - ${currentYear}`,
      description: `Your partner for web development and PWAs in ${props.id}. As a digital web agency, we guide your project safely to its goal with the right strategy.`,
      textSectionHeadline: `Web Consulting for ${props.id}`,
      textSectionImageAlt: `Web Development Consulting ${props.id}`,
      textSectionText: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Large web projects require sufficient planning. We help {props.id}
            companies through the jungle of web development and advise them on
            choosing the right strategy.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            With the rapid progress in web technology, it can often be difficult
            to keep track of things. Our experts will help you find the right
            path for your project and will be available to answer any questions
            you may have in detail in a non-binding conversation.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            This is how we ensure that you are informed about all the options
            for your project and that your project is led to success as
            efficiently as possible.
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
          href={`https://m-to-b.com/PWA-Web-Agentur/${props.id}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://m-to-b.com/en/PWA-Web-Agentur/${props.id}`}
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        requestButtonText={texts.requestButtonText}
        buttonLink="#start"
        highlightImage={"/images/pwa-web-agency/header.png"}
        highlightImageAlt={texts.title}
      />
      <main>
        <div className="scrollAnchor" id="start"></div>
        <ValuesSection />
        <CustomShapeDivider flip={true} />
        <TextSection
          key={"webCity1"}
          sectionRef={textSectionRef}
          headline={texts.textSectionHeadline}
          text={texts.textSectionText}
          image="/images/pwa-web-agency/consulting.png"
          imageAlt={texts.textSectionImageAlt}
          typewriterKey={"webCity1"}
        />
        <IconTextSection
          icon1={<FaEdit />}
          icon2={<BsCodeSlash />}
          icon3={<FaWrench />}
          label1={texts.concept}
          label2={texts.development}
          label3={texts.support}
        />
        <WebServicesSections />
        <SmallTechnologiesSection
          logos={[logos.react, logos.nest, logos.postgre, logos.next]}
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
          locationLink={`/PWA-Web-Agentur/${props.id}`}
          pageReference={texts.title}
        />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    "Berlin", // 31
    "Hamburg", // 25
    "München", // 28
    "Köln", // 26
    "Frankfurt", // 23
    "Stuttgart", // 25
    "Düsseldorf", // 10
    "Leipzig", // 4
    "Dortmund", // 11
    "Essen", // 7
    "Bremen", // 13
    "Dresden", // 6
    "Hannover", // 15
    "Nürnberg", // 11
    "Duisburg", // 6
    "Bochum", // 8
    "Wuppertal", // 7
    "Bielefeld", // 6
    "Bonn", // 10
    "Münster", // 9
    "Mannheim", // 9
    "Karlsruhe", // 14
    "Augsburg", // 10
    "Wiesbaden", // 6
    "Mönchengladbach", // 4
    "Gelsenkirchen", // 2
    "Aachen", // 7
    "Braunschweig", // 5
    "Chemnitz", // 8
    "Kiel", // 5
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
