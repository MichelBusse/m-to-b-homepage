import { useState, useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

export default function Navbar(props) {
  const navbarRef = useRef<HTMLDivElement>(null);

  const [menuActive, setMenuActive] = useState(false);
  const [menuScrolled, setMenuScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };


  useEffect(() => {
    const centerPos = (element) => element.offsetTop + window.innerHeight * 0.5;

    const onScroll = () => {
      if (window.scrollY > 0) {
        setMenuScrolled(true);
      } else {
        setMenuScrolled(false);
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
          setActiveMenuItem("");
        }
      }
    };

    const onResize = () => {
      if (window.innerWidth > 1063 && menuActive) {
        toggleMenu();
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [menuActive]);

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
          <a href="/#home">
            <div className={styles.mbLogo}></div>
          </a>
          <a href="/#home">
            <span>M-to-B</span>
          </a>
        </div>
        <div className={styles.ulWrapper}>
          <ul>
            <Link href="/#about">
              <a>
                <li className={activeMenuItem === "about" ? styles.active : ""}>Über Uns</li>
              </a>
            </Link>
            <a href="/#services">
              <li className={activeMenuItem === "services" ? styles.active : ""}>Leistungen</li>
            </a>
            <a href="/#projects">
              <li className={activeMenuItem === "projects" ? styles.active : ""}>Referenzen</li>
            </a>
            <a href="/#contact">
              <li className={activeMenuItem === "contact" ? styles.active : ""}>Kontakt</li>
            </a>
          </ul>
        </div>
        <div
          className={
            menuActive
              ? styles.hamburgerMenu + " " + styles.active
              : styles.hamburgerMenu
          }
          onClick={toggleMenu}
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
          <a href="#about">
            <li
              onClick={toggleMenu}
              style={{ transitionDelay: "0.05s" }}
              className={activeMenuItem === "about" ? styles.active : ""}
            >
              Über Uns
            </li>
          </a>
          <a href="#services">
            <li
              onClick={toggleMenu}
              style={{ transitionDelay: "0.1s" }}
              className={activeMenuItem === "services" ? styles.active : ""}
            >
              Leistungen
            </li>
          </a>
          <ul className={styles.sub}>
            <a href="/Webdesign">
              <li style={{ transitionDelay: "0.15s" }}>
                Webdesign
              </li>
            </a>
            <a href="/Softwareentwicklung">
              <li style={{ transitionDelay: "0.2s" }}>
                Entwicklung
              </li>
            </a>
          </ul>
          <a href="#projects">
            <li
              onClick={toggleMenu}
              style={{ transitionDelay: "0.25s" }}
              className={activeMenuItem === "projects" ? styles.active : ""}
            >
              Referenzen
            </li>
          </a>
          <a href="#contact">
            <li
              onClick={toggleMenu}
              style={{ transitionDelay: "0.3s" }}
              className={activeMenuItem === "contact" ? styles.active : ""}
            >
              Kontakt
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
