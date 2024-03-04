import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProjectsSection() {
  const router = useRouter();
  const projectsRef = useRef(null);

  let texts = {
    headline: "Referenzen",
    subHeadline: "Eine Auswahl unserer Projekte:",
    project1Name: "Management Software",
    project1Company: "Special Solutions GmbH",
    project2Name: "ERP-Software",
    project2Company: "Schülertreff GbR",
    project3Name: "Event App",
    project3Company: "Clubz",
    project4Name: "AR im OP",
    project4Company: "UPMC Pittsburgh",
  };

  if (router.locale == "en") {
    texts = {
      headline: "Projects",
      subHeadline: "A selection of our projects:",
      project1Name: "Management Software",
      project1Company: "Special Solutions GmbH",
      project2Name: "ERP Software",
      project2Company: "Schülertreff GbR",
      project3Name: "Event App",
      project3Company: "Clubz",
      project4Name: "AR in Surgery",
      project4Company: "UPMC Pittsburgh",
    };
  }

  const [active, setActive] = useState("");

  const centerPos = (element: HTMLElement) =>
    element.offsetTop + element.offsetHeight * 0.35;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (
        projectsRef.current &&
        centerPos(projectsRef.current) < scrollPosition
      ) {
        setActive(styles.active);
      }
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scrollAnchor" id="projects"></div>
      <section id={styles.projects} ref={projectsRef}>
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
            <Link href={"/projects/Management-Software"}>
              <Image
                className={styles.projectBackgroundImage}
                alt={styles.project1Name}
                src="/images/projects/project1/project1-header.png"
                width={500}
                height={500}
              />
              <div className={styles.captionWrapper}>
                <div className={styles.caption}>
                  <h3>{texts.project1Name}</h3>
                  <p>{texts.project1Company}</p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project2}
            style={{ transitionDelay: "0.4s" }}
          >
            <Link href={"/projects/ERP-Software"}>
              <Image
                className={styles.projectBackgroundImage}
                alt={styles.project2Name}
                src="/images/projects/project2/project2-header.png"
                width={500}
                height={500}
              />
              <div className={styles.captionWrapper}>
                <div className={styles.caption}>
                  <h3>{texts.project2Name}</h3>
                  <p>{texts.project2Company}</p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project3}
            style={{ transitionDelay: "0.6s" }}
          >
            <Link href={"/projects/Mobile-Event-App"}>
              <Image
                className={styles.projectBackgroundImage}
                alt="Mobile Event App"
                src="/images/projects/project3/project3-header.png"
                width={500}
                height={500}
              />
              <div className={styles.captionWrapper}>
                <div className={styles.caption}>
                  <h3>{texts.project3Name}</h3>
                  <p>{texts.project3Company}</p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project4}
            style={{ transitionDelay: "0.8s" }}
          >
            <Link href={"/projects/Augmented-Reality-Entwicklung"}>
              <Image
                className={styles.projectBackgroundImage}
                alt="Mixed Reality im OP"
                src="/images/projects/project4/project4-header.png"
                width={500}
                height={500}
              />
              <div className={styles.captionWrapper}>
                <div className={styles.caption}>
                  <h3>{texts.project4Name}</h3>
                  <p>{texts.project4Company}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
