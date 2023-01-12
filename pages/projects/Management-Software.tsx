import Head from "next/head";
import { AnchorRefs } from "../_app";
import { useRouter } from "next/router";
import { useRef } from "react";
import ProjectsHeader from "../../components/ProjectsHeader";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function AppDevelopmentPage(props: Props) {
  const router = useRouter();

  let texts = {
    title: "ERP-Software / Management-Software - M-to-B",
    description:
      "Wir entwickeln ERP-Software für das Mitarbeitermanagement und die Einsatzplanung. Erleichtern und automatisieren Sie Ihre Prozesse.",
    headline: <>ERP-Software / Managementsoftware</>,
    company: <>Special-Solutions</>,
    headlineText: <></>,
  };

  if (router.locale == "en") {
    texts = {
      title: "App Development - M-to-B",
      description:
        "Develop your app with us as an app agency. We offer professional advice and individual solutions for iOS, Android and Cross-Platform.",
      headline: <>ERP-Software / Managementsoftware</>,
      company: <>Special-Solutions</>,
      headlineText: <></>,
    };
  }

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/projects/Management-Software"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/projects/Management-Software"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <ProjectsHeader headline={texts.headline} text={texts.headlineText} company={texts.company}/>
      <main></main>
    </>
  );
}
