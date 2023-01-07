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
import { HiScissors } from "react-icons/hi";
import { MdSecurity } from "react-icons/md";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  const individualsoftwareRef = useRef(null);
  const agencyRef = useRef(null);
  const projectsRef = useRef(null);

  let texts = {
    headline: <>Individualsoftware</>,
    text: (
      <>
        <p>
        Maßgeschneiderte Softwarelösungen für die einzigartigen Bedürfnisse Ihres Unternehmens: Individualsoftware-Entwicklung durch unser erfahrenes Team!
        </p>
        <p>
          Nutze unsere kostenlose Beratung und sende uns jetzt eine Anfrage!
        </p>
      </>
    ),
    button: "Beratungsgespräch vereinbaren!",
    title: "Individualsoftware - M-to-B",
    description:
      "Du möchtest deine App entwickeln lassen? Dann nutze unsere kostenlose Beratung und lass uns deine App verwirklichen! Als App Agentur aus Leipzig freuen wir uns auf dein Projekt!",
    concept: "Konzeption und Planung",
    development: "Entwicklung und Implementierung",
    support: "Wartung und Support",
    individualsoftwareHeadline: "Was ist Individualsoftware?",
    individualsoftwareText: (
      <>
        <p>
          Individualsoftware ist genau auf die spezifischen Bedürfnisse und
          Anforderungen eines Unternehmens zugeschnitten. Im Gegensatz zu
          Standardsoftware, die für eine breite Masse von Anwendern entwickelt
          wurde und nur begrenzte Anpassungsmöglichkeiten besitzt, bietet
          Individualsoftware die Möglichkeit, genau auf die Prozesse und
          Arbeitsabläufe eines Unternehmens abgestimmt zu werden. Dies kann die
          Effizienz und Leistung verbessern und gleichzeitig auch die Sicherheit
          erhöhen. Eine Software Agentur wie unsere bietet professionelle
          Unterstützung bei der Konzeption, Planung, Entwicklung und
          Implementierung von Individualsoftware, um Ihr Unternehmen erfolgreich
          zu unterstützen.
        </p>
      </>
    ),
    individualsoftwareAlt: "Individualsoftware",
    personalized: "Massgeschneidert auf das Unternehmen",
    efficient: "Verbessert die Effizienz und Leistung",
    security: "Erhöht die Sicherheit",
    agencyHeadline: "Warum unsere Software Agentur?",
    agencyText: (
      <>
        <p>
          Unser qualifiziertes Entwicklerteam verfügt über die nötigen
          Fähigkeiten und Erfahrungen, um Ihnen hochwertige Softwarelösungen
          anzubieten. Wir haben bereits erfolgreich in verschiedenen Branchen
          Projekte durchgeführt und können Ihnen daher wertvolle Einsichten und
          Lösungen für Ihr Unternehmen bieten. Zusätzlich bieten wir eine
          flexible und individuelle Betreuung, um sicherzustellen, dass wir
          Ihren Anforderungen entsprechen und Ihnen die bestmögliche
          Unterstützung bieten. Wir sind überzeugt, dass wir die richtige Wahl
          für Ihre Software-Entwicklungsprojekte sind. Kontaktieren Sie uns noch
          heute, um mehr über unsere Leistungen zu erfahren!
        </p>
      </>
    ),
    agencyAlt: "Software Agentur",
  };

  if (router.locale == "en") {
    texts = {
      headline: <>Individual Software</>,
      text: (
        <>
          <p>
            Custom-tailored software solutions for your business&apos;s unique needs:
            individual software development by our experienced team!
          </p>
          <p>Take advantage of our advisory and send us your request.</p>
        </>
      ),
      button: "Schedule a free consultation!",
      title: "Individual Software - M-to-B",
      description:
        "Would you like to realize your app idea? Then use our free consultation and let us make your app a reality! As an app agency from Leipzig, we look forward to your project!",
      concept: "Conception and Planning",
      development: "Development and Implementation",
      support: "Maintenance and Support",
      individualsoftwareHeadline: "What is Individual Software?",
      individualsoftwareText: (
        <>
          <p>
            Individual software is tailored to the specific needs and
            requirements of a company. Unlike standard software, which is
            developed for a broad range of users and offers limited
            customization options, individual software allows for a tailored fit
            to the processes and workflows of a company. This can improve
            efficiency and performance, as well as increase security. A software
            agency like ours offers professional support in the conception,
            planning, development, and implementation of individual software to
            support your company&apos;s success.
          </p>
        </>
      ),
      individualsoftwareAlt: "Individual Software",
      personalized: "Tailored to your Requirements",
      efficient: "Improve Efficiency and Performance",
      security: "Strengthen Security",
      agencyHeadline: "Why our Software Agency?",
      agencyText: (
        <>
          <p>
            Our experienced and qualified development team has the necessary
            skills and experience to provide you with high-quality software
            solutions. We have already successfully completed projects in
            various industries and can therefore offer you valuable insights and
            solutions for your company. In addition, we offer flexible and
            individual support to ensure that we meet your requirements and
            provide you with the best possible support. We are convinced that we
            are the right choice for your software development projects. Contact
            us today to learn more about our services.
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
          href="https://m-to-b.com/App-Entwicklung-Leipzig"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Entwicklung-Leipzig"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        button={texts.button}
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
          sectionRef={individualsoftwareRef}
          headline={texts.individualsoftwareHeadline}
          text={texts.individualsoftwareText}
          image="/images/individualsoftware/individualsoftware.png"
          imageAlt={texts.individualsoftwareAlt}
          typewriterKey={"1"}
        />
        <IconTextSection
          icon1={<HiScissors />}
          icon2={<BsGraphUp />}
          icon3={<MdSecurity />}
          label1={texts.personalized}
          label2={texts.efficient}
          label3={texts.security}
        />
        <ServiceSection
          key={2}
          sectionRef={agencyRef}
          headline={texts.agencyHeadline}
          text={texts.agencyText}
          image="/images/individualsoftware/agency.png"
          imageAlt={texts.agencyAlt}
          typewriterKey={"2"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={projectsRef} />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
