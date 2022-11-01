import { useState, useEffect } from "react";
import styles from "../../styles/home/ProjectsSection.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectsSection(props) {
  const router = useRouter();

  let texts = {
    headline: "Referenzen",
    subHeadline: "Eine Auswahl unserer Projekte:",
    project2Name: "Bundeskonferenz für Lehrer:innenbildung",
    project3Name: "Mixed Reality im OP",
    project3Category: "UPMC Pittsburgh",
    project4Category: "Immbobilien",
  };

  if (router.locale == "en") {
    texts = {
      headline: "Projects",
      subHeadline: "A selection of our projects:",
      project2Name: "Conference of education for teachers",
      project3Name: "Mixed Reality in Surgery",
      project3Category: "UPMC Pittsburgh",
      project4Category: "Real estate",
    };
  }

  const [active, setActive] = useState("");

  const centerPos = (element) =>
    element.offsetTop + element.offsetHeight * 0.35;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (centerPos(props.anchorRefs.projectsRef.current) < scrollPosition) {
        setActive(styles.active);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [props.anchorRefs.projectsRef]);

  return (
    <>
      <div className="scrollAnchor" id="projects"></div>
      <section id={styles.projects} ref={props.anchorRefs.projectsRef}>
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
                  <h3>Special Solutions</h3>
                  <p>IT-Services</p>
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
              href="https://www.linkedin.com/posts/m-to-b-softwareentwicklung_mixedreality-softwareengineering-medizintechnik-activity-6936760153329315840-kL4a/?utm_source=share&utm_medium=member_desktop"
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
                  <p>{texts.project3Category}</p>
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
                <h3>K&amp;S GmbH</h3>
                <p>{texts.project4Category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
