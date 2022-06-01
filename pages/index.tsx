import Header from "../components/home/header";
import AboutSection from "../components/home/aboutSection";
import ServicesSection from "../components/home/servicesSection";
import ProjectsSection from "../components/home/projectsSection";
import ContactSection from "../components/home/contactSection";
import CustomersSection from "../components/home/customersSection";
import { useRouter } from "next/router";
import Head from "next/head";

export default function HomePage(props) {
  const router = useRouter();

  let texts = {
    alternate: (
      <link
        rel="alternate"
        hrefLang="en"
        href="https://m-to-b.com/en"
      />
    ),
  };

  if (router.locale == "en") {
    texts = {
      alternate: (
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/"
        />
      ),
    };
  }

  return (
    <>
      <Head>
        {texts.alternate}
      </Head>
      <Header />
      <main>
        <AboutSection anchorRefs={props.anchorRefs} />
        <ServicesSection anchorRefs={props.anchorRefs} />
        <ProjectsSection anchorRefs={props.anchorRefs} />
        <CustomersSection />
        <ContactSection anchorRefs={props.anchorRefs} />
      </main>
    </>
  );
}
