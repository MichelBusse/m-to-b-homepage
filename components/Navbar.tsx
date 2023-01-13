import { useState, useEffect, useRef, useCallback } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnchorRefs } from "../pages/_app";
import Image from "next/image";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function Navbar(props: Props) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [menuActive, setMenuActive] = useState(false);
  const [menuInitialized, setMenuInitialized] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const setActiveMenuItemOfPage = useEffect(() => {
    switch (router.asPath) {
      case "/App-Entwicklung":
        setActiveMenuItem("apps");
        break;
      case "/Individualsoftware":
        setActiveMenuItem("software");
        break;
      case "/Virtual-Reality-Entwicklung":
        setActiveMenuItem("vr");
        break;
      case "/Referenzen":
        setActiveMenuItem("projects");
        break;
      default:
        setActiveMenuItem("");
        break;
    }
  }, [router.asPath]);

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    const onResize = () => {
      if (window.innerWidth > 1063 && menuActive) {
        setMenuActive(!menuActive);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [menuActive, props.anchorRefs, router.asPath, setActiveMenuItemOfPage]);

  let texts = {
    apps: "Apps",
    software: "Software",
    vr: "Virtual Reality",
    projects: "Referenzen",
    contact: "Kontakt",
    languageLink: "en",
    languageAlt: "Switch Language to English",
    languageImage: "/images/flags/english.svg",
  };

  if (router.locale == "en") {
    texts = {
      apps: "Apps",
      software: "Software",
      vr: "Virtual Reality",
      projects: "Projects",
      contact: "Contact",
      languageLink: "de",
      languageAlt: "Switch Language to German",
      languageImage: "/images/flags/german.svg",
    };
  }

  return (
    <>
      <nav
        ref={navbarRef}
        className={
          menuActive ? styles.navbar + " " + styles.scrolled : styles.navbar
        }
      >
        <div className={styles.logoLinkWrapper}>
          <Link href="/">
            <a>
              <div className={styles.logo}>
                <div
                  className={styles.mbLogo}
                  onClick={() => setMenuActive(false)}
                ></div>
                <span onClick={() => setMenuActive(false)}>M-to-B</span>
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.ulWrapper}>
          <ul>
            <li className={activeMenuItem === "apps" ? styles.active : ""}>
              <Link href="/App-Entwicklung">
                <a>{texts.apps}</a>
              </Link>
            </li>
            <li className={activeMenuItem === "software" ? styles.active : ""}>
              <Link href="/Individualsoftware">
                <a>{texts.software}</a>
              </Link>
            </li>
            <li className={activeMenuItem === "vr" ? styles.active : ""}>
              <Link href="/Virtual-Reality-Entwicklung">
                <a>{texts.vr}</a>
              </Link>
            </li>
            <li className={activeMenuItem === "projects" ? styles.active : ""}>
              <Link href="/Referenzen">
                <a>{texts.projects}</a>
              </Link>
            </li>
            <li className={activeMenuItem === "contact" ? styles.active : ""}>
              <Link href="#contact">
                <a>{texts.contact}</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href={{
            pathname: router.pathname,
            query: router.query,
          }}
          locale={texts.languageLink}
        >
          <a>
            <div className={styles.languageSwitchWrapper}>
              <Image
                src={texts.languageImage}
                alt={texts.languageAlt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
        <div
          className={`${styles.hamburgerMenu} ${menuActive && styles.active}`}
          onClick={() => {
            setMenuActive((prev) => !prev);
            setMenuInitialized(true);
          }}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${menuActive && styles.active} ${
          menuInitialized && styles.initialized
        }`}
      >
        <ul>
          <Link href="/App-Entwicklung">
            <a>
              <li
                onClick={() => setMenuActive(false)}
                style={{ transitionDelay: "0.05s" }}
                className={activeMenuItem === "apps" ? styles.active : ""}
              >
                {texts.apps}
              </li>
            </a>
          </Link>
          <Link href="/Individualsoftware">
            <a>
              <li
                onClick={() => setMenuActive(false)}
                style={{ transitionDelay: "0.1s" }}
                className={activeMenuItem === "software" ? styles.active : ""}
              >
                {texts.software}
              </li>
            </a>
          </Link>
          <Link href="/Virtual-Reality-Entwicklung">
            <a>
              <li
                onClick={() => setMenuActive(false)}
                style={{ transitionDelay: "0.1s" }}
                className={activeMenuItem === "vr" ? styles.active : ""}
              >
                {texts.vr}
              </li>
            </a>
          </Link>
          <Link href="/Referenzen">
            <a>
              <li
                onClick={() => setMenuActive(false)}
                style={{ transitionDelay: "0.25s" }}
                className={activeMenuItem === "projects" ? styles.active : ""}
              >
                {texts.projects}
              </li>
            </a>
          </Link>
          <Link href="#contact">
            <a>
              <li
                onClick={() => setMenuActive(false)}
                style={{ transitionDelay: "0.3s" }}
                className={activeMenuItem === "contact" ? styles.active : ""}
              >
                {texts.contact}
              </li>
            </a>
          </Link>
        </ul>
        <Link
          href={{
            pathname: router.pathname,
            query: router.query,
          }}
          locale={texts.languageLink}
        >
          <a>
            <div className={styles.languageSwitchWrapper}>
              <Image
                onClick={() => setMenuActive(false)}
                src={texts.languageImage}
                alt={texts.languageAlt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
