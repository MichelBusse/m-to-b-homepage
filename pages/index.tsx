import Header from "../components/home/header";
import ServicesSection from "../components/home/servicesSection";
import ProjectsSection from "../components/home/projectsSection";
import ContactSection from "../components/home/contactSection";
import CustomersSection from "../components/home/customersSection";
import { useRouter } from "next/router";
import Head from "next/head";
import CustomShapeDivider from "../components/CustomShapeDivider";
import AgileSection from "../components/services/AgileSection";
import { AnchorRefs } from "./_app";
import ValuesSection from "../components/home/valuesSection";
import CrossPlatformSection from "../components/services/CrossPlatformSection";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="de" href="https://m-to-b.com/" />
        <link rel="alternate" hrefLang="en" href="https://m-to-b.com/en" />
      </Head>
      <Header />
      <main>
        <ValuesSection />
        <CustomShapeDivider flip={true} />
        <ServicesSection anchorRefs={props.anchorRefs} />
        <CrossPlatformSection />
        <AgileSection />
        <CustomShapeDivider flip={false} />
        <ProjectsSection anchorRefs={props.anchorRefs} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
