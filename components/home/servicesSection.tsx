import { useRouter } from "next/router";
import { AnchorRefs } from "../../pages/_app";
import ServiceSection from "../services/ServiceSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function ServicesSection(props: Props) {
  const router = useRouter();

  let texts = {
    headlineSection1: "App Entwicklung",
    textSection1: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Von der Idee bis zum Upload in den App Store führen wir deine App
          durch den Entwicklungsprozess. Mit Erfahrung in der Cross-Platform und
          nativen <strong>App-Entwicklung</strong> können wir deine
          Anforderungen effizient und modern implementieren. Dabei legen wir
          genauso viel Wert auf verlässliche Funktionen wie auf ein
          überzeugendes und nutzbares UI-Design.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Wir setzen auf einen transparenten Projektablauf mit persönlichen
          Ansprechpartnern und enger Beteiligung. So stellen wir sicher, dass
          deine Anforderungen auch getroffen werden und alle Ressourcen
          effizient genutzt werden.
        </p>
      </>
    ),
    headlineSection2: "Individualsoftware",
    textSection2: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Mit <strong>individueller Software</strong> digitalisieren und
          optimieren wir die Arbeitsprozesse in deinem Unternehmen und helfen
          dabei, Stress und Zeit zu sparen.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Gemeinsam mit dir erstellen wir dafür{" "}
          <strong>maßgeschneiderte Softwarelösungen</strong>, die dann deine
          Anforderungen umsetzen und den Firmenprozess optimal abbilden.
        </p>
        <p style={{ transitionDelay: "0.9s" }} key={3}>
          Von Mitarbeitermanagement, Projektmanagement, Inventarsystemen oder
          Kundenkommunikation - wir haben bereits Projekte in den
          verschiedensten Bereichen entwickelt und freuen uns darauf, auch dich
          dabei unterstützen zu können.
        </p>
      </>
    ),
    headlineSection3: "Virtual Reality",
    textSection3: (
      <>
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          Nicht mitlaufen, sondern voran gehen - ganz nach diesem Motto
          entwickeln wir mit großem Interesse an neuen Einsatzmöglichkeiten
          für Virtual und Augmented Reality.
        </p>
        <p style={{ transitionDelay: "0.6s" }} key={2}>
          Zukünftige Anwendungen sind praktisch grenzenlos und der VR-Bereich
          entwickelt sich stetig weiter. Profitiere von unseren Experten und
          finde neue Möglichkeiten für deine Gebiete!
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
      headlineSection1: "App Development",
      textSection1: (
        <p style={{ transitionDelay: "0.3s" }} key={1}>
          We take up your ideas and escort them all the way through the
          development process and into the app store and to success. With our
          capabilities in cross platform as well as in nativ Android and IOS{" "}
          <strong>mobile development</strong>, we realize your requirements
          efficiently and truly modern. Therefore we take especially care of all
          functionalities as well as great design and usability.
        </p>
      ),
      headlineSection2: "Individual Software",
      textSection2: (
        <>
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            <strong>Individual software development</strong> provides value to
            all sectors, where excisting software cannot represent all the
            requirements or where there are completely new ideas and processes.
          </p>
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            Together with you as the customer, we develop{" "}
            <strong>fully customized software</strong>, with the target of
            realizing your vision in a modern and efficient fashion.
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
      <div className="scrollAnchor" id="apps"></div>
      <ServiceSection
        sectionRef={props.anchorRefs.appsRef}
        key={1}
        headline={texts.headlineSection1}
        text={texts.textSection1}
        image="/images/smartphone.png"
        imageAlt={texts.headlineSection1}
        typewriterKey={"1"}
      />
      <div className="scrollAnchor" id="software"></div>
      <ServiceSection
        sectionRef={props.anchorRefs.softwareRef}
        key={2}
        headline={texts.headlineSection2}
        text={texts.textSection2}
        image="/images/laptop.png"
        imageAlt={texts.headlineSection2}
        typewriterKey={"2"}
      />
      <div className="scrollAnchor" id="vr"></div>
      <ServiceSection
        sectionRef={props.anchorRefs.vrRef}
        key={3}
        headline={texts.headlineSection3}
        text={texts.textSection3}
        image="/images/vr.png"
        imageAlt={texts.headlineSection3}
        typewriterKey={"3"}
      />
    </>
  );
}
