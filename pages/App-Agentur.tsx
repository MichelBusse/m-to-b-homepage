import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import CustomersSection from "../components/CustomersSection";
import SmallTechnologiesSection, {
  logos,
} from "../components/SmallTechnologiesSection";
import JourneySection from "../components/JourneySection";
import StagesSection from "../components/StagesSections";
import AboutSection from "../components/AboutSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AppDevelopmentPage(props: Props) {
  const router = useRouter();

  let texts = {
    headline: (
      <>
        Mission: App-Entwicklung
        <br />- Deine App-Agentur
      </>
    ),
    text: (
      <>
        <p>
          Du hast die Idee für eine App und suchst noch nach Unterstützung bei
          der Umsetzung?
        </p>
        <p>
          Während der App-Entwicklung musst du dich verschiedenen
          Herausforderungen stellen. Ohne einen smarten Plan kommst du dabei
          leicht vom Weg ab und verlierst Zeit und Budget.
        </p>
        <p>
          Wir begleiten dich durch deine Entwicklungsreise und führen deine App
          gemeinsam mit dir und der richtigen Strategie sicher zum Ziel!
        </p>
      </>
    ),
    requestButtonText: "Starte die Reise",
    title: "Mission: App-Entwicklung - Deine App-Agentur M-to-B",
    description:
      "App-Entwicklung kann auch stressfrei sein - Als dynamische App-Agentur führen wir deine App-Idee mit der richtigen Strategie sicher zum Ziel.",
  };

  if (router.locale == "en") {
    texts = {
      headline: (
        <>
          Mission: App Development
          <br />- Your App Agency
        </>
      ),
      text: (
        <>
          <p>
            Do you have an idea for an app and are you still looking for
            guidance to implement it?
          </p>
          <p>
            When developing an app, you have to face various challenges. Without
            a good plan, it&apos;s easy to get sidetracked and lose time and
            budget.
          </p>
          <p>
            We accompany you through your development journey and guide your app
            safely to its goal together with you and the right strategy!
          </p>
        </>
      ),
      requestButtonText: "Start your journey",
      title: "Mission: App Development - App Agency M-to-B",
      description:
        "App development can also be stress-free - As a dynamic app agency, we accompany your app idea safely to its goal with the right strategy.",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/App-Agentur"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Agentur"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        priceCalculatorButton={false}
        highlightImage={"/images/app-development/header.png"}
        highlightImageAlt="App Entwicklung"
        requestButtonText={texts.requestButtonText}
        buttonLink="#start"
      />
      <main>
        <div className="scrollAnchor" id="start"></div>
        <JourneySection />
        <CustomShapeDivider flip={true} />
        <div className="scrollAnchor" id="main"></div>
        <StagesSection />
        <SmallTechnologiesSection
          logos={[logos.flutter, logos.dart, logos.supabase, logos.firebase]}
        />
        <AboutSection />
        <CustomShapeDivider flip={false} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
