import Head from "next/head";
import { AnchorRefs } from "../_app";
import { useRouter } from "next/router";
import { useRef } from "react";
import ServiceSection from "../../components/utility/TextSection";
import CustomShapeDivider from "../../components/CustomShapeDivider";
import QuoteSection from "../../components/utility/QuoteSection";
import ContactSection from "../../components/ContactSection";
import Header from "../../components/Header";
import IconTextSection from "../../components/utility/IconTextSection";
import Image from "next/image";
import styles from "../../styles/ProjectPage.module.scss";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function ERPSoftwarePage(props: Props) {
  const router = useRouter();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  let texts = {
    title: "Mobile Event App - M-to-B Software",
    description:
      "App-Entwicklung kann kompliziert sein - muss sie aber nicht! Realisiere deine App mit kosteneffizienten Strategien und erfolgreicher App-Entwicklung.",
    requestButtonText: "Kostenloses Beratungsgespräch",
    headline: <>Mobile Event App</>,
    company: <>Clubz</>,
    headlineText: (
      <p>
        Clubz ist dein Netzwerk für Partyplanung und Club-Suche. Finde Events
        und Clubs in deiner Umgebung, entdecke Partys deiner Freunde und teile
        deine Veranstaltungen.
      </p>
    ),
    section1Headline: "Suchfunktion",
    section1Text: (
      <>
        <h3>Entdecke Events in deiner Umgebung</h3>
        <p>
          Mit Clubz filterst du Events nach Ort und Datum und siehst so immer,
          wo die nächste Party stattfindet. Teile Veranstaltungen mit deinen
          Freunden und sucht gemeinsam die besten aus.
        </p>
        <h3>Sieh die Pläne deiner Freunde</h3>
        <p>
          Du kannst sehen, an welchen Events deine Freunde teilnehmen und
          gemeinsam mit Ihnen Pläne machen. Entdecke wen du auf welcher Party
          treffen kannst und wohin deine Freunde als nächstes gehen.
        </p>
      </>
    ),
    section1Alt: "Event-App Beispiel",
    section2Headline: "Planung",
    section2Text: (
      <>
        <h3>Alle wichtigen Informationen auf einen Blick</h3>
        <p>
          Erhalte alle Informationen zu jedem Event, wie Zeit, Ort,
          Beschreibung, Tickets, Dresscode und vieles mehr. Bleibe auf dem
          Laufenden und wähle die beste Party für dich.
        </p>
        <h3>Organisiere deine Partys</h3>
        <p>
          Erstelle selbst Veranstaltungen und teile sie mit deinen Gästen. Gib
          ihnen alle Informationen auf einen Blick und sieh wer deinem Event
          zusagt. Du kannst deine Partys auch außerhalb der Clubz-App teilen und
          jeden erreichen den du möchtest.
        </p>
      </>
    ),
    section2Alt: "Event-App Beispiel",
    quote: "",
    source: "",
  };

  if (router.locale == "en") {
    texts = {
      title: "Mobile Event App - M-to-B Software",
      description:
        "App development can be complicated - but it doesn't have to be! Realize your app with cost-efficient strategies and successful app development.",
      requestButtonText: "Schedule a free consultation",
      headline: <>Mobile Event App</>,
      company: <>Clubz</>,
      headlineText: (
        <p>
          Clubz is your network for party planning and club research Find events
          and clubs in your area, discover your friends&apos; parties and share your
          events.
        </p>
      ),
      section1Headline: "Search",
      section1Text: (
        <>
          <h3>Find events in your area</h3>
          <p>
            With Clubz you can filter events by location and date, so you can
            always see where the next party is taking place. Get all important
            information such as tickets and dress code at a glance and compare
            different events to find the best one.
          </p>
          <h3>See your friends&apos; plans</h3>
          <p>
            You can see what events your friends are attending and make plans
            with them. Discover who you can meet at which party and where your
            friends are going next.
          </p>
        </>
      ),
      section1Alt: "Mobile App Example",
      section2Headline: "Plan",
      section2Text: (
        <>
          <h3>All important information at a glance</h3>
          <p>
            Receive all information about each event, such as time, place,
            description, tickets, dress code and much more. Stay up to date and
            choose the best party for you.
          </p>
          <h3>Organize your parties</h3>
          <p>
            Create events yourself and share them with your guests. Give them
            all information at a glance and see who suits your event. You can
            also share your parties outside of the Clubz app and reach anyone
            you want.
          </p>
        </>
      ),
      section2Alt: "Mobile App Example",
      quote: "",
      source: "",
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/projects/Mobile-Event-App"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/projects/Mobile-Event-App"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <Header
        headline={texts.headline}
        topHeadline={texts.company}
        text={texts.headlineText}
        highlightImage={"/images/projects/project3/project3-header.png"}
        requestButtonText={texts.requestButtonText}
      />
      <main>
        <IconTextSection
          label1="Flutter"
          label2="Supabase"
          label3="PostgreSQL"
          icon1={
            <div className={styles.logoWrapper}>
              <Image
                src="/images/technologies/flutter.svg"
                width={80}
                height={70}
                alt="Flutter"
              />
            </div>
          }
          icon2={
            <div className={styles.logoWrapper}>
              <Image
                src="/images/technologies/supabase.png"
                width={80}
                height={80}
                alt="Supabase"
              />
            </div>
          }
          icon3={
            <div className={styles.logoWrapper}>
              <Image
                src="/images/technologies/postgresql.png"
                width={80}
                height={80}
                alt="PostgreSQL"
              />
            </div>
          }
        />
        <CustomShapeDivider flip={true} />
        <ServiceSection
          key={"project2-1"}
          sectionRef={section1Ref}
          headline={texts.section1Headline}
          text={texts.section1Text}
          image="/images/projects/project3/project3-1.png"
          imageAlt={texts.section1Alt}
          typewriterKey={"project2-1"}
        />
        <ServiceSection
          key={"project2-2"}
          sectionRef={section2Ref}
          headline={texts.section2Headline}
          text={texts.section2Text}
          image="/images/projects/project3/project3-2.png"
          imageAlt={texts.section2Alt}
          typewriterKey={"project2-2"}
        />
        <CustomShapeDivider flip={false} />
        <QuoteSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
