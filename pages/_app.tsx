import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import { CookiesProvider } from "react-cookie";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { useSmoothScroll } from "../hooks/SmoothScroll";
import CookieDisclaimer from "@/components/CookieDisclaimer";
import Navbar from "@/components/Navbar";


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  let texts = {
    title: "Deine App Agentur - M-to-B Software",
  };

  if (router.locale == "en") {
    texts = {
      title: "Your App Agency - M-to-B Software",
    };
  }

  useSmoothScroll();

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
            href="/apple-touch-icon.png"
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
            color="#01506b"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
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
          locationId={pageProps.id}
        />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </CookiesProvider>
    </>
  );
}

export default MyApp;
