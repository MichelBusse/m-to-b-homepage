import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer";
import { CookiesProvider } from "react-cookie";
import { useEffect, useRef } from "react";
import { Router, useRouter } from "next/router";
import { useSmoothScroll } from "../hooks/SmoothScroll";
import CookieDisclaimer from "../components/cookieDisclaimer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  let texts = {
    title: <>M-to-B Softwareentwicklung - Zukunft aus Leipzig</>,
    description: "Mit neusten Technologien und Erfahrung entwickeln wir moderne Softwarelösungen - von Apps und beeindruckendem Webdesign, bis zu Virtual Reality"
  };

  if (router.locale == "en") {
    texts = {
      title: <>M-to-B Software Development - Future from Leipzig</>,
      description: "Gain an advantage by individual software development with modern technologies and experience - from apps and impressive webdesign all the way to virtual reality"
    };
  }

  useSmoothScroll();

  const anchorRefs = {
    aboutRef: useRef(),
    servicesRef: useRef(),
    projectsRef: useRef(),
    contactRef: useRef(),
  };

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
      });
    });
  });

  return (
    <>
      <CookiesProvider>
        <Head>
          <title>{texts.title}</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#ffffff"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#022636" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#022636" />
          <meta name="theme-color" content="#022636" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="M-to-B Softwareentwicklung" />
          <meta
            name="description"
            content={texts.description}
          />
        </Head>
        <CookieDisclaimer />
        <Navbar
          anchorRefs={anchorRefs}
          initialScrolled={
            router.asPath.startsWith("/Softwareentwicklung") ||
            router.asPath.startsWith("/Webdesign")
          }
        />
        <ToastContainer />
        <Component anchorRefs={anchorRefs} {...pageProps} />
        <Footer />
      </CookiesProvider>
    </>
  );
}

export default MyApp;
