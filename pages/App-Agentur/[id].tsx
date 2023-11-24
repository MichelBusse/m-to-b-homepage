import Header from "../../components/Header";
import ContactSection from "../../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../../components/CustomShapeDivider";
import { AnchorRefs } from "../_app";
import { useRouter } from "next/router";
import ProjectsSection from "../../components/ProjectsSection";
import CustomersSection from "../../components/CustomersSection";
import SmallTechnologiesSection, {
  logos,
} from "../../components/SmallTechnologiesSection";
import StagesSections from "../../components/StagesSections";
import AboutSection from "../../components/AboutSection";
import TextSection from "../../components/utility/TextSection";
import { useRef } from "react";
import JourneySection from "../../components/JourneySection";
import ValuesSection from "../../components/ValuesSection";
import CrossPlatformSection from "../../components/CrossPlatformSection";
import CostEstimateSection from "../../components/CostEstimateSection";

type Props = {
  anchorRefs: AnchorRefs;
  id: string;
};

export default function AppDevelopmentCityPage(props: Props) {
  const router = useRouter();

  const textSectionRef = useRef(null);

  let texts = {
    headline: (
      <>
        Mission: App-Entwicklung
        <br />
        Ziel: {props.id}
      </>
    ),
    text: (
      <>
        <p>
          Du hast die Idee für eine App und suchst nach einem Partner für die
          Umsetzung in {props.id}?
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
    title: `App-Entwicklung ${props.id} | App-Agentur M-to-B`,
    description: `Dein Partner für App-Entwicklung in ${props.id}. Als digitale App-Agentur führen wir deine App-Idee mit der richtigen Strategie sicher zum Ziel.`,
    textSectionHeadline: `Moderne Apps für ${props.id}`,
    textSectionText: (
      <>
        <p>
          Als digitale App Agentur unterstützen wir {props.id}er Unternehmen bei
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
          Destination: {props.id}
        </>
      ),
      text: (
        <>
          <p>
            Do you have an idea for an app and are looking for a partner to
            implement it in {props.id}?
          </p>
          <p>
            During app development, you have to face various challenges. Without
            a smart plan, it&apos;s easy to get sidetracked and lose time and
            budget.
          </p>
          <p>
            We accompany you through your development journey and guide your app
            safely to its goal together with you and the right strategy!
          </p>
        </>
      ),
      requestButtonText: "Start your journey",
      title: `App Development ${props.id} - App Agency M-to-B`,
      description: `Your partner for app development in ${props.id}. As a digital app agency, we guide your app idea safely to its goal with the right strategy.`,
      textSectionHeadline: `Modern apps for ${props.id}`,
      textSectionText: (
        <>
          <p>
            As a digital app agency, we support {props.id} companies in
            realizing their app ideas. We accompany you from the development of
            the idea, through the challenges and dangers of development, to the
            marketing and release of the finished app.
          </p>
          <p>
            We understand that developing your own app can be overwhelming at
            the beginning and that&apos;s why we offer you a personal contact
            right from the start.
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
          href={`https://m-to-b.com/App-Agentur/${props.id}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://m-to-b.com/en/App-Agentur/${props.id}`}
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        text={texts.text}
        highlightImage={"/images/app-development/header.png"}
        highlightImageAlt={`App Entwicklung ${props.id}`}
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
        <CrossPlatformSection />
        <CostEstimateSection />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection
          anchorRefs={props.anchorRefs}
          location={props.id}
          locationLink={`/App-Agentur/${props.id}`}
          pageReference={texts.title}
        />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    "Leipzig",
    "Dresden",
    "Erfurt",
    "Jena",
    "Zwickau",
    "Chemnitz",
    "Berlin",
    "Cottbus",
    "Schwerin",
    "Hamburg",
    "München",
    "Rostock",
    "Flensburg",
    "Stuttgart",
    "Nürnberg",
    "Hannover",
    "Frankfurt",
    "Köln",
    "Düsseldorf",
    "Dortmund",
    "Essen",
    "Bremen",
    "Duisburg",
    "Bochum",
    "Wuppertal",
    "Bielefeld",
    "Bonn",
    "Münster",
    "Mannheim",
    "Karlsruhe",
    "Augsburg",
    "Wiesbaden",
    "Mönchengladbach",
    "Gelsenkirchen",
    "Aachen",
    "Braunschweig",
    "Kiel",
    "Halle",
    "Magdeburg",
    "Freiburg",
    "Krefeld",
    "Mainz",
    "Lübeck",
    "Oberhausen",
    "Kassel",
    "Hagen",
    "Potsdam",
    "Saarbrücken",
    "Hamm",
    "Ludwigshafen",
    "Oldenburg",
    "Mülheim",
    "Osnabrück",
    "Leverkusen",
    "Heidelberg",
    "Darmstadt",
    "Solingen",
    "Regensburg",
    "Herne",
    "Paderborn",
    "Neuss",
    "Ingolstadt",
    "Offenbach",
    // Ab hier weiter
    "Fürth",
    "Ulm",
    "Heilbronn",
    "Pforzheim",
    "Würzburg",
    "Wolfsburg",
    "Göttingen",
    "Bottrop",
    "Reutlingen",
    "Erlangen",
    "Bremerhaven",
    "Koblenz",
    "Remscheid",
    "Trier",
    "Recklinghausen",
    "Moers",
    "Salzgitter",
    "Siegen",
    "Gütersloh",
    "Hildesheim",
    "Hanau",
    "Kaiserslautern",
  ];
  return {
    paths: paths.flatMap((path) => [
      { params: { id: path }, locale: "de" },
      { params: { id: path }, locale: "en" },
    ]),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  return {
    props: {
      id: params.id,
    },
  };
}
