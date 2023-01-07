import { useState, useEffect, MutableRefObject } from "react";
import styles from "../../styles/home/ProjectsSection.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { AnchorRefs } from "../../pages/_app";

type Props = {
  projectsRef: MutableRefObject<null>
}

export default function ProjectsSection(props: Props) {
  const router = useRouter();

  let texts = {
    headline: "Referenzen",
    subHeadline: "Eine Auswahl unserer Projekte:",
    project1Name: "Managementsoftware",
    project1Company: "Special-Solutions GmbH",
    project2Name: "Konferenzsoftware",
    project2Company: "ZLS Leipzig",
    project3Name: "Mixed Reality im OP",
    project3Company: "UPMC Pittsburgh",
    project4Name: 'Immobilien-Website',
    project4Company: "K&S GmbH",
  };

  if (router.locale == "en") {
    texts = {
      headline: "Projects",
      subHeadline: "A selection of our projects:",
      project1Name: "Managementsoftware",
      project1Company: "Special-Solutions GmbH",  
      project2Name: "Conference-Software",
      project2Company: "ZLS Leipzig",
      project3Name: "Mixed Reality in Surgery",
      project3Company: "UPMC Pittsburgh",
      project4Name: 'Real Estate Website',
      project4Company: "K&S GmbH",
    };
  }

  const [active, setActive] = useState("");

  const centerPos = (element : HTMLElement) =>
    element.offsetTop + element.offsetHeight * 0.35;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (props.projectsRef.current && centerPos(props.projectsRef.current) < scrollPosition) {
        setActive(styles.active);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [props.projectsRef]);

  return (
    <>
      <div className="scrollAnchor" id="projects"></div>
      <section id={styles.projects} ref={props.projectsRef}>
        <div className={styles.text}>
          <h2>{texts.headline}</h2>
          <p>{texts.subHeadline}</p>
        </div>
        <div className={styles.flexWrapper}>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project1}
            style={{ transitionDelay: "0.2s" }}
          >
            <a href="https://special-s.de" target="_blank" rel="noreferrer">
              <Image
                className={styles.projectBackgroundImage}
                alt="Webdesign Special Solutions"
                src="/images/projects/project1.jpg"
                width={600}
                height={746}
              />
              <div className={styles.captionWrapper}>
                <div className={styles.caption}>
                  <h3>{texts.project1Name}</h3>
                  <p>{texts.project1Company}</p>
                </div>
              </div>
            </a>
          </div>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project2}
            style={{ transitionDelay: "0.4s" }}
          >
            <a
              href="https://conference.uni-leipzig.de/buko2021/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className={styles.projectBackgroundImage}
                alt="Webdesign Bundeskonferenz für Lehrer:innenbildung"
                src="/images/projects/project2.jpg"
                width={600}
                height={746}
              />
              <div className={styles.captionWrapper}>
                <div className={styles.caption}>
                  <h3>{texts.project2Name}</h3>
                  <p>{texts.project2Company}</p>
                </div>
              </div>
            </a>
          </div>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project3}
            style={{ transitionDelay: "0.6s" }}
          >
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:6936760153329315840"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className={styles.projectBackgroundImage}
                alt="Mixed Reality im OP"
                src="/images/projects/project3.jpg"
                width={600}
                height={746}
              />
              <div className={styles.captionWrapper}>
                <div className={styles.caption}>
                  <h3>{texts.project3Name}</h3>
                  <p>{texts.project3Company}</p>
                </div>
              </div>
            </a>
          </div>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project4}
            style={{ transitionDelay: "0.8s" }}
          >
            <Image
              className={styles.projectBackgroundImage}
              alt="Webdesign K&amp;S GmbH"
              src="/images/projects/project4.jpg"
              width={600}
              height={746}
            />
            <div className={styles.captionWrapper}>
              <div className={styles.caption}>
                <h3>{texts.project4Name}</h3>
                <p>{texts.project4Company}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
