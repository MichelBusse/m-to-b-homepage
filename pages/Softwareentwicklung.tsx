import type { NextPage } from "next";
import CTASection from "../components/services/CTASection";
import SoftwareHeader from "../components/services/SoftwareHeader";
import ServiceSection from "../components/services/ServiceSection";
import IndividualSoftwareSquares from "../components/services/IndividualSoftwareSquares";
import ServiceStandardImage from "../components/services/ServiceStandardImage";
import TechnologiesSection from "../components/services/TechnologiesSection";
import ContactSection from "../components/home/contactSection";
import AppSection from "../components/services/AppSection";

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
      <AppSection />
      <TechnologiesSection />
      <ContactSection />
    </>
  );
};

export default DevelopmentPage;
