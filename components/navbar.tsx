import { useState, useEffect, useRef } from "react";
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
  const [activeMenuItem, setActiveMenuItem] = useState("");

  useEffect(() => {
    const centerPos = (element: HTMLElement) =>
      element.offsetTop + window.innerHeight * 0.5;

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (props.anchorRefs) {
        if (
          props.anchorRefs.contactRef.current &&
          scrollPosition > centerPos(props.anchorRefs.contactRef.current)
        ) {
          setActiveMenuItem("contact");
        } else if (
          props.anchorRefs.projectsRef.current &&
          scrollPosition > centerPos(props.anchorRefs.projectsRef.current)
        ) {
          setActiveMenuItem("projects");
        } else if (
          props.anchorRefs.vrRef.current &&
          scrollPosition > centerPos(props.anchorRefs.vrRef.current)
        ) {
          setActiveMenuItem("vr");
        } else if (
          props.anchorRefs.softwareRef.current &&
          scrollPosition > centerPos(props.anchorRefs.softwareRef.current)
        ) {
          setActiveMenuItem("software");
        } else if (
          props.anchorRefs.appsRef.current &&
          scrollPosition > centerPos(props.anchorRefs.appsRef.current)
        ) {
          setActiveMenuItem("apps");
        } else {
          setActiveMenuItem("");
        }
      }
    };

    onScroll();

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

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [menuActive, props.anchorRefs, router.asPath]);

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
        <div className={styles.logo}>
          <Link href="/#home">
            <a>
              <div
                className={styles.mbLogo}
                onClick={() => setMenuActive(false)}
              ></div>
            </a>
          </Link>
          <Link href="/#home">
            <a>
              <span onClick={() => setMenuActive(false)}>M-to-B</span>
            </a>
          </Link>
        </div>
        <div className={styles.ulWrapper}>
          <ul>
            <Link href="/#apps">
              <a>
                <li className={activeMenuItem === "apps" ? styles.active : ""}>
                  {texts.apps}
                </li>
              </a>
            </Link>
            <Link href="/#software">
              <a>
                <li
                  className={activeMenuItem === "software" ? styles.active : ""}
                >
                  {texts.software}
                </li>
              </a>
            </Link>
            <Link href="/#vr">
              <a>
                <li className={activeMenuItem === "vr" ? styles.active : ""}>
                  {texts.vr}
                </li>
              </a>
            </Link>
            <Link href="/#projects">
              <a>
                <li
                  className={activeMenuItem === "projects" ? styles.active : ""}
                >
                  {texts.projects}
                </li>
              </a>
            </Link>
            <Link href="/#contact">
              <a>
                <li
                  className={activeMenuItem === "contact" ? styles.active : ""}
                >
                  {texts.contact}
                </li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.languageSwitchWrapper}>
          <Link href={""} locale={texts.languageLink}>
            <a>
              <Image
                src={texts.languageImage}
                alt={texts.languageAlt}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
        <div
          className={
            menuActive
              ? styles.hamburgerMenu + " " + styles.active
              : styles.hamburgerMenu
          }
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </nav>

      <div
        className={
          menuActive
            ? styles.mobileMenu + " " + styles.active
            : styles.mobileMenu
        }
      >
        <ul>
          <Link href="/#apps">
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
          <Link href="/#software">
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
          <Link href="/#vr">
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
          <Link href="/#projects">
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
          <Link href="/#contact">
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
        <div className={styles.languageSwitchWrapper}>
          <Link href={""} locale={texts.languageLink}>
            <a>
              <Image
                src={texts.languageImage}
                alt={texts.languageAlt}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
