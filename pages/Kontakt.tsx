import ContactSection from "@/components/ContactSection";
import { useRouter } from "next/router";
import Head from "next/head";
import MenuPlaceholder from "@/components/MenuPlaceholder";


export default function HomePage() {
  const router = useRouter();

  let texts = {
    title: "Kontakt - M-to-B Software",
    description:
      "Nutze unser kostenloses Beratungsgespräch und lass dich von einem Experten zu deinem Software-Projekt beraten.",
  };

  if (router.locale == "en") {
    texts = {
      title: "Contact - M-to-B Software",
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
        <ContactSection
          pageReference={texts.title}
        />
      </main>
    </>
  );
}
