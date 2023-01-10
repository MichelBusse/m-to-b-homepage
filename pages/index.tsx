import Header from "../components/home/header";
import ServicesSection from "../components/home/servicesSection";
import ProjectsSection from "../components/home/projectsSection";
import ContactSection from "../components/home/contactSection";
import CustomersSection from "../components/home/customersSection";
import { useRouter } from "next/router";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import AgileSection from "../components/services/AgileSection";
import { AnchorRefs } from "./_app";
import ValuesSection from "../components/home/valuesSection";
import CrossPlatformSection from "../components/services/CrossPlatformSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  let texts = {
    title: "Ihre App-Agentur - M-to-B Software",
    headline: (
      <>
        Ihre Agentur für App- <br />
        und Software-Entwicklung
      </>
    ),
    text: (
      <>
        <p>
          Mit Erfahrung und Begeisterung realisieren wir Ihre Ideen!
          <br />
          Als App-Agentur helfen wir unseren Kunden, erfolgreiche und
          beeindruckende Apps zu entwickeln.
        </p>
        <p>
          Nutzen Sie unsere kostenlose Beratung und lassen Sie uns gemeinsam Ihr
          Projekt verwirklichen!
        </p>
      </>
    ),
    description:
      "Als Software- und App-Agentur mit neuen Technologien und Erfahrung entwickeln wir Softwarelösungen - von Apps und Individualsoftware, bis zu Virtual Reality",
  };

  if (router.locale == "en") {
    texts = {
      title: "Your App Agency - M-to-B Software",
      headline: (
        <>
          Your Agency for App <br />
          and Software Development
        </>
      ),
      text: (
        <>
          <p>
            We realize your vision with experience and excitement!
            <br />
            As an app agency, we help our customers to develop successful and
            impressive apps.
          </p>
          <p>
            Take advantage of our advisory and let us realize your app together.
          </p>
        </>
      ),
      description:
        "Gain an advantage by individual software development with modern technologies and experience - from apps and impressive webdesign all the way to virtual reality",
    };
  }

  return (
    <>
      <Head>
        <title key="title">{texts.title}</title>
        <link rel="alternate" hrefLang="de" href="https://m-to-b.com/" />
        <link rel="alternate" hrefLang="en" href="https://m-to-b.com/en" />
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        priceCalculatorButton={true}
      />
      <main>
        <ValuesSection />
        <CustomShapeDivider flip={true} />
        <ServicesSection anchorRefs={props.anchorRefs} />
        <CrossPlatformSection />
        <AgileSection />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
