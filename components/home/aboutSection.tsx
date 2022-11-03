import { useState, useEffect } from "react";

import styles from "../../styles/home/AboutSection.module.scss";
import { BiTargetLock } from "react-icons/bi";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { useRouter } from "next/router";
import Software3D from "../three/Software3D";

export default function AboutSection(props) {
  const router = useRouter();

  let texts = {
    headline1: "Unser Ziel",
    text1: (
      <>
        <p style={{ transitionDelay: "0.3s" }}>
          Wir sind ein 2020 gegründetes StartUp und möchten unseren Kunden
          helfen, erfolgreiche und beeindruckende Apps zu entwickeln.
        </p>
        <p style={{ transitionDelay: "0.6s" }}>
          Dafür besteht unser Team aus jungen Programmierern und Designern, die
          mit Begeisterung und keiner Angst vor neuen Technologien oder Ideen
          entwickeln.
        </p>
        <p style={{ transitionDelay: "0.9s" }}>
          Unser Ziel ist es, deine Vorstellungen Wirklichkeit werden zu lassen!
          Dabei stehen wir für moderne App-Entwicklung, einen transparenten
          Projektablauf und enge indiviudelle Kommunikation.
        </p>
      </>
    ),
  };

  if (router.locale == "en") {
    texts = {
      headline1: "Our Goal",
      text1: (
        <>
          <p style={{ transitionDelay: "0.3s" }}>
            As a young start-up in software development, we want to realize your
            projects and support you in the process!
          </p>
          <p style={{ transitionDelay: "0.6s" }}>
            It is our goal, to improve the software and workflow of many
            different sectors - like medical engineering, education or
            entertainment.
          </p>
        </>
      ),
    };
  }

  const [active, setActive] = useState("");
  const [typewriterList, addTypewriter] = useState<TypewriterClass[]>([]);
  const [typewriterPlaceholder, setTypewriterPlaceholder] = useState<String[]>([
    texts.headline1,
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
          <div className={styles.textSection}>
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
          </div>
        </article>
        <article className={styles.cell}>
          <Software3D />
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
