import type { NextPage } from "next";
import WebdesignHeader from "../components/services/WebdesignHeader";
import CircleImage from "../components/services/CircleImage";
import WebdesignSection from "../components/services/WebdesignSection";
import CustomersSection from "../components/home/customersSection";
import ContactSection from "../components/home/contactSection";
import Head from "next/head";
import { useRouter } from "next/router";

const WebdesignPage: NextPage = () => {
  const router = useRouter();

  let texts = {
    title: <>Webdesign / Webentwicklung aus Leipzig - M-to-B</>,
    description:
      "Beeindrucken Sie Ihre Nutzer mit einer Website, die überzeugt! Durch neueste Web-Technologien bieten wir innovative Möglichkeiten für Ihre Homepage.",
    alternate: (
      <link
        rel="alternate"
        hrefLang="en"
        href="https://m-to-b.com/Softwareentwicklung/en"
      />
    ),
    headlineSection1: "Homepage Design",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Wichtigstes Aushängeschild für jede Firma ist eine überzeugende
          Webpräsenz. Wir legen bei der Konzipierung und Erstellung von jeder
          Website Wert auf Nutzbarkeit und Überzeugungskraft. Eine gut
          durchdachte und übersichtliche Struktur ist dabei genauso wichtig, wie
          ein modernes und außergewöhnliches Design, um sich sowohl von der
          Konkurrenz, als auch von einfachen Baukastensystemen abzuheben.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Durch eine individuelle Beratung, aufwändigen Designideen, Animationen
          und Funktionen sind wir Ihr Partner für besondere Anforderungen!
        </p>
      </>
    ),
    headlineSection2: "Web Apps und Progressive Web Apps",
    textSection2: (
      <p style={{ transitionDelay: "0.3s" }}>
        Durch Web-Applikationen können komplexe Anwendungen realisiert werden.
        Web-Apps bieten sich an für z.B. einen umfangreichen
        Produkt-Konfigurator, ein virtuelles Wartezimmer oder andere
        individuelle Funktionen für den Nutzer. Wo die Einsatzbereiche in
        speziell Ihrem Fall liegen, kann ganz verschieden sein: ob im internen
        Bereich für die Mitarbeiter, oder auf der Kundenseite.
        <br />
        Lassen Sie sich von uns gerne kostenlos beraten und entdecken Sie
        vielseitige Einsatzmöglichkeiten.
      </p>
    ),
    headlineSection3: "3D-Umgebungen",
    textSection3: (
      <p style={{ transitionDelay: "0.3s" }}>
        Als Besonderheit bieten wir neben der eher klassischen Webgestaltung
        auch aufwändige 3-dimensionale Websites. Diese sind nicht nur besondere
        Hingucker, sondern bieten auch Möglichkeiten für eine Vielzahl von
        Anforderungen:
        <br />
        Haben Sie z.B. ein Produkt, das eindrucksvoll aber dennoch übersichtlich
        präsentiert werden soll?
        <br />
        Möchten Sie besondere Interaktionsmöglichkeiten mit den Inhalten Ihrer
        Seite bieten?
        <br />
        Gibt es besondere Technologien, die anders nur sehr schwierig oder
        unmöglich darzustellen sind?
        <br />
        <b>Dann könnte eine 3-dimensionale Website interessant für Sie sein!</b>
      </p>
    ),
  };

  if (router.locale == "en") {
    texts = {
      title: <>Modern Webdesign and Web Development - M-to-B</>,
      description:
        "Impress and your users generate customers. With modern web technologies and experience in web development, we offer various opportunities for your web project!",
      alternate: (
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/Softwareentwicklung/"
        />
      ),
      headlineSection1: "Individual software",
      textSection1: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            The most important point of contact for many enterprises and their
            customers is the companies web presence. When designing and
            developing your website or web project, we value usability as high
            as outstanding design concepts and individual functionalities.
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            With individual consulting sessions and professional advisory, it is
            our aim to make your project successful and efficient.
          </p>
        </>
      ),
      headlineSection2: "Web Apps and Progressive Web Apps",
      textSection2: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            Web apps are perfect for realizing more complex applications and
            requirements. Product configurators, virtual waiting rooms and
            document generators are only some examples of unlimited areas of
            applications.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Those areas are truly individual and versatile, whether in intern
            employee areas or on the customers side.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            We would be happy to advise you on possible uses and are excited to
            explore the opportunities of web apps in your project.
          </p>
        </>
      ),
      headlineSection3: "3D renderings",
      textSection3: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            <strong>3D renderings on websites</strong> are a modern and new
            feature to present your products and create an unique user
            experience. 3D environments enable specific functionalities, which
            otherwise would be much more complicated, less user friendly or
            simply not possible.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Explore the possibilities of 3D development on the web and take the
            advantages for your project.
          </p>
        </>
      ),
    };
  }
  return (
    <>
      <Head>
        <title>{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <WebdesignHeader
        backgroundImage="/images/Webdesign/background.jpg"
        headline="Webdesign"
        slogan={texts.description}
      />
      <main>
        <WebdesignSection
          headline={texts.headlineSection1}
          text={texts.textSection1}
          image={
            <CircleImage
              image="/images/Webdesign/vorbesprechung.png"
              imageAlt={texts.headlineSection1}
            />
          }
        />
        <WebdesignSection
          headline={texts.headlineSection2}
          sectionStyle="blue"
          backgroundImage="/images/Webdesign/blueSection.jpg"
          text={texts.textSection2}
          image={
            <CircleImage
              image="/images/Webdesign/layout.png"
              imageAlt={texts.headlineSection2}
            />
          }
        />
        <WebdesignSection
          headline={texts.headlineSection3}
          text={texts.textSection3}
          image={
            <CircleImage
              image="/images/Webdesign/programmierung.png"
              imageAlt={texts.headlineSection3}
            />
          }
        />
        <CustomersSection />
        <ContactSection />
      </main>
    </>
  );
};

export default WebdesignPage;
