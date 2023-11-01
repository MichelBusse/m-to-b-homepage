import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import CustomersSection from "../components/CustomersSection";
import { useRouter } from "next/router";
import Head from "next/head";
import { AnchorRefs } from "./_app";
import MenuPlaceholder from "../components/utility/MenuPlaceholder";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();

  let texts = {
    title: "Kontakt - M-to-B",
    description:
      "Nutze unser kostenloses Beratungsgespräch und lass dich von einem Experten zu deinem Software-Projekt beraten.",
  };

  if (router.locale == "en") {
    texts = {
      title: "Contact - M-to-B",
      description:
        "Use our free consultation and let an expert advise you on your software project.",
    };
  }

  return (
    <>
      <Head>
        <title key="title">{texts.title}</title>
        <link rel="alternate" hrefLang="de" href="https://m-to-b.com/Kontakt" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/Kontakt"
        />
        <meta name="description" content={texts.description} />
      </Head>
      <main>
        <MenuPlaceholder />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
