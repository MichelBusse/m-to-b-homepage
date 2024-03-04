import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

type Props = {
  locationId?: String;
};

export default function Navbar(props: Props) {
  const router = useRouter();

  const navbarRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  const [menuActive, setMenuActive] = useState(false);
  const [menuInitialized, setMenuInitialized] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [contactLink, setContactLink] = useState("#contact");

  // Set active Menu Item and correct contact Link
  useEffect(() => {
    setContactLink("#contact");

    if (path.startsWith("/App-Agentur")) {
      setActiveMenuItem("apps");
    } else if (path.startsWith("/Augmented-Reality-Agentur")) {
      setActiveMenuItem("vr");
    } else if (path.startsWith("/Blog")) {
      setActiveMenuItem("blog");
      setContactLink("/#contact");
    } else if (path.startsWith("/App-Preis-Rechner")) {
      setActiveMenuItem("");
      setContactLink("/#contact");
    } else {
      setActiveMenuItem("");
    }
  }, [path]);

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
  }, [menuActive]);

  let texts = {
    apps: "App-Entwicklung",
    vr: "Augmented Reality",
    blog: "Blog",
    contact: "Kontakt",
    languageLink: "en",
    languageAlt: "Switch Language to English",
    languageImage: "/images/flags/english.svg",
  };

  if (router.locale == "en") {
    texts = {
      apps: "App Development",
      vr: "Augmented Reality",
      blog: "Blog",
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
            <div className={styles.logo}>
              <div
                className={styles.mbLogo}
                onClick={() => setMenuActive(false)}
              ></div>
              <span onClick={() => setMenuActive(false)}>M-to-B</span>
            </div>
          </Link>
        </div>
        <div className={styles.ulWrapper}>
          <ul>
            <li className={activeMenuItem === "apps" ? styles.active : ""}>
              <Link
                href={
                  "/App-Agentur" +
                  (props.locationId != null ? "/" + props.locationId : "")
                }
              >
                {texts.apps}
              </Link>
            </li>
            <li className={activeMenuItem === "vr" ? styles.active : ""}>
              <Link
                href={
                  "/Augmented-Reality-Agentur" +
                  (props.locationId != null ? "/" + props.locationId : "")
                }
              >
                {texts.vr}
              </Link>
            </li>
            <li className={activeMenuItem === "blog" ? styles.active : ""}>
              <Link href="/Blog">{texts.blog}</Link>
            </li>
            <li className={activeMenuItem === "contact" ? styles.active : ""}>
              <Link href={contactLink}>{texts.contact}</Link>
            </li>
          </ul>
        </div>
        <Link
          href={{
            pathname: path,
          }}
          locale={texts.languageLink}
        >
          <div className={styles.languageSwitchWrapper}>
            <Image
              src={texts.languageImage}
              alt={texts.languageAlt}
              width={50}
              height={50}
            />
          </div>
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
          <Link
            href={
              "/App-Agentur" +
              (props.locationId != null ? "/" + props.locationId : "")
            }
          >
            <li
              onClick={() => setMenuActive(false)}
              style={{ transitionDelay: "0.05s" }}
              className={activeMenuItem === "apps" ? styles.active : ""}
            >
              {texts.apps}
            </li>
          </Link>
          <Link
            href={
              "/Augmented-Reality-Agentur" +
              (props.locationId != null ? "/" + props.locationId : "")
            }
          >
            <li
              onClick={() => setMenuActive(false)}
              style={{ transitionDelay: "0.1s" }}
              className={activeMenuItem === "vr" ? styles.active : ""}
            >
              {texts.vr}
            </li>
          </Link>
          <Link href="/Blog">
            <li
              onClick={() => setMenuActive(false)}
              style={{ transitionDelay: "0.25s" }}
              className={activeMenuItem === "blog" ? styles.active : ""}
            >
              {texts.blog}
            </li>
          </Link>
          <Link href={contactLink}>
            <li
              onClick={() => setMenuActive(false)}
              style={{ transitionDelay: "0.3s" }}
              className={activeMenuItem === "contact" ? styles.active : ""}
            >
              {texts.contact}
            </li>
          </Link>
        </ul>
        <Link
          href={{
            pathname: path,
          }}
          locale={texts.languageLink}
        >
          <div className={styles.languageSwitchWrapper}>
            <Image
              onClick={() => setMenuActive(false)}
              src={texts.languageImage}
              alt={texts.languageAlt}
              width={50}
              height={50}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
