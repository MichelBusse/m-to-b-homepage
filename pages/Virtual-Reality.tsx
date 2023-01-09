import Header from "../components/home/header";
import ContactSection from "../components/home/contactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import IconTextSection from "../components/iconTextSection";
import { FaEdit, FaWrench } from "react-icons/fa";
import { BsCodeSlash, BsGraphUp } from "react-icons/bs";
import ServiceSection from "../components/services/ServiceSection";
import { useRef } from "react";
import ProjectsSection from "../components/home/projectsSection";
import { HiUsers } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import CustomersSection from "../components/home/customersSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  const virtualRealityRef = useRef(null);
  const augmentedRealityRef = useRef(null);
  const agencyRef = useRef(null);

  let texts = {
    headline: <>Virtual & Augmented Reality</>,
    text: (
      <>
        <p>
          Erweitern Sie Ihre Welt mit innovativer Technologie: Virtual &
          Augmented Reality-Lösungen für Unternehmen und Endverbraucher.
        </p>
        <p>
          Nutzen Sie unsere kostenlose Beratung und senden Sie uns jetzt eine Anfrage!
        </p>
      </>
    ),
    button: "Beratungsgespräch vereinbaren!",
    title: "Virtual & Augmented Reality - M-to-B",
    description:
      "Erleben Sie die Zukunft der Realität durch Virtual Reality (VR) und Augmented Reality (AR) von unserer Software Agentur. Wir entwickeln VR und AR Apps!",
    concept: "Konzeption und Planung",
    development: "Entwicklung und Implementierung",
    support: "Wartung und Support",
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
          Kontaktieren Sie uns, um mehr über unsere Leistungen zu erfahren.
        </p>
      </>
    ),
    virtualRealityAlt: "Virtual Reality",
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
          AR-Lösung für Ihre Bedürfnisse zu entwickeln und umzusetzen.
        </p>
      </>
    ),
    augmentedRealityAlt: "Augmented Reality",
    connection: "Verbesserte Kundeninteraktion und -bindung",
    efficient: "Verbessert die Effizienz und Leistung",
    expand: "Neue Märkte erschließen",
    agencyHeadline: "Warum unsere Software Agentur?",
    agencyText: (
      <>
        <p>
          Unser erfahrenes Entwicklerteam verfügt über die
          nötigen Fähigkeiten und Erfahrungen, um Ihnen hochwertige VR- und
          AR-Anwendungen anzubieten. Wir haben bereits erfolgreich in
          verschiedenen Branchen Projekte durchgeführt und können Ihnen daher
          wertvolle Einsichten und Lösungen für Ihr Unternehmen bieten.
          Zusätzlich bieten wir eine flexible und individuelle Betreuung, um
          sicherzustellen, dass wir Ihren Anforderungen entsprechen und Ihnen
          die bestmögliche Unterstützung bieten. Wir sind überzeugt, dass wir
          die richtige Wahl für Ihre VR- und AR-Entwicklungsprojekte sind.
          Kontaktieren Sie uns noch heute, um mehr über unsere Leistungen zu
          erfahren!
        </p>
      </>
    ),
    agencyAlt: "Software Agentur",
  };

  if (router.locale == "en") {
    texts = {
      headline: <>Virtual & Augmented Reality</>,
      text: (
        <>
          <p>
            Elevate Your Reality: Professional Virtual & Augmented Reality
            Development for Businesses and Consumers.
          </p>
          <p>Take advantage of our advisory and send us your request.</p>
        </>
      ),
      button: "Schedule a free consultation!",
      title: "Virtual & Augmented Reality - M-to-B",
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
      virtualRealityAlt: "Virtual Reality",
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
      augmentedRealityAlt: "Augmented Reality",
      connection: "Improved customer interaction and engagement",
      efficient: "Improve Efficiency and Performance",
      expand: "Expansion into new markets",
      agencyHeadline: "Why our Software Agency?",
      agencyText: (
        <>
          <p>
            Our experienced development team has the necessary
            skills and experience to provide you with high-quality VR and AR
            applications. We have already successfully completed projects in
            various industries and can therefore offer you valuable insights and
            solutions for your company. In addition, we offer flexible and
            individual support to ensure that we meet your requirements and
            provide you with the best possible support. We are convinced that we
            are the right choice for your VR and AR development projects.
            Contact us today to learn more about our services!
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
          href="https://m-to-b.com/Virtual-Reality"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/Virtual-Reality"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        button={texts.button}
        highlightImage={"/images/virtual-reality/virtual-reality-header.png"}
        highlightImageAlt="Individualsoftware"
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
          key={1}
          sectionRef={virtualRealityRef}
          headline={texts.virtualRealityHeadline}
          text={texts.virtualRealityText}
          image="/images/virtual-reality/virtual-reality.png"
          imageAlt={texts.virtualRealityAlt}
          typewriterKey={"1"}
        />
        <ServiceSection
          key={2}
          sectionRef={augmentedRealityRef}
          headline={texts.augmentedRealityHeadline}
          text={texts.augmentedRealityText}
          image="/images/virtual-reality/augmented-reality.png"
          imageAlt={texts.augmentedRealityAlt}
          typewriterKey={"2"}
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
          typewriterKey={"3"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
