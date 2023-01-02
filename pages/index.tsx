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
    headline: (
      <>
        Deine Agentur für App- <br />
        und Software-Entwicklung
      </>
    ),
    text: (
      <>
        <p>
          Mit Erfahrung und Begeisterung realisieren wir deine Ideen!
          <br />
          Als App-Agentur helfen wir unseren Kunden, erfolgreiche und
          beeindruckende Apps zu entwickeln.
        </p>
        <p>
          Nutze unsere kostenlose Beratung und lass uns gemeinsam dein Projekt
          verwirklichen!
        </p>
      </>
    ),
    button: "Beratungsgespräch vereinbaren!",
  };

  if (router.locale == "en") {
    texts = {
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
            As an app agency, we help our customers to develop successful and impressive apps.
          </p>
          <p>
            Take advantage of our advisory and let us realize your app together.
          </p>
        </>
      ),
      button: "Schedule a free consultation!",
    };
  }

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="de" href="https://m-to-b.com/" />
        <link rel="alternate" hrefLang="en" href="https://m-to-b.com/en" />
      </Head>
      <Header headline={texts.headline} text={texts.text} button={texts.button}/>
      <main>
        <ValuesSection />
        <CustomShapeDivider flip={true} />
        <ServicesSection anchorRefs={props.anchorRefs} />
        <CrossPlatformSection />
        <AgileSection />
        <CustomShapeDivider flip={false} />
        <ProjectsSection anchorRefs={props.anchorRefs} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
