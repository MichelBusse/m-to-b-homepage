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
import MenuPlaceholder from "../components/MenuPlaceholder";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  let texts = {
    title: "Referenzen - M-to-B",
    description:
      "Entdecke eine Auswahl unserer bisherigen Projekte und lass dich zu deinem Software-Projekt inspirieren.",
  };

  if (router.locale == "en") {
    texts = {
      title: "Projects - M-to-B",
      description:
        "Discover a selection of our previous projects and let yourself be inspired for your software project.",
    };
  }

  return (
    <>
      <Head>
        <title key="title">{texts.title}</title>
        <link rel="alternate" hrefLang="de" href="https://m-to-b.com/Referenzen" />
        <link rel="alternate" hrefLang="en" href="https://m-to-b.com/en/Referenzen" />
        <meta name="description" content={texts.description} />
      </Head>
      <main>
        <MenuPlaceholder />
        <ProjectsSection projectsRef={props.anchorRefs.projectsRef} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
