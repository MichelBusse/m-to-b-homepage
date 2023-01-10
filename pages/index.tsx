import Header from "../components/Header";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import CustomersSection from "../components/CustomersSection";
import { useRouter } from "next/router";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import AgileSection from "../components/AgileSection";
import { AnchorRefs } from "./_app";
import ValuesSection from "../components/ValuesSection";
import TechnologiesSection from "../components/TechnologiesSection";
import ServiceSection from "../components/ServiceSection";

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
    headlineSection1: "App Entwicklung",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Von der Idee bis zum Upload in den App Store führen wir Ihre App durch
          den Entwicklungsprozess. Mit Erfahrung in der Cross-Platform und
          nativen App-Entwicklung können wir Ihre Anforderungen effizient und
          modern implementieren. Dabei legen wir genauso viel Wert auf
          verlässliche Funktionen wie auf ein überzeugendes und nutzbares
          Design.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Wir setzen auf einen transparenten Projektablauf mit persönlichen
          Ansprechpartnern und enger Beteiligung. So stellen wir sicher, dass
          Ihre Anforderungen auch erfüllt werden und alle Ressourcen effizient
          genutzt werden.
        </p>
      </>
    ),
    headlineSection2: "Individualsoftware",
    textSection2: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Mit individueller Software digitalisieren und optimieren wir die
          Arbeitsprozesse in Ihrem Unternehmen und helfen dabei Stress und Zeit
          zu sparen.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Gemeinsam mit Ihnen erstellen wir dafür maßgeschneiderte
          Softwarelösungen, die dann Ihre Anforderungen umsetzen und den
          Firmenprozess optimal abbilden.
        </p>
        <p style={{ transitionDelay: "0.9s" }} key={3}>
          Von Mitarbeitermanagement, Projektmanagement, Inventarsystemen oder
          Kundenkommunikation - Wir haben bereits Projekte in den
          verschiedensten Bereichen entwickelt und freuen uns darauf, auch Sie
          dabei unterstützen zu können.
        </p>
      </>
    ),
    headlineSection3: "Virtual Reality",
    textSection3: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Nicht mitlaufen, sondern voran gehen - ganz nach diesem Motto
          entwickeln wir mit großem Interesse an neuen Einsatzmöglichkeiten für
          Virtual und Augmented Reality.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Zukünftige Anwendungen sind praktisch grenzenlos und der VR-Bereich
          entwickelt sich stetig weiter. Profitieren Sie von unseren Experten
          und finden Sie neue Möglichkeiten für Ihre Gebiete!
        </p>
        <p style={{ transitionDelay: "0.9s" }} key={3}>
          Wir haben bereits verschiedenste VR und AR Software entwickelt, bis
          hin zur Augmented Reality Navigation in der Chirurgie oder zur Lehre
          an der Universität.
        </p>
      </>
    ),
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
      headlineSection1: "App Development",
      textSection1: (
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          We take up your ideas and escort them all the way through the
          development process and into the app store and to success. With our
          capabilities in cross platform as well as in nativ Android and IOS{" "}
          mobile development, we realize your requirements efficiently and truly
          modern. Therefore we take especially care of all functionalities as
          well as great design and usability.
        </p>
      ),
      headlineSection2: "Individual Software",
      textSection2: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            Individual software development provides value to all sectors, where
            excisting software cannot represent all the requirements or where
            there are completely new ideas and processes.
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            Together with you as the customer, we develop fully customized
            software, with the target of realizing your vision in a modern and
            efficient fashion.
          </p>
          <p style={{ transitionDelay: "0.9s" }} key={3}>
            The use cases are extremly versatile, from employee and project
            management, invoice systems, logistics and medical technologies to
            industrial processes.
          </p>
        </>
      ),
      headlineSection3: "Virtual Reality",
      textSection3: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            Innovate with disruptive technologies - according to this motto, we
            create and develop new applications of Virtual and Augmented Reality
            in various sectors.
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            There are endless future possibilities of VR and the technology gets
            better and better. Benefit from our experts and discovern new
            software opportunities for your individual field of use.
          </p>
          <p style={{ transitionDelay: "0.9s" }} key={3}>
            We already developed numerous AR applications, like augmented
            reality navigation in surgery and apps for research at university.
          </p>
        </>
      ),
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
        <ServiceSection
          sectionRef={props.anchorRefs.appsRef}
          key={"home1"}
          headline={texts.headlineSection1}
          text={texts.textSection1}
          image="/images/app-development/app-development-header.png"
          imageAlt={texts.headlineSection1}
          typewriterKey={"home1"}
          siteLink={"/App-Entwicklung"}
          buttonDelay={"0.6s"}
        />
        <ServiceSection
          sectionRef={props.anchorRefs.softwareRef}
          key={"home2"}
          headline={texts.headlineSection2}
          text={texts.textSection2}
          image="/images/individual-software/individual-software-header.png"
          imageAlt={texts.headlineSection2}
          typewriterKey={"home2"}
          siteLink={"/Individualsoftware"}
          buttonDelay={"1.2s"}
        />
        <ServiceSection
          sectionRef={props.anchorRefs.vrRef}
          key={"home3"}
          headline={texts.headlineSection3}
          text={texts.textSection3}
          image="/images/virtual-reality/virtual-reality-header.png"
          imageAlt={texts.headlineSection3}
          typewriterKey={"home3"}
          siteLink={"/Virtual-Reality"}
          buttonDelay={"1.2s"}
        />
        <TechnologiesSection />
        <AgileSection />
        <CustomShapeDivider flip={false} />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
