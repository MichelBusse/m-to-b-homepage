import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import ProjectsSection from "../components/ProjectsSection";
import CustomersSection from "../components/CustomersSection";
import PriceCalculatorSection from "../components/PriceCalculatorSection";
import SmallTechnologiesSection, {
  logos,
} from "../components/SmallTechnologiesSection";
import StagesSections from "../components/StagesSections";
import AboutSection from "../components/AboutSection";
import TextSection from "../components/utility/TextSection";
import { useRef } from "react";
import JourneySection from "../components/JourneySection";
import ValuesSection from "../components/ValuesSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AppDevelopmentZwickauPage(props: Props) {
  const router = useRouter();

  const textSectionRef = useRef(null);

  let texts = {
    headline: (
      <>
        Mission: App-Entwicklung
        <br />
        Ziel: Zwickau
      </>
    ),
    text: (
      <>
        <p>
          Du hast die Idee für eine App und suchst nach einem Partner für die
          Umsetzung in Zwickau?
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
    title: "App-Entwicklung Zwickau - App-Agentur M-to-B",
    description:
      "Dein Partner für App-Entwicklung in Zwickau. Als digitale App-Agentur führen wir deine App-Idee mit der richtigen Strategie sicher zum Ziel.",
    textSectionHeadline: "Moderne Apps für Zwickau",
    textSectionText: (
      <>
        <p>
          Als digitale App Agentur unterstützen wir Zwickauer Unternehmen bei
          der Realisierung ihrer App-Ideen. Dabei begleiten wir dich von der
          Ausarbeitung der Idee, durch die Herausforderungen und Gefahren der
          Entwicklung, bis zum Marketing und Release der fertigen App.
        </p>
        <p>
          Wir verstehen gut, dass die Entwicklung der eigenen App am Anfang
          überfordernd sein kann und bieten dir deshalb von Beginn an einen
          persönlichen Ansprechpartner.
        </p>
        <p>
          Unsere Mission ist es, innovative Apps zu verwirklichen und vielleicht
          gehört deine Idee schon bald dazu.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      headline: (
        <>
          Mission: App development
          <br />
          Destination: Zwickau
        </>
      ),
      text: (
        <>
          <p>
            Do you have an idea for an app and are looking for a partner to
            implement it in Zwickau?
          </p>
          <p>
            During app development, you have to face various challenges. Without
            a smart plan, it's easy to get sidetracked and lose time and budget.
          </p>
          <p>
            We accompany you through your development journey and guide your app
            safely to its goal together with you and the right strategy!
          </p>
        </>
      ),
      requestButtonText: "Start your journey",
      title: "App Development Zwickau - App Agency M-to-B",
      description:
        "Your partner for app development in Zwickau. As a digital app agency, we guide your app idea safely to its goal with the right strategy.",
      textSectionHeadline: "Modern apps for Zwickau",
      textSectionText: (
        <>
          <p>
            As a digital app agency, we support Zwickau companies in realizing
            their app ideas. We accompany you from the development of the idea,
            through the challenges and dangers of development, to the marketing
            and release of the finished app.
          </p>
          <p>
            We understand that developing your own app can be overwhelming at
            the beginning and that's why we offer you a personal contact right
            from the start.
          </p>
          <p>
            Our mission is to make innovative apps a reality and maybe your idea
            will soon be one of them.
          </p>
        </>
      ),
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/App-Agentur-Zwickau"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Agentur-Zwickau"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        highlightImage={"/images/app-development/header.png"}
        highlightImageAlt="App Entwicklung Zwickau"
        requestButtonText={texts.requestButtonText}
        buttonLink="#start"
      />
      <main>
        <div className="scrollAnchor" id="start"></div>
        <ValuesSection />
        <CustomShapeDivider flip={true} />
        <TextSection
          key={"app1"}
          sectionRef={textSectionRef}
          headline={texts.textSectionHeadline}
          text={texts.textSectionText}
          image="/images/app-development/innovation.png"
          imageAlt={texts.textSectionHeadline}
          typewriterKey={"app1"}
        />
        <JourneySection />
        <StagesSections />
        <SmallTechnologiesSection
          logos={[logos.flutter, logos.dart, logos.supabase, logos.firebase]}
        />
        <AboutSection />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} location="Zwickau" locationLink="/App-Agentur-Zwickau"/>
      </main>
    </>
  );
}
