import { useState, useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [menuActive, setMenuActive] = useState(false);
  const [menuScrolled, setMenuScrolled] = useState(
    props.initialScrolled ? true : false
  );
  const [activeMenuItem, setActiveMenuItem] = useState("");

  useEffect(() => {
    const centerPos = (element) => element.offsetTop + window.innerHeight * 0.5;

    if ((router.asPath.startsWith("/Softwareentwicklung") || router.asPath.startsWith("/Webdesign"))) {
      setActiveMenuItem("services");
    }

    const onScroll = () => {
      if (!props.initialScrolled) {
        if (window.scrollY > 0) {
          setMenuScrolled(true);
        } else {
          setMenuScrolled(false);
        }
      }

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
          props.anchorRefs.servicesRef.current &&
          scrollPosition > centerPos(props.anchorRefs.servicesRef.current)
        ) {
          setActiveMenuItem("services");
        } else if (
          props.anchorRefs.aboutRef.current &&
          scrollPosition > centerPos(props.anchorRefs.aboutRef.current)
        ) {
          setActiveMenuItem("about");
        } else {
          if (!router.asPath.startsWith("/Softwareentwicklung") && !router.asPath.startsWith("/Webdesign")) {
            setActiveMenuItem("");
          }
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
  }, [menuActive, props.anchorRefs]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={
          menuActive || menuScrolled
            ? styles.navbar + " " + styles.scrolled
            : styles.navbar
        }
      >
        <div className={styles.logo}>
          <Link href="/#home">
            <a>
              <div className={styles.mbLogo}></div>
            </a>
          </Link>
          <Link href="/#home">
            <a>
              <span>M-to-B</span>
            </a>
          </Link>
        </div>
        <div className={styles.ulWrapper}>
          <ul>
            <Link href="/#about">
              <a>
                <li className={activeMenuItem === "about" ? styles.active : ""}>
                  Über Uns
                </li>
              </a>
            </Link>
            <Link href="/#services">
              <a>
                <li
                  className={activeMenuItem === "services" ? styles.active : ""}
                >
                  Leistungen
                </li>
              </a>
            </Link>
            <Link href="/#projects">
              <a>
                <li
                  className={activeMenuItem === "projects" ? styles.active : ""}
                >
                  Referenzen
                </li>
              </a>
            </Link>
            <Link href="/#contact">
              <a>
                <li
                  className={activeMenuItem === "contact" ? styles.active : ""}
                >
                  Kontakt
                </li>
              </a>
            </Link>
          </ul>
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
          <Link href="/#about">
            <a>
              <li
                onClick={() => setMenuActive(false)}
                style={{ transitionDelay: "0.05s" }}
                className={activeMenuItem === "about" ? styles.active : ""}
              >
                Über Uns
              </li>
            </a>
          </Link>
          <Link href="/#services">
            <a>
              <li
                onClick={() => setMenuActive(false)}
                style={{ transitionDelay: "0.1s" }}
                className={activeMenuItem === "services" ? styles.active : ""}
              >
                Leistungen
              </li>
            </a>
          </Link>
          <ul className={styles.sub}>
            <Link href="/Webdesign">
              <a>
                <li
                  onClick={() => setMenuActive(false)}
                  style={{ transitionDelay: "0.15s" }}
                >
                  Webdesign
                </li>
              </a>
            </Link>
            <Link href="/Softwareentwicklung">
              <a>
                <li
                  onClick={() => setMenuActive(false)}
                  style={{ transitionDelay: "0.2s" }}
                >
                  Entwicklung
                </li>
              </a>
            </Link>
          </ul>
          <Link href="/#projects">
            <a>
              <li
                onClick={() => setMenuActive(false)}
                style={{ transitionDelay: "0.25s" }}
                className={activeMenuItem === "projects" ? styles.active : ""}
              >
                Referenzen
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
                Kontakt
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </>
  );
}
