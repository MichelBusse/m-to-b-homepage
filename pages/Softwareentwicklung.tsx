import type { NextPage } from "next";
import CTASection from "../components/services/CTASection";
import SoftwareHeader from "../components/services/SoftwareHeader";
import ServiceSection from "../components/services/ServiceSection";
import IndividualSoftwareSquares from "../components/services/IndividualSoftwareSquares";
import ServiceStandardImage from "../components/services/ServiceStandardImage";
import Software3D from "../components/three/Software3D";

const stringsDE: Record<string, string> = {
  headline: "Softwareentwicklung",
};

const DevelopmentPage: NextPage = () => {
  return (
    <>
      <SoftwareHeader
        headline="Softwareentwicklung"
        slogan="Verbessern Sie die Effizienz in Ihrem Unternehmen, lösen Sie
              Probleme und verschaffen Sie sich einen Vorteil durch speziell
              angepasste Softwarelösungen."
      />
      <div className="scrollAnchor" id="software"></div>
      <ServiceSection
        headline="Firmensysteme"
        text={[
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            Individuell entwickelte Software lohnt sich überall, wo bestehende
            Programme die Anforderungen und Firmenprozesse nicht optimal
            abbilden können.
          </p>,
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            Dafür erstellen wir maßgeschneiderte Lösungen, welche Ihren
            Arbeitsablauf optimal erleichtern und Ihnen so einen großen Vorteil
            verschaffen.
          </p>,
          <p style={{ transitionDelay: "0.9s" }} key={3}>
            Von Einsatzplanung, Mitarbeitermanagement, Projektmanagement bis
            Inventarsystemen und Rechnungserstellung können viele Firmenprozesse
            digitalisiert und optimiert werden.
          </p>,
        ]}
        image={<IndividualSoftwareSquares />}
      />
      <ServiceSection
        headline="Web, App und Desktop"
        sectionStyle="blue"
        backgroundImage="/images/Softwareentwicklung/background.jpg"
        text={[
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            Durch moderne Cross-Platform-Programmierung und Technologien wie
            z.B. React, Electron und Flutter, entwickeln wir Anwendungen für
            alle Geräte. Ob klassische Desktop-Programme, mobile Apps oder alles
            kombiniert, wir schaffen eine einheitliche Oberfläche für alle
            Nutzer. Dabei erreichen wir eine optimale Zeiteffizienz und außerdem
            ganz neue Möglichkeiten, da nur eine Code Base für alle Plattformen
            gemanagt werden muss.
          </p>,
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            Wir legen bei der Entwicklung nicht nur Wert auf die Funktionen,
            sondern auch auf eine optimierte und clever gestaltete UI. Dadurch
            überzeugt unsere Software nicht nur durch gute Funktionen, sondern
            auch durch eine nutzerfreundliche und schnelle Handhabung.
          </p>,
        ]}
        image={
          <ServiceStandardImage
            image="/images/Softwareentwicklung/cross-platform.jpg"
            imageAlt="Web, App und Desktop"
          />
        }
      />
      <ServiceSection
        headline="VR und Mixed Reality"
        text={[
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            Nicht nur Spiele können durch VR realisiert werden, sondern auch
            verschiedenste andere Anwendungen: ob Präsentationsumgebungen oder
            interaktive Funktionen, die Möglichkeiten sind in diesem Bereich
            noch nicht annähernd ausgeschöpft.
          </p>,
        ]}
        image={
          <ServiceStandardImage
            image="/images/Softwareentwicklung/mixed-reality.jpg"
            imageAlt="VR und Mixed Reality"
          />
        }
      />
      <CTASection />
    </>
  );
};

export default DevelopmentPage;
