import { useState, useEffect } from "react";

import styles from "../../styles/home/AboutSection.module.scss";
import { BiTargetLock } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { useRouter } from "next/router";

export default function AboutSection(props) {
  const router = useRouter();

  let texts = {
    headline1: "Unser Ziel",
    headline2: "Unser Service",
    text1: [
      <p style={{ transitionDelay: "0.3s" }}>
        Als junges und kreatives Team stehen wir Ihnen zur Seite und lassen Ihr
        Projekt Wirklichkeit werden!
      </p>,
      <p style={{ transitionDelay: "0.6s" }}>
        Von einer modernen und außergewöhnlichen Website bis hin zu innovativen
        Softwaresystemen realisieren wir Ihre Vorstellungen.
      </p>,
      <p style={{ transitionDelay: "0.9s" }}>
        Unser Ziel - Sie zu beeindrucken!
      </p>,
    ],
    text2: [
      <p style={{ transitionDelay: "0.3s" }}>
        Mit uns an Ihrer Seite haben sie Zugang zu den neuesten Technologien und
        Trends, wie individuellen Drohnenaufnahmen, 3D-Umgebungen und
        Animationen.
      </p>,
      <p style={{ transitionDelay: "0.6s" }}>
        Zu unseren Leistungen zählen unter anderem die Entwicklung Mobiler Apps
        und Desktop-Anwendungen, sowie VR und Mixed Reality und umfassende
        Webentwicklung im Front- und Backend.
      </p>,
    ],
  };

  if (router.locale == "en") {
    texts = {
      headline1: "Our Goal",
      headline2: "Our Service",
      text1: [
        <p style={{ transitionDelay: "0.3s" }}>
          As a young start-up in software development, we want to realize your
          projects and support you in the process!
        </p>,
        <p style={{ transitionDelay: "0.6s" }}>
          It is our goal, to improve the software and workflow of many different
          sectors - like medical engineering, education or entertainment.
        </p>
      ],
      text2: [
        <p style={{ transitionDelay: "0.3s" }}>
          We offer a variety of modern technologies and possibilities, whether
          you want 3D renderings, individual animations or complex software
          architectures.
        </p>,
        <p style={{ transitionDelay: "0.6s" }}>
          Our capabilities include many parts of software development,
          especially mobile apps, full stack applications and web development.
        </p>,
      ],
    };
  }

  const [active, setActive] = useState("");
  const [typewriterList, addTypewriter] = useState<TypewriterClass[]>([]);
  const [typewriterPlaceholder, setTypewriterPlaceholder] = useState<String[]>([
    texts.headline1,
    texts.headline2,
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
  }, [typewriterList, props.anchorRefs.aboutRef]);

  return (
    <>
      <div className="scrollAnchor" id="about"></div>
      <section
        ref={props.anchorRefs.aboutRef}
        className={active + " " + styles.about}
      >
        <article className={styles.cell}>
          <h2>
            <BiTargetLock className={styles.icon} />
            {typewriterPlaceholder[0]}
            <Typewriter
              onInit={(typewriter) => {
                setTypewriterPlaceholder(["", ""]);
                typewriter.typeString(texts.headline1);
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
          {texts.text1}
        </article>
        <article className={styles.cell}>
          <h2>
            <ImCheckmark className={styles.icon} />
            {typewriterPlaceholder[1]}
            <Typewriter
              onInit={(typewriter) => {
                setTypewriterPlaceholder(["", ""]);
                typewriter.typeString(texts.headline2);
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
          {texts.text2}
        </article>
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
