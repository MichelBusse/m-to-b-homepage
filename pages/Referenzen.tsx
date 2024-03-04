import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CustomersSection from "@/components/CustomersSection";
import { useRouter } from "next/router";
import Head from "next/head";
import MenuPlaceholder from "@/components/MenuPlaceholder";

export default function HomePage() {
  const router = useRouter();

  let texts = {
    title: "Referenzen - M-to-B Software",
    description:
      "Entdecke eine Auswahl unserer bisherigen Projekte und lass dich zu deinem Software-Projekt inspirieren.",
  };

  if (router.locale == "en") {
    texts = {
      title: "Projects - M-to-B Software",
      description:
        "Discover a selection of our previous projects and let yourself be inspired for your software project.",
    };
  }

  return (
    <>
      <Head>
        <title key="title">{texts.title}</title>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/Referenzen"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/Referenzen"
        />
        <meta name="description" content={texts.description} />
      </Head>
      <main>
        <MenuPlaceholder />
        <ProjectsSection />
        <CustomersSection />
        <ContactSection
          pageReference={texts.title}
        />
      </main>
    </>
  );
}
