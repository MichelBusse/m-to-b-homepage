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
import { HiScissors } from "react-icons/hi";
import { MdSecurity } from "react-icons/md";
import CustomersSection from "../components/CustomersSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function IndividualSoftwarePage(props: Props) {
  const router = useRouter();

  const individualsoftwareRef = useRef(null);
  const agencyRef = useRef(null);

  let texts = {
    headline: <>Individualsoftware</>,
    text: (
      <>
        <p>
          Mit Standardsoftware stößt dein Unternehmen an die Grenzen?
          <br />
          Für deine Anforderungen gibt es noch kein Programm?
        </p>
        <p>
          Der Software-Entwicklungsprozess kann ohne eine klare Strategie
          schnell zum Zeit- und Kostenfresser werden.
        </p>
        <p>
          Nutze ein kostenloses Beratungsgespräch und informiere dich zu
          effizienten Strategien um dein Software-Projekt zum Erfolg zu führen!
        </p>
      </>
    ),
    requestButtonText: "Kostenlose Beratung",
    title: "Individualsoftware - M-to-B",
    description:
      "Individualsoftware kann teuer sein - muss sie aber nicht! Erhalte individuelle Softwarelösungen für dein Unternehmen mit kosteneffizienten Strategien.",
    concept: "Strategie",
    development: "Implementierung",
    support: "Betreuung",
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
          Implementierung von Individualsoftware, um dein Unternehmen
          erfolgreich zu unterstützen.
        </p>
      </>
    ),
    individualsoftwareAlt: "Individualsoftware",
    personalized: "Massgeschneidert auf das Unternehmen",
    efficient: "Verbessert die Effizienz und Leistung",
    security: "Erhöht die Sicherheit",
    agencyHeadline: "Warum unsere Software-Agentur?",
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
      headline: <>Individual Software</>,
      text: (
        <>
          <p>
            Custom-tailored software solutions for your business&apos;s unique
            needs: individual software development by our experienced team!
          </p>
          <p>Take advantage of our advisory and send us your request.</p>
        </>
      ),
      requestButtonText: "Free consultation",
      title: "Individual Software - M-to-B",
      description:
        "Create personalized software solutions for your business with our software agency. We offer custom development!",
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
          href="https://m-to-b.com/Individualsoftware"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/Individualsoftware"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        highlightImage={
          "/images/individual-software/individual-software-header.png"
        }
        highlightImageAlt="Individualsoftware"
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
          key={"software1"}
          sectionRef={individualsoftwareRef}
          headline={texts.individualsoftwareHeadline}
          text={texts.individualsoftwareText}
          image="/images/individual-software/individual-software.png"
          imageAlt={texts.individualsoftwareAlt}
          typewriterKey={"software1"}
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
          key={"software2"}
          sectionRef={agencyRef}
          headline={texts.agencyHeadline}
          text={texts.agencyText}
          image="/images/agency.png"
          imageAlt={texts.agencyAlt}
          typewriterKey={"software2"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
