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
  const advantageRef = useRef(null);
  const agencyRef = useRef(null);

  let texts = {
    headline: <>Individualsoftware</>,
    text: (
      <>
        <p>
          Mit Standardsoftware stößt dein Unternehmen an die Grenzen?
          <br />
          Für deine Anforderungen gibt es noch nicht das richtige Programm?
        </p>
        <p>
          Mit maßgeschneiderten Software-Lösungen automatisierst du deine
          Prozesse zukunftssicher und investierst in langfristige Effizienz.
        </p>
        <p>
          In einem kostenlosen Beratungsgespräch kannst du dich zu effizienten
          Software-Strategien informieren, um dein Unternehmen auf die nächste
          Stufe zu bringen!
        </p>
      </>
    ),
    requestButtonText: "Kostenloses Beratungungsgespräch",
    title: "Individualsoftware - M-to-B",
    description:
      "Individualsoftware kann teuer sein - muss sie aber nicht! Erhalte individuelle Softwarelösungen für dein Unternehmen mit kosteneffizienten Strategien.",
    concept: "Strategie",
    development: "Implementierung",
    support: "Betreuung",
    individualsoftwareHeadline: "Warum Individualsoftware?",
    individualsoftwareText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Standardsoftware lässt sich oft nicht genau auf deinen Bedarf anpassen
          und kostet vor allem für wachsende Unternehmen Nerven, Zeit und Geld.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Individualsoftware hingegen ist speziell für dein Unternehmen
          entwickelt und wird genau auf deine Prozesse und Anforderungen
          zugeschnitten.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Dadurch kann die Effizienz und Leistung um ein Vielfaches gesteigert
          und gleichzeitig auch die Sicherheit erhöht werden. Mit
          professioneller Unterstützung bei der Strategie, Entwicklung und
          Betreuung von individueller Software, bringst du dein Unternehmen auf
          die nächste Stufe.
        </p>
      </>
    ),
    individualsoftwareAlt: "Individualsoftware",
    advantageHeadline: "Die Lean-Prototype-Methode",
    advantageText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Die Entwicklung von individuellen Software-Lösungen kann teuer,
          aufwändig und stressig werden - muss sie aber nicht!
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Mit der Lean-Prototype-Methode steht der Return-Of-Investment für dein
          Unternehmen im Fokus und unnötige Funktionen, die am Ende niemand
          braucht, werden vermieden.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Du wirst Schritt-Für-Schritt von Experten begleitet und kannst schon
          nach wenigen Wochen den ersten &quot;schmalen&quot; (lean) Prototypen
          deiner Software in deinem Unternehmen effektiv einsetzen. Schluss mit
          langwierigen und kostenfressenden Software-Entwicklungen.
        </p>
      </>
    ),
    advantageAlt: "Individualsoftware",
    personalized: "Maßgeschneidert auf das Unternehmen",
    efficient: "Verbessert Leistung und Effizienz",
    security: "Erhöht die Sicherheit",
    agencyHeadline: "Warum unsere Software-Agentur?",
    agencyText: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Wir setzen auf Kommunikation - In unseren Projekten haben wir
          festgestellt, dass der Erfolg deiner Software vor allem davon abhängt,
          dass wir deine Ziele richtig verstehen und nicht nur blind entwickeln.
          Deshalb wirst du bei uns nicht nur während der Entwicklung, sondern
          vor allem bei der Planung deiner Software von den richtigen Experten
          unterstützt.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Du hast die Möglichkeit für häufige Rücksprache und gemeinsames
          Brainstorming wobei wir dir helfen, die richtigen Schritte für dein
          Ziel zu unternehmen.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
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
            Does your company reach its limits with standard software?
            <br />
            There is no app for your requirements yet?
          </p>
          <p>
            With tailor-made software solutions, you automate your processes in
            a future-proof manner and invest in long-term efficiency.
          </p>
          <p>
            Use a free consultation and find out about efficient software
            strategies to take your business to the next level!
          </p>
        </>
      ),
      requestButtonText: "Schedule a free consultation",
      title: "Individual Software - M-to-B",
      description:
        "Create personalized software solutions for your business with our software agency. We offer custom development!",
      concept: "Conception and Planning",
      development: "Development and Implementation",
      support: "Maintenance and Support",
      individualsoftwareHeadline: "Why Individual Software?",
      individualsoftwareText: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Standard software often cannot be adapted exactly to your needs and
            costs nerves, time and money, especially for growing companies.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Individual software, on the other hand, is specially developed and
            tailored for your company and is precisely adapted to your processes
            and requirements.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            As a result, efficiency and performance can be increased many times
            over, while at the same time safety gets improved. With professional
            support in strategy, development and support of individual software,
            you take your business to the next level.
          </p>
        </>
      ),
      individualsoftwareAlt: "Individual Software",
      advantageHeadline: "The Lean Prototype Method",
      advantageText: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            The development of individual software solutions can be expensive,
            time-consuming and stressful - but it doesn&apos;t have to be!
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            With the lean prototype method, the focus is on the return of
            investment for your company and unnecessary functions that nobody
            really uses are avoided.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            You will be accompanied step-by-step by experts and after just a few
            weeks you will be able to use the first lean prototype of your
            software in your company. No more lengthy and costly developments.
          </p>
        </>
      ),
      advantageAlt: "Individual Software",
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
        <ServiceSection
          key={"software2"}
          sectionRef={advantageRef}
          headline={texts.advantageHeadline}
          text={texts.advantageText}
          image="/images/individual-software/advantage.png"
          imageAlt={texts.advantageAlt}
          typewriterKey={"software2"}
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
          key={"software3"}
          sectionRef={agencyRef}
          headline={texts.agencyHeadline}
          text={texts.agencyText}
          image="/images/agency.png"
          imageAlt={texts.agencyAlt}
          typewriterKey={"software3"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
