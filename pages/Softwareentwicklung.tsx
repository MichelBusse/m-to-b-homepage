import type { NextPage } from "next";
import CTASection from "../components/services/CTASection";
import SoftwareHeader from "../components/services/SoftwareHeader";
import ServiceSection from "../components/services/ServiceSection";
import IndividualSoftwareSquares from "../components/services/IndividualSoftwareSquares";
import ServiceStandardImage from "../components/services/ServiceStandardImage";
import TechnologiesSection from "../components/services/TechnologiesSection";
import ContactSection from "../components/home/contactSection";

const stringsDE: Record<string, string> = {
  headline: "Softwareentwicklung",
};

const DevelopmentPage: NextPage = () => {
  return (
    <>
      <SoftwareHeader
        headline="Softwareentwicklung"
        slogan="Sehen Sie Ihre Ideen entstehen, lösen Sie
              Probleme und verschaffen Sie sich einen Vorteil durch individuell
              entwickelte Software, ob App oder Systemlösungen!"
      />
      <div className="scrollAnchor" id="software"></div>
      <ServiceSection
        headline="Individualsoftware"
        text={[
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            Individuell entwickelte Software lohnt sich überall, wo bestehende
            Programme die Anforderungen und Firmenprozesse nicht optimal
            abbilden können, oder wo völlig neue Ideen umgesetzt werden sollen.
          </p>,
          <p style={{ transitionDelay: "0.6s" }} key={2}>
            Gemeinsam mit Ihnen erstellen wir maßgeschneiderte Lösungen, welche
            alle Ziele treffen und Ihre Vorstellungen modern und effizienz
            umsetzen.
          </p>,
          <p style={{ transitionDelay: "0.9s" }} key={3}>
            Von Mitarbeitermanagement, Projektmanagement, Inventarsystemen und
            Rechnungserstellung können nahezu alle Firmenprozesse digitalisiert
            werden.
          </p>,
        ]}
        image={<IndividualSoftwareSquares />}
      />
      <TechnologiesSection />
      <ServiceSection
        headline="Mobile App-Entwicklung"
        text={[
          <p style={{ transitionDelay: "0.3s" }} key={1}>
            Durch moderne Cross-Platform-Programmierung und Technologien wie
            z.B. React, Electron und Flutter, entwickeln wir Anwendungen für
            alle Geräte. Ob klassische Desktop-Programme, mobile Apps oder alles
            kombiniert, wir schaffen eine einheitliche Oberfläche für alle
            Nutzer. Dabei erreichen wir eine optimale Zeiteffizienz und außerdem
            ganz neue Möglichkeiten, da nur eine Code Base für alle Plattformen
            gemanagt werden muss. Wir legen bei der Entwicklung nicht nur Wert
            auf die Funktionen, sondern auch auf eine optimierte und clever
            gestaltete UI. Dadurch überzeugt unsere Software nicht nur durch
            gute Funktionen, sondern auch durch eine nutzerfreundliche und
            schnelle Handhabung.
          </p>,
        ]}
        image={
          <ServiceStandardImage
            image="/images/Softwareentwicklung/cross-platform.jpg"
            imageAlt="VR und Mixed Reality"
          />
        }
      />
      <ContactSection />
    </>
  );
};

export default DevelopmentPage;
