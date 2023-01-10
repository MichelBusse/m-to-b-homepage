import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer";
import { CookiesProvider } from "react-cookie";
import { MutableRefObject, useEffect, useRef } from "react";
import { Router, useRouter } from "next/router";
import { useSmoothScroll } from "../hooks/SmoothScroll";
import CookieDisclaimer from "../components/cookieDisclaimer";

export type AnchorRefs = {
  appsRef: MutableRefObject<null>,
  softwareRef: MutableRefObject<null>,
  vrRef: MutableRefObject<null>,
  projectsRef: MutableRefObject<null>,
  contactRef: MutableRefObject<null>,
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  let texts = {
    title: "Ihre App-Agentur - M-to-B Software",
  };

  if (router.locale == "en") {
    texts = {
      title: "Your App Agency - M-to-B Software",
    };
  }

  useSmoothScroll();

  const anchorRefs : AnchorRefs = {
    appsRef: useRef(null),
    softwareRef: useRef(null),
    vrRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null),
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
          <title key="title">{texts.title}</title>
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
        </Head>
        <CookieDisclaimer />
        <Navbar
          anchorRefs={anchorRefs}
        />
        <ToastContainer />
        <Component anchorRefs={anchorRefs} {...pageProps} />
        <Footer />
      </CookiesProvider>
    </>
  );
}

export default MyApp;
