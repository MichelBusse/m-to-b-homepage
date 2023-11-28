import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import IconTextSection from "../components/utility/IconTextSection";
import { FaEdit, FaWrench } from "react-icons/fa";
import { BsCodeSlash, BsGraphUp } from "react-icons/bs";
import TextSection from "../components/utility/TextSection";
import { useRef } from "react";
import ProjectsSection from "../components/ProjectsSection";
import { HiUsers } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import CustomersSection from "../components/CustomersSection";
import SmallTechnologiesSection, {
  logos,
} from "../components/SmallTechnologiesSection";
import FAQAugmentedReality from "../components/FAQAugmentedReality";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AugmentedRealityDevelopmentPage(props: Props) {
  const router = useRouter();

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const agencyRef = useRef(null);

  const currentYear = new Date().getFullYear();

  let texts = {
    headline: <>Augmented Reality Agentur & Entwicklung {currentYear}</>,
    text: (
      <>
        <p>Du suchst eine Agentur für Augmented Reality Entwicklung?</p>
        <p>
          Erweitere deine Realität mit innovativer Technologie und nutze neue
          Möglichkeiten in Marketing, e-Commerce, Bildung oder Industrie.
        </p>
        <p>
          Entdecke in einem unverbindlichen Beratungsgespräch die
          Anwendungsmöglichkeiten für dein Unternehmen!
        </p>
      </>
    ),
    requestButtonText: "Kostenloses Beratungsgespräch",
    title: `Augmented Reality Entwicklung - App-Agentur M-to-B - ${currentYear}`,
    description:
      "Erlebe die Zukunft mit unserer Augmented Reality Agentur. Entdecke Einsatzmöglichkeiten und individuelle Lösungen für Marketing, Bildung und Industrie.",
    concept: "Strategie",
    development: "Implementierung",
    support: "Betreuung",
    headlineSection1: "Warum Augmented Reality?",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Augmented Reality ist eine Technologie, die die reale Welt um uns
          herum mit digitalen Inhalten erweitert. Mit AR können Bilder, Objekte,
          Animationen und andere digitale Elemente in die reale Welt eingebettet
          werden, um eine immersive Erfahrung zu schaffen.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Unternehmen können Augmented Reality in zahlreichen Bereichen nutzen.
          Sie können AR-Anwendungen entwickeln, um ihre Produkte zu präsentieren
          oder um Schulungen und Trainings für ihre Mitarbeiter zu gestalten.
          Als Agentur konnten wir schon neue Technologien in der Medizin und in
          der Chirurgie mit AR zum Einsatz bringen.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Die Möglichkeiten der AR-Technologie sind vielfältig und manchmal
          überfordernd. Wir helfen dir dabei Klarheit zu behalten und die
          richtige AR-Lösung für deine Bedürfnisse zu entwickeln.
        </p>
      </>
    ),
    headlineSection2: "Augmented Reality Plattformen",
    textSection2: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Wo man Augmented Reality einsetzt ist vielfältig und abhängig vom
          Projekt und der Zeilgruppe. Wir bieten sowohl Entwicklung für bekannte
          VR- und AR-Brillen wie{" "}
          <a
            href="https://www.bechtle.com/marken/microsoft-surface/microsoft-hololens-2"
            target={"_blank"}
            style={{ textDecoration: "underline" }}
            rel="noreferrer"
          >
            Hololens 2
          </a>{" "}
          oder{" "}
          <a
            href="https://www.meta.com/de/quest/quest-pro/"
            target={"_blank"}
            style={{ textDecoration: "underline" }}
            rel="noreferrer"
          >
            Meta Quest Pro
          </a>
          , aber auch für etablierte Plattformen.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Als mobile App für Android und iOS oder auch vollständig im Web ist
          Augmented Reality effektiv einsetzbar und bietet damit eine hohe
          Zugänglichkeit für alle Zielgruppen.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Mit den richtigen Technologien optimieren wir deine AR-Anwendung für
          eine beeindruckende und flüssige Nutzererfahrung und lassen deine
          Anwender staunen.
        </p>
      </>
    ),
    headlineSection3: "3D-Modellierung bis Entwicklung",
    textSection3: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Als Full-Service AR Agentur begleiten wir dich durch den gesamten
          Prozess deines Projekts.
        </p>
        <ol>
          <li style={{ transitionDelay: "0.6s" }}>
            <b>Strategie:</b> Hier wird das Ziel deiner Augmented Reality
            Anwendung bestimmt und ein Konzept erstellt, mit welchen Techniken
            dieses Ziel am effizientesten erreicht wird.
          </li>
          <li style={{ transitionDelay: "0.9s" }}>
            <b>Design:</b> Das Layout der Software wird erstellt und alle
            3D-Assets vorbereitet, durch 3D-Modellierung oder Scannen.
          </li>
          <li style={{ transitionDelay: "1.2s" }}>
            <b>Implementierung:</b> In diesem Schritt wird deine Idee Realität.
            Deine AR-App erhält ihre Funktionen und wird zu einem fertigen
            Produkt.
          </li>
          <li style={{ transitionDelay: "1.5s" }}>
            <b>Betreuung:</b> Nach der Fertigstellung stehen wir dir zur
            Verfügung um Probleme zu beheben oder deine Anwendung regelmäßig zu
            aktualisieren.
          </li>
        </ol>
      </>
    ),
    connection: "Verbesserte Kundeninteraktion",
    efficient: "Verbesserte Leistung",
    expand: "Erschließung neuer Märkte",
    agencyHeadline: "Warum unsere Augmented Reality Agentur?",
    agencyText: (
      <>
        <p>
          Wir setzen auf Kommunikation - In unseren Projekten haben wir
          festgestellt, dass der Erfolg deiner AR-Anwendung vor allem davon
          abhängt, dass wir deine Ziele richtig verstehen und nicht nur blind
          entwickeln. Deshalb wirst du bei uns nicht nur während der
          Entwicklung, sondern vor allem bei der Planung von den richtigen
          Experten unterstützt.
        </p>
        <p style={{ transitionDelay: "0.3s" }}>
          Du hast die Möglichkeit auf häufige Rücksprache und gemeinsames
          Brainstorming wobei wir dir helfen, die richtigen Schritte für dein
          Ziel zu unternehmen.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          In unserem unverbindlichem Erstgespräch kannst du deine Fragen
          beantworten lassen und bekommst einen Vorgeschmack auf die Arbeit mit
          unseren Experten.
        </p>
      </>
    ),
    agencyAlt: "Augmented Reality Agentur",
  };

  if (router.locale == "en") {
    texts = {
      headline: <>Augmented Reality Agency & Development {currentYear}</>,
      text: (
        <>
          <p>
            Are you looking for an agency for augmented reality development?
          </p>
          <p>
            Expand your reality with innovative technology and use new
            possibilities in marketing, e-commerce, education or industry.
          </p>
          <p>
            Discover the possible applications for your company in a non-binding
            consultation.
          </p>
        </>
      ),
      requestButtonText: "Schedule a free consultation",
      title: `Augmented Reality Development - App Agency M-to-B - ${currentYear}`,
      description:
        "Experience the future with our augmented reality agency. Discover possible uses and individual solutions for marketing, education and industry.",
      concept: "Strategy",
      development: "Development",
      support: "Support",
      headlineSection1: "Why Augmented Reality?",
      textSection1: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Augmented Reality is a technology that augments the real world
            around us with digital content. With AR, images, objects,
            animations, and other digital elements can be embedded in the real
            world to create an immersive experience.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Companies can use augmented reality in numerous areas. You can
            develop AR applications to present your products or to design
            training courses for your employees. As an agency, we have already
            been able to use new technologies in medicine and surgery with AR.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            The possibilities of AR technology are diverse and sometimes
            overwhelming. We help you to keep clarity and to develop the right
            AR solution for your needs.
          </p>
        </>
      ),
      headlineSection2: "Augmented Reality Platforms",
      textSection2: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Where Augmented Reality is used is diverse and depends on the
            project and the target group. We offer development for well-known VR
            and AR glasses such as{" "}
            <a
              href="https://www.bechtle.com/marken/microsoft-surface/microsoft-hololens-2"
              target={"_blank"}
              style={{ textDecoration: "underline" }}
              rel="noreferrer"
            >
              Hololens 2
            </a>{" "}
            and{" "}
            <a
              href="https://www.meta.com/de/quest/quest-pro/"
              target={"_blank"}
              style={{ textDecoration: "underline" }}
              rel="noreferrer"
            >
              Meta Quest Pro
            </a>
            , but also for established platforms.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Augmented Reality can be used effectively as a mobile app for
            Android and iOS or as a fully web-based app and thus offers a high
            level of accessibility for all target groups.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            With the right technologies, we optimize your AR application for an
            impressive and smooth user experience and amaze your users.
          </p>
        </>
      ),
      headlineSection3: "3D-Modellierung bis Entwicklung",
      textSection3: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Als Full-Service AR Agentur begleiten wir dich durch den gesamten
            Prozess deines Projekts.
          </p>
          <ol>
            <li style={{ transitionDelay: "0.6s" }}>
              <b>Strategie:</b> Hier wird das Ziel deiner Augmented Reality
              Anwendung bestimmt und ein Konzept erstellt, mit welchen Techniken
              dieses Ziel am effizientesten erreicht wird.
            </li>
            <li style={{ transitionDelay: "0.9s" }}>
              <b>Design:</b> Das Layout der Software wird erstellt und alle
              3D-Assets vorbereitet, durch 3D-Modellierung oder Scannen.
            </li>
            <li style={{ transitionDelay: "1.2s" }}>
              <b>Implementierung:</b> In diesem Schritt wird deine Idee
              Realität. Deine AR-App erhält ihre Funktionen und wird zu einem
              fertigen Produkt.
            </li>
            <li style={{ transitionDelay: "1.5s" }}>
              <b>Betreuung:</b> Nach der Fertigstellung stehen wir dir zur
              Verfügung um Probleme zu beheben oder deine Anwendung regelmäßig
              zu aktualisieren.
            </li>
          </ol>
        </>
      ),
      connection: "Improved Customer Interaction",
      efficient: "Improved Performance",
      expand: "Expansion into new Markets",
      agencyHeadline: "Why our Augmented Reality Agency?",
      agencyText: (
        <>
          <p>
            We focus on communication - In our projects, we have found that the
            success of your software depends on us understanding your goal
            correctly instead of blindly executing the development. Therefore,
            you are supported not only during development, but above all in
            planning of your software by the right experts.
          </p>
          <p style={{ transitionDelay: "0.3s" }}>
            You have the opportunity for frequent consultation and brainstorming
            together, whereby we help you to take the right steps towards your
            goal.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            In our relaxed initial meeting, you can have your questions answered
            and get a foretaste of working with our experts.
          </p>
        </>
      ),
      agencyAlt: "Augmented Reality Agency",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/Augmented-Reality-Agentur"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/Augmented-Reality-Agentur"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        highlightImage={
          "/images/augmented-reality/augmented-reality-header.png"
        }
        highlightImageAlt="Augmented Reality Agentur & Entwicklung"
        requestButtonText={texts.requestButtonText}
      />
      <main>
        <IconTextSection
          icon1={<FaEdit />}
          icon2={<BsCodeSlash />}
          icon3={<FaWrench />}
          label1={texts.concept}
          label2={texts.development}
          label3={texts.support}
        />
        <CustomShapeDivider flip={true} />
        <div className="scrollAnchor" id="main"></div>
        <TextSection
          key={"vr1"}
          sectionRef={section1Ref}
          headline={texts.headlineSection1}
          text={texts.textSection1}
          image="/images/augmented-reality/augmented-reality.jpg"
          imageAlt={texts.headlineSection1}
          typewriterKey={"vr1"}
        />
        <TextSection
          key={"vr2"}
          sectionRef={section2Ref}
          headline={texts.headlineSection2}
          text={texts.textSection2}
          image="/images/augmented-reality/car.jpg"
          imageAlt={texts.headlineSection2}
          typewriterKey={"vr2"}
        />
        <IconTextSection
          icon1={<HiUsers />}
          icon2={<BsGraphUp />}
          icon3={<BiSearchAlt />}
          label1={texts.connection}
          label2={texts.efficient}
          label3={texts.expand}
        />
        <TextSection
          key={"vr3"}
          sectionRef={section3Ref}
          headline={texts.headlineSection3}
          text={texts.textSection3}
          image="/images/augmented-reality/model.jpg"
          imageAlt={texts.headlineSection3}
          typewriterKey={"vr3"}
        />
        <SmallTechnologiesSection
          logos={[logos.unity, logos.mrtk, logos.three, logos.opencv]}
        />
        <TextSection
          key={"vr4"}
          sectionRef={agencyRef}
          headline={texts.agencyHeadline}
          text={texts.agencyText}
          image="/images/agency.png"
          imageAlt={texts.agencyAlt}
          typewriterKey={"vr4"}
        />
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
