import Header from "../components/home/header";
import ContactSection from "../components/home/contactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import IconTextSection from "../components/iconTextSection";
import { FaEdit, FaWrench } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import ServiceSection from "../components/services/ServiceSection";
import { useRef } from "react";
import ProjectsSection from "../components/home/projectsSection";
import CustomersSection from "../components/home/customersSection";
import CrossPlatformSection from "../components/services/CrossPlatformSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  const virtualRealityRef = useRef(null);
  const augmentedRealityRef = useRef(null);
  const agencyRef = useRef(null);

  let texts = {
    headline: <>App Entwicklung</>,
    text: (
      <>
        <p>
          Professionelle App-Entwicklung für Unternehmen und Endverbraucher -
          von der Konzeption bis zur Veröffentlichung und Wartung.
        </p>
        <p>
          Nutzen Sie unsere kostenlose Beratung und senden Sie uns jetzt eine Anfrage!
        </p>
      </>
    ),
    button: "Beratungsgespräch vereinbaren!",
    title: "App Entwicklung - M-to-B",
    description:
      "Entwickeln Sie Ihre App mit uns als App Agentur. Wir bieten professionelle Beratung und individuelle Lösungen für iOS, Android und Cross-Platform.",
    concept: "Konzeption und Planung",
    development: "Entwicklung und Implementierung",
    support: "Wartung und Support",
    crossPlatformHeadline: "Cross-Platform App Entwicklung",
    crossPlatformText: (
      <>
        <p>
          Cross-Platform App Entwicklung steht für die Erstellung von Apps, die
          auf mehreren Plattformen wie iOS, Android oder im Web verfügbar sind.
          Cross-Platform-Apps werden in der Regel mit Hilfe von sogenannten
          &quot;Hybrid-Technologien&quot; entwickelt, die es ermöglichen, den Code für
          mehrere Plattformen zu verwenden, anstatt für jede Plattform einen
          eigenen Code zu schreiben. Der Vorteil von Cross-Platform-Apps ist,
          dass sie schneller und kostengünstiger zu entwickeln sind als native
          Apps und dass sie auf mehreren Plattformen verfügbar sind. Unsere
          Software Agentur bietet insbesondere Unterstützung bei der Entwicklung
          von Cross-Platform-Apps für Unternehmen und Endverbraucher. Dabei
          setzen wir meistens auf die Entwicklung mit Flutter für eine optimale
          Leistung und Nutzererfahrung.
        </p>
      </>
    ),
    crossPlatformAlt: "Virtual Reality",
    processHeadline: "Ablauf einer App Entwicklung",
    processText: (
      <>
        <p>
          Der Ablauf der App-Entwicklung umfasst in der Regel folgende Schritte:
          <ul>
            <li>
              Konzeption und Planung: Hier wird das Ziel der App festgelegt und
              ein Konzept erstellt, das die Funktionen und die
              Benutzeroberfläche der App beschreibt.
            </li>
            <li>
              Design: Im Design-Schritt werden das Aussehen und die
              Benutzerfreundlichkeit der App festgelegt. Dazu gehört auch die
              Erstellung von Wireframes und Prototypen.
            </li>
            <li>
              Entwicklung: In diesem Schritt wird der Code für die App
              geschrieben und die Funktionen implementiert.
            </li>
            <li>
              Testen: Vor der Veröffentlichung wird die App auf Fehler und
              Performance-Probleme überprüft und entsprechende Korrekturen
              vorgenommen.
            </li>
            <li>
              Veröffentlichung: Sobald die App fehlerfrei ist, wird sie im App
              Store oder auf anderen Plattformen veröffentlicht.
            </li>
            <li>
              Wartung und Support: Nach der Veröffentlichung ist es wichtig, die
              App regelmäßig zu aktualisieren und eventuelle Probleme zu
              beheben.
            </li>
          </ul>
        </p>
      </>
    ),
    processAlt: "Ablauf einer App Entwicklung",
    connection: "Verbesserte Kundeninteraktion und -bindung",
    efficient: "Verbessert die Effizienz und Leistung",
    expand: "Neue Märkte erschließen",
    agencyHeadline: "Warum unsere App Agentur?",
    agencyText: (
      <>
        <p>
          Unser Entwicklerteam verfügt über die nötigen Fähigkeiten und
          Erfahrungen, um Ihnen moderne und nutzerfreundliche Apps anbieten zu
          können. Wir sind stets bereit, neue Ideen zu entwickeln und haben
          keine Angst, uns an sich ändernde Anforderungen anzupassen. Erwarten
          Sie den neuesten Stand der Technologie und die besten Tools und
          Plattformen. So stellen wir sicher, dass unsere Apps von höchster
          Qualität sind. Außerdem bieten wir eine individuelle Betreuung und
          arbeiten eng mit unseren Kunden zusammen, damit auch alle ihre
          Bedürfnisse und Wünsche vollständig erfüllt werden können. Wir haben
          bereits erfolgreich in verschiedenen Branchen Projekte durchgeführt
          und können Ihnen daher wertvolle Einsichten und Lösungen für Ihr
          Unternehmen bieten.
        </p>
      </>
    ),
    agencyAlt: "Software Agentur",
  };

  if (router.locale == "en") {
    texts = {
      headline: <>App Development</>,
      text: (
        <>
          <p>
            Custom App Development for Your Business Needs - From Concept to
            Launch and Maintenance
          </p>
          <p>Take advantage of our advisory and send us your request.</p>
        </>
      ),
      button: "Schedule a free consultation!",
      title: "App Development - M-to-B",
      description:
        "Develop your app with us as an app agency. We offer professional advice and individual solutions for iOS, Android and Cross-Platform.",
      concept: "Conception and Planning",
      development: "Development and Implementation",
      support: "Maintenance and Support",
      crossPlatformHeadline: "Cross Platform App Development",
      crossPlatformText: (
        <>
          <p>
            Cross platform app development is the process of creating apps that
            are available on multiple platforms such as iOS, Android, and
            Windows. Cross platform apps are usually developed using &quot;hybrid&quot;
            technologies that allow the code to be used on multiple platforms
            rather than writing separate code for each platform. The advantage
            of cross platform apps is that they are faster and more cost
            effective to develop than native apps and are available on multiple
            platforms. Our software agency offers professional support for cross
            platform app development for businesses and consumers.
          </p>
        </>
      ),
      crossPlatformAlt: "Virtual Reality",
      processHeadline: "App Development Process",
      processText: (
        <>
          <p>
            The app development process typically involves the following steps:
            <ul>
              <li>
                Conceptualization and planning: This involves setting the goals
                for the app and creating a concept that outlines the features
                and user interface of the app.
              </li>
              <li>
                Design: In the design step, the appearance and usability of the
                app are determined. This includes creating wireframes and
                prototypes.
              </li>
              <li>
                Development: In this step, the code for the app is written and
                the features are implemented.
              </li>
              <li>
                Testing: Before release, the app is tested for errors and
                performance issues and any necessary corrections are made.
              </li>
              <li>
                Release: Once the app is error-free, it is released on the app
                store or other platforms.
              </li>
              <li>
                Maintenance and support: After release, it is important to
                regularly update the app and address any issues that arise.
              </li>
            </ul>
          </p>
        </>
      ),
      processAlt: "App Development Process",
      connection: "Improved customer interaction and engagement",
      efficient: "Improve Efficiency and Performance",
      expand: "Expansion into new markets",
      agencyHeadline: "Why our App Agency?",
      agencyText: (
        <>
          <p>
            Our development team has the necessary skills and experience to
            offer you modern and user-friendly apps. We are always ready to
            develop new ideas and are not afraid to adapt to changing
            requirements. You can expect cutting edge technology and the best
            tools and platforms to ensure that our apps are of the highest
            quality. We also offer individual attention and work closely with
            our customers to ensure that all of their needs and desires can be
            fully met. We have already successfully completed projects in
            various industries and can therefore offer you valuable insights and
            solutions for your company.
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
          href="https://m-to-b.com/App-Entwicklung"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Entwicklung"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        button={texts.button}
        highlightImage={"/images/app-development/app-development-header.png"}
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
          headline={texts.crossPlatformHeadline}
          text={texts.crossPlatformText}
          image="/images/app-development/cross-platform.png"
          imageAlt={texts.crossPlatformAlt}
          typewriterKey={"1"}
        />
        <ServiceSection
          key={2}
          sectionRef={augmentedRealityRef}
          headline={texts.processHeadline}
          text={texts.processText}
          image="/images/app-development/app-development-process.png"
          imageAlt={texts.processAlt}
          typewriterKey={"2"}
        />
        <CrossPlatformSection />
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
