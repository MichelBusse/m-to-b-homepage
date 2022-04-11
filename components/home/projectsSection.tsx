import { useRef, useState, useEffect } from "react";
import styles from "../../styles/home/ProjectsSection.module.scss";

export default function ProjectsSection(props) {
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
  }, []);

  return (
    <>
      <div className="scrollAnchor" id="projects"></div>
      <section id={styles.projects} ref={props.anchorRefs.projectsRef}>
        <div className={styles.text}>
          <h2>Referenzen</h2>
          <p>Eine Auswahl unserer Projekte:</p>
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
              <img
                className={styles.projectBackgroundImage}
                alt="Webdesign Special Solutions"
                src="images/projects/project1.jpg"
              />
              <div className={styles.blackCurtain}></div>
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
              <img
                className={styles.projectBackgroundImage}
                alt="Webdesign Bundeskonferenz für Lehrer:innenbildung"
                src="images/projects/project2.jpg"
              />
              <div className={styles.blackCurtain}></div>
              <div className={styles.captionWrapper}>
                <div className={styles.caption}>
                  <h3>Bundeskonferenz für Lehrer:innenbildung</h3>
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
            <img
              className={styles.projectBackgroundImage}
              alt="Individualsoftware MB-Planner"
              src="images/projects/project3.jpg"
            />
            <div className={styles.blackCurtain}></div>
            <div className={styles.captionWrapper}>
              <div className={styles.caption}>
                <h3>Mitarbeiterplanung</h3>
                <p>Individualsoftware</p>
              </div>
            </div>
          </div>
          <div
            className={
              active ? styles.project + " " + styles.active : styles.project
            }
            id={styles.project4}
            style={{ transitionDelay: "0.8s" }}
          >
            <img
              className={styles.projectBackgroundImage}
              alt="Webdesign K&amp;S GmbH"
              src="images/projects/project4.jpg"
            />
            <div className={styles.blackCurtain}></div>
            <div className={styles.captionWrapper}>
              <div className={styles.caption}>
                <h3>K&amp;S GmbH</h3>
                <p>Immobilien</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.customers}>
        <div className={styles.slideWrapper}>
          <div className={styles.customer}>
            <img
              src="images/customers/special-solutions.png"
              alt="Special Solutions GmbH"
            />
          </div>
          <div className={styles.customer}>
            <img
              src="images/customers/uni-leipzig.png"
              alt="Universität Leipzig"
            />
          </div>
          <div className={styles.customer}>
            <img src="images/customers/zls-leipzig.png" alt="ZLS Leipzig" />
          </div>
          <div className={styles.customer}>
            <img
              src="images/customers/uniklinik-leipzig.png"
              alt="Universitätsklinikum Leipzig"
            />
          </div>
          <div className={styles.customer}>
            <img
              src="images/customers/final-fighters.png"
              alt="Final Fighters Gym Zwickau e.V."
            />
          </div>
          <div className={styles.customer}>
            <img src="images/customers/ks-gmbh.png" alt="K&amp;S GmbH" />
          </div>
          <div className={styles.customer}>
            <img
              src="images/customers/hartmann.png"
              alt="Übersetzungsbüro Hartmann"
            />
          </div>

          <div className={styles.copy}>
            <div className={styles.customer}>
              <img
                src="images/customers/special-solutions.png"
                alt="Special Solutions GmbH"
              />
            </div>
            <div className={styles.customer}>
              <img
                src="images/customers/uni-leipzig.png"
                alt="Universität Leipzig"
              />
            </div>
            <div className={styles.customer}>
              <img src="images/customers/zls-leipzig.png" alt="ZLS Leipzig" />
            </div>
            <div className={styles.customer}>
              <img
                src="images/customers/uniklinik-leipzig.png"
                alt="Universitätsklinikum Leipzig"
              />
            </div>
            <div className={styles.customer}>
              <img
                src="images/customers/final-fighters.png"
                alt="Final Fighters Gym Zwickau e.V."
              />
            </div>
            <div className={styles.customer}>
              <img src="images/customers/ks-gmbh.png" alt="K&S GmbH" />
            </div>
            <div className={styles.customer}>
              <img
                src="images/customers/hartmann.png"
                alt="Übersetzungsbüro Hartmann"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
