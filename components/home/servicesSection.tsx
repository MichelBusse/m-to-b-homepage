import { useEffect, useState } from "react";
import styles from "../../styles/home/ServicesSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ServicesSection(props) {
  const router = useRouter();

  let texts = {
    webdesignHeadline: "Webdesign",
    developmentHeadline: "Softwareentwicklung",
    webdesignText: (
      <>
        <h3>Technologien</h3>
        <ul>
          <li>Moderne Web-Apps durch NextJS und React</li>
          <li>Klassische CMS-Systeme wie Wordpress</li>
          <li>Interaktive 3D-Umgebungen</li>
          <li>Blockchain und Web3</li>
          <li>Shopsysteme mit Shopify und Hydrogen</li>
        </ul>
        <h3>Optimierung</h3>
        <ul>
          <li>Suchmaschinenoptimierung (SEO)</li>
          <li>UX-Optimierung für perfekte Nutzbarkeit</li>
        </ul>
        <h3>Möglichkeiten</h3>
        <ul>
          <li>Logo-Design und Corporate-Design</li>
          <li>Drohnenvideoaufnahmen</li>
        </ul>
      </>
    ),
    developmentText: (
      <>
        <h3>Individualsoftware</h3>
        <ul>
          <li>Nach individuellen Anforderungen</li>
          <li>Fortschrittliche ERP-Lösungen</li>
          <li>
            Einsatzplanung, Mitarbeitermanagement, <br />
            Virtuelle Wartezimmer, Logistik, etc.
          </li>
          <li>Produktivität steigern durch Digitalisierung</li>
        </ul>
        <h3>Mobile App Entwicklung</h3>
        <ul>
          <li>Cross-Platform für Android und IOS</li>
          <li>Modernes UI- und UX-Design</li>
        </ul>
        <h3>IT-Beratung</h3>
        <ul>
          <li>Entdecken Sie die besten Lösungen und Technologien</li>
        </ul>
      </>
    ),
    webdesignButton: "Zum Webdesign",
    developmentButton: "Zur Softwareentwicklung"
  };

  if (router.locale == "en") {
    texts = {
      webdesignHeadline: "Webdesign",
      developmentHeadline: "Software Development",
      webdesignText: (
        <>
          <h3>Technologies</h3>
          <ul>
            <li>Modern web apps with NextJS and ReactJS</li>
            <li>Interactive 3D renderings</li>
            <li>Blockchain and Web3</li>
            <li>Shopping systems with Shopify and Hydrogen</li>
          </ul>
          <h3>Optimization</h3>
          <ul>
            <li>Search Engine Optimization (SEO)</li>
            <li>UX optimization for best usability</li>
          </ul>
          <h3>Possibilities</h3>
          <ul>
            <li>Logo design and corporate design</li>
            <li>Drone videos</li>
          </ul>
        </>
      ),
      developmentText: (
        <>
          <h3>Individual software</h3>
          <ul>
            <li>Software exactly according to your requirements</li>
            <li>
              Planning, management, <br />
              logistics, databases and much more
            </li>
            <li>Increase your productivity through digital workflows</li>
          </ul>
          <h3>Mobile app development</h3>
          <ul>
            <li>Cross platform for Android and IOS</li>
            <li>Modern UI and UX designs</li>
          </ul>
          <h3>IT consulting</h3>
          <ul>
            <li>Discover the best solutions and new technologies</li>
          </ul>
        </>
      ),
      webdesignButton: "Discover more",
      developmentButton: "Discover more"
    };
  }

  const [active, setActive] = useState("");

  const centerPos = (element) => element.offsetTop + window.innerHeight * 0.5;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (centerPos(props.anchorRefs.servicesRef.current) < scrollPosition) {
        setActive(styles.active);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [props.anchorRefs.servicesRef]);

  return (
    <>
      <div className="scrollAnchor" id="services"></div>
      <section id={styles.services} ref={props.anchorRefs.servicesRef}>
        <div className={styles.leftBackground}></div>
        <div className={styles.flexRow}>
          <article
            className={
              active ? styles.service + " " + styles.active : styles.service
            }
            style={{ backgroundImage: "url('/images/services/webdesign.jpg')" }}
          >
            <div className={styles.serviceImage}>
              <div className={styles.logoCircle}>
                <Image
                  src="/images/services/webdesignLogo.png"
                  alt="Webdesign Sachsen"
                  width={200}
                  height={152}
                  priority
                />
              </div>
              <Image
                className={styles.image}
                src="/images/services/webdesign.jpg"
                alt="Website Erstellung"
                layout="fill"
                priority
              />
            </div>
            <div className={styles.serviceText}>
              <h2>{texts.webdesignHeadline}</h2>
              {texts.webdesignText}
              <div className={styles.buttonWrapper}>
                <Link href="/Webdesign">
                  <a>
                    <button>{texts.webdesignButton}</button>
                  </a>
                </Link>
              </div>
            </div>
          </article>
          <article
            className={
              active ? styles.service + " " + styles.active : styles.service
            }
            style={{
              backgroundImage: "url('/images/services/programmierung.jpg')",
            }}
          >
            <div className={styles.serviceImage}>
              <div className={styles.logoCircle}>
                <Image
                  src="/images/services/programmierungLogo.png"
                  alt="Softwareentwicklung"
                  width={200}
                  height={150}
                  priority
                />
              </div>
              <Image
                className={styles.image}
                src="/images/services/programmierung.jpg"
                alt="Anwendungsentwicklung"
                layout="fill"
                priority
              />
            </div>
            <div className={styles.serviceText}>
              <h2>{texts.developmentHeadline}</h2>
              {texts.developmentText}
              <div className={styles.buttonWrapper}>
                <Link href="/Softwareentwicklung">
                  <a>
                    <button>{texts.developmentButton}</button>
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div id={styles.transition}>
          <div className={styles.leftBackground}></div>
          <div className={styles.transitionBackground}></div>
        </div>
      </section>
    </>
  );
}
