import { useState, useEffect, MutableRefObject } from "react";
import styles from "../styles/ProjectsSection.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  projectsRef: MutableRefObject<null>;
};

export default function ProjectsSection(props: Props) {
  const router = useRouter();

  let texts = {
    headline: "Referenzen",
    subHeadline: "Eine Auswahl unserer Projekte:",
    project1Name: "Management Software",
    project1Company: "Special Solutions GmbH",
    project2Name: "ERP-Software",
    project2Company: "Schülertreff GbR",
    project3Name: "AR im OP",
    project3Company: "UPMC Pittsburgh",
    project4Name: "Immobilien-Website",
    project4Company: "K&S GmbH",
  };

  if (router.locale == "en") {
    texts = {
      headline: "Projects",
      subHeadline: "A selection of our projects:",
      project1Name: "Management Software",
      project1Company: "Special Solutions GmbH",
      project2Name: "ERP Software",
      project2Company: "Schülertreff GbR",
      project3Name: "AR in Surgery",
      project3Company: "UPMC Pittsburgh",
      project4Name: "Real Estate Website",
      project4Company: "K&S GmbH",
    };
  }

  const [active, setActive] = useState("");

  const centerPos = (element: HTMLElement) =>
    element.offsetTop + element.offsetHeight * 0.35;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (
        props.projectsRef.current &&
        centerPos(props.projectsRef.current) < scrollPosition
      ) {
        setActive(styles.active);
      }
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

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
            <Link href={"/projects/Management-Software"}>
              <a>
                <Image
                  className={styles.projectBackgroundImage}
                  alt={styles.project1Name}
                  src="/images/projects/project1/project1-header.png"
                  layout="fill"
                  objectFit="cover"
                  
                />
                <div className={styles.captionWrapper}>
                  <div className={styles.caption}>
                    <h3>{texts.project1Name}</h3>
                    <p>{texts.project1Company}</p>
                  </div>
                </div>
              </a>
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
              <a>
                <Image
                  className={styles.projectBackgroundImage}
                  alt={styles.project2Name}
                  src="/images/projects/project2/project2-header.png"
                  layout="fill"
                  objectFit="cover"
                />
                <div className={styles.captionWrapper}>
                  <div className={styles.caption}>
                    <h3>{texts.project2Name}</h3>
                    <p>{texts.project2Company}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project3}
            style={{ transitionDelay: "0.6s" }}
          >
            <Link href={"/projects/Augmented-Reality-Entwicklung"}>
              <a>
                <Image
                  className={styles.projectBackgroundImage}
                  alt="Mixed Reality im OP"
                  src="/images/projects/project3/project3-2.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className={styles.captionWrapper}>
                  <div className={styles.caption}>
                    <h3>{texts.project3Name}</h3>
                    <p>{texts.project3Company}</p>
                  </div>
                </div>
              </a>
            </Link>
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
