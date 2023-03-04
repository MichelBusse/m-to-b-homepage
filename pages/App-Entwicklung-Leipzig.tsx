import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import ProjectsSection from "../components/ProjectsSection";
import CustomersSection from "../components/CustomersSection";
import { useRef } from "react";
import ServiceSection from "../components/ServiceSection";
import PriceCalculatorSection from "../components/PriceCalculatorSection";
import SmallTechnologiesSection, {
  logos,
} from "../components/SmallTechnologiesSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AppDevelopmentLeipzigPage(props: Props) {
  const router = useRouter();

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  let texts = {
    headline: <>App-Entwicklung aus Leipzig</>,
    text: (
      <>
        <p>
          Moderne Apps aus der Region - Auf der Suche nach einem Partner für
          App-Entwicklung in Leipzig?
        </p>
        <p>
          Der App-Entwicklungsprozess kann ohne eine klare Strategie schnell zum
          Zeit- und Kostenfresser werden.
        </p>
        <p>
          In einem kostenlosen Beratungsgespräch kannst du dich zu effizienten
          Strategien informieren, um deine App zum Erfolg zu führen!
        </p>
      </>
    ),
    requestButtonText: "Kostenloses Beratungungsgespräch",
    title: "App Entwicklung für Leipzig - App Agentur M-to-B",
    description:
      "Wir sind eine App Agentur aus Leipzig und freuen uns auf dein Projekt! Nutze unsere kostenlose Beratung und lass uns deine App verwirklichen!",
    headlineSection1: "Innovation für Leipzig",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          App-Entwicklung kann kompliziert sein - muss sie aber nicht!
          <br />
          Wir haben M&#8209;to&#8209;B 2020 in Zwickau, ganz in der Nähe von
          Leipzig gegründet, um Unternehmen bei der Verwirklichung ihrer
          Projekte zu unterstützen.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Nach unserer Erfahrung ist die App-Entwicklung für alle Seiten ein
          spannender und zielführender Prozess, wenn die Kommunikation stimmt
          und gemeinsam eine klare Strategie entwickelt wird.
        </p>
        <p style={{ transitionDelay: "0.9s" }} key={3}>
          Wir begleiten Unternehmen aus Leipzig bei der Realisierung ihrer App
          und unterstützen sie, erfolgreiche Innovationen in die Region zu
          bringen.
        </p>
      </>
    ),
    headlineSection2: "Die Lean-Prototype-Methode",
    textSection2: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Viele App-Projekte scheitern durch schlechte Planung und überladene
          Funktionen. Bei Änderungen in den Anforderungen kann dann von der App
          Agentur nicht agil reagiert werden und das Budget wird schon vor den
          ersten messbaren Ergebnissen verschlungen.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Mit der Lean-Prototype-Methode minimierst du dieses Risiko. In der
          ersten Phase der App-Entwicklung erarbeiten wir gemeinsam die
          Hauptanforderungen und Kernkomponenten deiner App. Diese werden dann
          direkt mit einem ersten &quot;schmalen&quot; (lean) Prototypen
          entwickelt.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Dadurch hälst du bereits nach wenigen Wochen und mit minimalem Budget
          die erste Version deiner App in den Händen und kannst zeitnah
          anfangen, die Funktionen zu validieren und im Einsatz zu testen.
        </p>
      </>
    ),
    headlineSection3: "Full-Service App-Entwicklungs",
    textSection3: (
      <>
        <p>Die App-Entwicklung besteht aus folgenden Schritten:</p>
        <ol>
          <li style={{ transitionDelay: "0.3s" }}>
            <b>Strategie:</b> Hier wird das Ziel deiner App festgelegt und ein
            Konzept erstellt, wie deine App ohne Umwege dorthin geführt werden
            kann.
          </li>
          <li style={{ transitionDelay: "0.6s" }}>
            <b>Design:</b> Das Layout deiner App wird erstellt. Dabei dreht sich
            alles um Nutzerfreundlichkeit und Wiedererkennungswert.
          </li>
          <li style={{ transitionDelay: "0.9s" }}>
            <b>Implementierung:</b> In diesem Schritt wird deine Idee Realität.
            Deine App erhält ihre Funktionen und wird zu einem fertigen Produkt.
          </li>
          <li style={{ transitionDelay: "1.2s" }}>
            <b>Rollout:</b> Sobald deine App fertig und auf Fehler getestet ist,
            wird sie im App-Store, oder auf den Plattformen deiner Wahl
            veröffentlicht.
          </li>
          <li style={{ transitionDelay: "1.5s" }}>
            <b>Betreuung:</b> Nach der Veröffentlichung ist es wichtig, die App
            regelmäßig zu aktualisieren und Probleme zu beheben. Mit uns hast du
            dafür auch nach der Veröffentlichung einen Ansprechpartner.
          </li>
        </ol>
      </>
    ),
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
          <p>Take advantage of our advisory and send us your request.</p>
        </>
      ),
      requestButtonText: "Schedule a free consultation",
      title: "App Development from Leipzig - M-to-B",
      description:
        "Use our free consultation and let us make your app a reality! As an app agency from Leipzig, we look forward to your project!",
      headlineSection1: "Innovation from Leipzig",
      textSection1: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            App development can be complicated - but it doesn&apos;t have to be!
            <br />
            We founded M&#8209;to&#8209;B 2020 in Zwickau, very close to
            Leipzig, to support companies in realizing their projects.
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            In our experience, app development is an exciting and goal-oriented
            process for all parties if communication is right and a clear
            strategy is developed together.
          </p>
          <p style={{ transitionDelay: "0.9s" }} key={3}>
            We accompany companies from Leipzig in the realization of their app
            and support them in bringing successful innovations to the region.
          </p>
        </>
      ),
      headlineSection2: "The Lean Prototype Method",
      textSection2: (
        <>
          <p>
            Many app projects fail due to poor planning and inflated functions.
            If the requirements change, it is then not possible to react agilely
            and the budget is gobbled up before the first measurable results.
          </p>
          <p style={{ transitionDelay: "0.3s" }}>
            With the lean prototype method you minimize this risk. In the first
            phase of app development, we work out the main requirements and core
            components of your app together. These are then immediately
            implemented in a lean prototype.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            As a result, after just a few weeks and with a minimal budget, you
            will have the first version of your app in your hands and can
            promptly start validating and testing the functions in use.
          </p>
        </>
      ),
      headlineSection3: "Full Service App Development",
      textSection3: (
        <>
          <p>The app development typically involves the following steps:</p>
          <ol>
            <li style={{ transitionDelay: "0.3s" }}>
              Strategy: Here the goal of your app is determined and a concept is
              created as to how your app can be led there most efficiently.
            </li>
            <li style={{ transitionDelay: "0.6s" }}>
              Design: The layout of your app is created. Everything revolves
              around user-friendliness and recognition value.
            </li>
            <li style={{ transitionDelay: "0.9s" }}>
              Implementation: In this step, your idea becomes reality. Your app
              gets its functions and becomes a finished product.
            </li>
            <li style={{ transitionDelay: "1.2s" }}>
              Release: Once your app is complete and bug tested, it will be
              released to the app store or platforms of your choice.
            </li>
            <li style={{ transitionDelay: "1.5s" }}>
              Maintenance: After release, it is important to regularly update
              the app and fix problems. With us you have a contact person for
              this even after the publication.
            </li>
          </ol>
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
        priceCalculatorButton={true}
        highlightImage={"/images/app-development/app-development-header.png"}
        highlightImageAlt="App Entwicklung Leipzig"
        requestButtonText={texts.requestButtonText}
      />
      <main>
        <PriceCalculatorSection />
        <CustomShapeDivider flip={true} />
        <ServiceSection
          key={"section1"}
          sectionRef={section1Ref}
          headline={texts.headlineSection1}
          text={texts.textSection1}
          image="/images/app-development/innovation.png"
          imageAlt={texts.headlineSection1}
          typewriterKey={"section1"}
        />
        <ServiceSection
          key={"section2"}
          sectionRef={section2Ref}
          headline={texts.headlineSection2}
          text={texts.textSection2}
          image="/images/app-development/cross-platform.png"
          imageAlt={texts.headlineSection2}
          typewriterKey={"section2"}
        />
        <SmallTechnologiesSection
          logos={[logos.flutter, logos.dart, logos.supabase, logos.firebase]}
        />
        <ServiceSection
          key={"section3"}
          sectionRef={section3Ref}
          headline={texts.headlineSection3}
          text={texts.textSection3}
          image="/images/app-development/app-development-process.png"
          imageAlt={texts.headlineSection3}
          typewriterKey={"section3"}
        />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
