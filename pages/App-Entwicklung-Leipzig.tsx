import Header from "../components/home/header";
import ContactSection from "../components/home/contactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import ValuesSection from "../components/home/valuesSection";
import CrossPlatformSection from "../components/services/CrossPlatformSection";
import LeipzigServicesSection from "../components/home/leipzigServicesSection";
import { useRouter } from "next/router";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  let texts = {
    headline: <>App-Entwicklung aus Leipzig</>,
    text: (
      <>
        <p>
          Moderne Apps aus der Region - Wir realisieren deine Vorstellungen und
          entwickeln deine App.
        </p>
        <p>
          Nutze unsere kostenlose Beratung und sende uns jetzt eine Anfrage!
        </p>
      </>
    ),
    button: "Beratungsgespräch vereinbaren!",
    title: "App Entwicklung aus Leipzig - M-to-B",
    description: "Du möchtest deine App entwickeln lassen? Dann nutze unsere kostenlose Beratung und lass uns deine App verwirklichen! Als App Agentur aus Leipzig freuen wir uns auf dein Projekt!",
  };

  if (router.locale == "en") {
    texts = {
      headline: <>App Development from Leipzig</>,
      text: (
        <>
          <p>
            Modern apps from your region - we realize your ideas and develop
            your app.
          </p>
          <p>
            Take advantage of our advisory and send us your request.
          </p>
        </>
      ),
      button: "Schedule a free consultation!",
      title: "App Development from Leipzig - M-to-B",
      description: "Would you like to realize your app idea? Then use our free consultation and let us make your app a reality! As an app agency from Leipzig, we look forward to your project!",
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
        <meta
            name="description"
            content={texts.description}
          />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        button={texts.button}
      />
      <main>
        <ValuesSection />
        <CustomShapeDivider flip={true} />
        <LeipzigServicesSection />
        <CrossPlatformSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
