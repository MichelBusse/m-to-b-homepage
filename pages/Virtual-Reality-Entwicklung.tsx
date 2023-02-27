import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import IconTextSection from "../components/IconTextSection";
import { FaEdit, FaWrench } from "react-icons/fa";
import { BsCodeSlash, BsGraphUp } from "react-icons/bs";
import ServiceSection from "../components/ServiceSection";
import { useRef } from "react";
import ProjectsSection from "../components/ProjectsSection";
import { HiUsers } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import CustomersSection from "../components/CustomersSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function VirtualRealityDevelopmentPage(props: Props) {
  const router = useRouter();

  const virtualRealityRef = useRef(null);
  const augmentedRealityRef = useRef(null);
  const agencyRef = useRef(null);

  let texts = {
    headline: <>Virtual & Augmented Reality Entwicklung</>,
    text: (
      <>
        <p>
          Erweiter deine Realität mit innovativer Technologie: Virtual &
          Augmented Reality-Lösungen für Unternehmen und Endverbraucher.
        </p>
        <p>
          Nutzen unsere kostenlose Beratung und entdecke deine
          Anwendungsmöglichkeiten!
        </p>
      </>
    ),
    requestButtonText: "Kostenloses Beratungsgespräch",
    title: "Virtual & Augmented Reality Entwicklung - M-to-B",
    description:
      "Erlebe die Zukunft der Realität durch Virtual und Augmented Reality Entwicklung. Entdecke deine Einsatzmöglichkeiten!",
    concept: "Strategie",
    development: "Implementierung",
    support: "Betreuung",
    virtualRealityHeadline: "Was ist Virtual Reality (VR)?",
    virtualRealityText: (
      <>
        <p>
          Virtual Reality ist eine computergenerierte Simulation, die es dem
          Benutzer ermöglicht, in eine künstliche Welt einzutauchen und diese zu
          erleben, als wäre sie real. Dies wird mithilfe von VR-Brillen
          erreicht, die dem Benutzer das Gefühl vermitteln, tatsächlich in der
          virtuellen Welt zu sein. VR-Technologie kann in vielen Bereichen
          eingesetzt werden, wie zum Beispiel in der Unterhaltung, in der
          Ausbildung, im Marketing, in der Architektur und in vielen anderen.
          Unsere Software Agentur bietet professionelle Unterstützung bei der
          Entwicklung von VR-Anwendungen für Unternehmen und Endverbraucher.
        </p>
      </>
    ),
    virtualRealityAlt: "Virtual Reality Entwicklung",
    augmentedRealityHeadline: "Was ist Augmented Reality (AR)?",
    augmentedRealityText: (
      <>
        <p>
          Augmented Reality ist eine Technologie, die die reale Welt um uns
          herum mit digitalen Inhalten erweitert. Mit AR können Bilder, Videos,
          Animationen und andere digitale Elemente in die reale Welt eingebettet
          werden, um eine immersive Erfahrung zu schaffen.
        </p>
        <p>
          Für Unternehmen gibt es zahlreiche Möglichkeiten, AR zu nutzen. Sie
          können zum Beispiel AR-Anwendungen entwickeln, um ihre Produkte zu
          präsentieren oder um Schulungen und Trainings für ihre Mitarbeiter zu
          gestalten. Außerdem konnten wir zum Beispiel schon völlig neue
          Technologien in der Medizin mit AR-Brillen entwickeln. Endverbraucher
          können von AR-Erlebnissen profitieren, indem sie zum Beispiel digitale
          Inhalte über ihr Smartphone direkt in ihrer Umgebung anzeigen lassen.
        </p>
        <p>
          Die Möglichkeiten der AR-Technologie sind vielfältig und bieten
          zahlreiche Vorteile. Wir können Ihnen dabei helfen, die richtige
          AR-Lösung für deine Bedürfnisse zu entwickeln und umzusetzen.
        </p>
      </>
    ),
    augmentedRealityAlt: "Augmented Reality Entwicklung",
    connection: "Verbesserte Kundeninteraktion und -bindung",
    efficient: "Verbessert die Effizienz und Leistung",
    expand: "Neue Märkte erschließen",
    agencyHeadline: "Warum unsere Software Agentur?",
    agencyText: (
      <>
        <p>
          Wir setzen auf Kommunikation - In unseren Projekten haben wir
          festgestellt, dass der Erfolg deiner Software vor allem davon abhängt,
          dass wir deine Ziele richtig verstehen und nicht nur blind entwickeln.
          Deshalb wirst du bei uns nicht nur während der Entwicklung, sondern
          vor allem bei der Planung deiner Software von den richtigen Experten
          unterstützt.
        </p>
        <p style={{ transitionDelay: "0.3s" }}>
          Du hast die Möglichkeit für häufige Rücksprache und gemeinsames
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
    agencyAlt: "Software Agentur",
  };

  if (router.locale == "en") {
    texts = {
      headline: <>Virtual & Augmented Reality Development</>,
      text: (
        <>
          <p>
            Elevate Your Reality: Professional Virtual & Augmented Reality
            Development for Businesses and Consumers.
          </p>
          <p>Take advantage of our advisory and send us your request.</p>
        </>
      ),
      requestButtonText: "Free consultation",
      title: "Virtual & Augmented Reality Development - M-to-B",
      description:
        "Experience the future of reality through Virtual Reality (VR) and Augmented Reality (AR) from our software agency. We develop VR and AR apps!",
      concept: "Conception and Planning",
      development: "Development and Implementation",
      support: "Maintenance and Support",
      virtualRealityHeadline: "What is Virtual Reality (VR)?",
      virtualRealityText: (
        <>
          <p>
            Virtual Reality (VR) is a computer-generated simulation that allows
            the user to immerse themselves in an artificial world and experience
            it as if it were real. This is achieved using VR headsets, which
            give the user the feeling of actually being in the virtual world. VR
            technology can be used in many areas such as entertainment,
            education, marketing, architecture and many others. Our software
            agency offers professional support in the development of VR
            applications for businesses and consumers. Contact us to learn more
            about our services.
          </p>
        </>
      ),
      virtualRealityAlt: "Virtual Reality Development",
      augmentedRealityHeadline: "What is Augmented Reality (AR)?",
      augmentedRealityText: (
        <>
          <p>
            Augmented Reality (AR) is a technology that enhances the real world
            around us with digital content. With AR, images, videos, animations,
            and other digital elements can be embedded into the real world to
            create an immersive experience.
          </p>

          <p>
            For companies, there are many possibilities to use AR. They can
            develop AR apps to present their products or to create trainings and
            workshops for their employees. Furthermore, we could already
            implement totally new use cases of AR in healthcare and surgery.
            Customers can benefit from AR experiences by displaying digital
            content through their smartphone or an AR headset directly in their
            surroundings.
          </p>

          <p>
            The possibilities of AR technology are diverse and offer numerous
            benefits for companies as well as customers. A software agency can
            help to develop and implement the right AR solution for your needs.
          </p>
        </>
      ),
      augmentedRealityAlt: "Augmented Reality Development",
      connection: "Improved customer interaction and engagement",
      efficient: "Improve Efficiency and Performance",
      expand: "Expansion into new markets",
      agencyHeadline: "Why our Software Agency?",
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
      agencyAlt: "Software Agency",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/Virtual-Reality-Entwicklung"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/Virtual-Reality-Entwicklung"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        highlightImage={"/images/virtual-reality/virtual-reality-header.png"}
        highlightImageAlt="Virtual & Augmented Reality"
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
        <ServiceSection
          key={"vr1"}
          sectionRef={virtualRealityRef}
          headline={texts.virtualRealityHeadline}
          text={texts.virtualRealityText}
          image="/images/virtual-reality/virtual-reality.png"
          imageAlt={texts.virtualRealityAlt}
          typewriterKey={"vr1"}
        />
        <ServiceSection
          key={"vr2"}
          sectionRef={augmentedRealityRef}
          headline={texts.augmentedRealityHeadline}
          text={texts.augmentedRealityText}
          image="/images/virtual-reality/augmented-reality.png"
          imageAlt={texts.augmentedRealityAlt}
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
        <ServiceSection
          key={3}
          sectionRef={agencyRef}
          headline={texts.agencyHeadline}
          text={texts.agencyText}
          image="/images/agency.png"
          imageAlt={texts.agencyAlt}
          typewriterKey={"vr3"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
