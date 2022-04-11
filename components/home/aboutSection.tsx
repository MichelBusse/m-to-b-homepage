import { useState, useEffect } from "react";

import styles from "../../styles/home/AboutSection.module.scss";
import { BiTargetLock } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import Typewriter, { TypewriterClass } from "typewriter-effect";

export default function AboutSection(props) {
  const [active, setActive] = useState("");
  const [typewriterList, addTypewriter] = useState<TypewriterClass[]>([]);
  const [typewriterPlaceholder, setTypewriterPlaceholder] = useState<String[]>([
    "Unser Ziel",
    "Unser Service",
  ]);

  const centerPos = (element) => element.offsetTop + window.innerHeight * 0.5;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (centerPos(props.anchorRefs.aboutRef.current) < scrollPosition) {
        setActive(styles.active);
        typewriterList.forEach((typewriter) => typewriter.start());
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [typewriterList]);

  return (
    <>
      <div className="scrollAnchor" id="about"></div>
      <section
        ref={props.anchorRefs.aboutRef}
        className={active + " " + styles.about}
      >
        <div className={styles.cell}>
          <h2>
            <BiTargetLock className={styles.icon} />
            {typewriterPlaceholder[0]}
            <Typewriter
              onInit={(typewriter) => {
                setTypewriterPlaceholder(["", ""]);
                typewriter.typeString("Unser Ziel");
                addTypewriter((state) => [...state, typewriter]);
                if (
                  centerPos(props.anchorRefs.aboutRef.current) <
                  window.scrollY + window.innerHeight
                ) {
                  typewriter.start();
                }
              }}
            />
          </h2>
          <p style={{ transitionDelay: "0.3s" }}>
            Als junges und kreatives Team möchten wir Ihnen zur Seite stehen, um
            Ihr Projekt Wirklichkeit werden zu lassen.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Von einer modernen und außergewöhnlichen Website bis hin zu
            innovativen Softwaresystemen realisieren wir Ihre Vorstellungen.
          </p>
          <p style={{ transitionDelay: "0.9s" }}>
            Unser Ziel - Sie zu beeindrucken!
          </p>
          <a href="#contact">
            <button>kontakt@m-to-b.com</button>
          </a>
        </div>
        <div className={styles.cell}>
          <h2>
            <ImCheckmark className={styles.icon} />
            {typewriterPlaceholder[1]}
            <Typewriter
              onInit={(typewriter) => {
                setTypewriterPlaceholder(["", ""]);
                typewriter.typeString("Unser Service");
                addTypewriter((state) => [...state, typewriter]);
                if (
                  centerPos(props.anchorRefs.aboutRef.current) <
                  window.scrollY + window.innerHeight
                ) {
                  typewriter.start();
                }
              }}
            />
          </h2>
          <p style={{ transitionDelay: "0.3s" }}>
            Mit uns an Ihrer Seite haben sie Zugang zu den neuesten Technologien
            und Trends, wie individuellen Drohnenaufnahmen, 3D-Umgebungen und
            Animationen.
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            Zu unseren Leistungen zählen unter anderem die Entwicklung Mobiler
            Apps und Desktop-Anwendungen, sowie VR und Mixed Reality und
            umfassende Webentwicklung im Front- und Backend.
          </p>
        </div>
        <div className={styles.arrowWrapper}>
          <div className={styles.animation}>
            <a href="#services">
              <span className={styles.arrow}></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
