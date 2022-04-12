import { useEffect, useState } from "react";
import styles from "../../styles/home/ServicesSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection(props) {
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
          <div
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
                  layout="fill"
                />
              </div>
              <Image
                className={styles.image}
                src="/images/services/webdesign.jpg"
                alt="Website Erstellung"
                layout="fill"
              />
            </div>
            <div className={styles.serviceText}>
              <h2>Webdesign</h2>
              <h3>Layout und Design</h3>
              <ul>
                <li>Herrausstechende und moderne Webentwicklung</li>
                <li>Personalisierte Animationen, Interaktionen und Effekte</li>
                <li>Responsives Webdesign (angepasst auf alle Geräte)</li>
                <li>Persönliche Beratung, Personalisierte Funktionen</li>
              </ul>
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
              <div className={styles.buttonWrapper}>
                <Link href="/Webdesign">
                  <a>
                    <button>Zum Webdesign</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
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
                  layout="fill"
                />
              </div>
              <Image
                className={styles.image}
                src="/images/services/programmierung.jpg"
                alt="Anwendungsentwicklung"
                layout="fill"
              />
            </div>
            <div className={styles.serviceText}>
              <h2>Softwareentwicklung</h2>
              <h3>Personalisierte Firmensysteme</h3>
              <ul>
                <li>Nach individuellen Anforderungen</li>
                <li>Fortschrittliche ERP-Lösungen</li>
                <li>
                  Einsatzplanung, Mitarbeitermanagement, <br />
                  Virtuelle Wartezimmer, Logistik, etc.
                </li>
                <li>Produktivität steigern durch Digitalisierung</li>
              </ul>
              <h3>Desktop, Web und Mobile</h3>
              <ul>
                <li>Web-, Mobile- und Desktopanwendungen</li>
                <li>Cross-Platform-Programmierung für Android und IOS</li>
                <li>Modernes UI- und UX-Design</li>
              </ul>
              <h3>Virtual und Mixed Reality</h3>
              <ul>
                <li>Virtual Reality Apps für Ihre Anforderungen</li>
                <li>Augmented Reality in z.B. Smartphone Apps</li>
                <li>Mixed Reality für Forschung, Industrie und Medizin</li>
              </ul>
              <h3>IT-Beratung</h3>
              <ul>
                <li>Entdecken Sie die besten Lösungen und Technologien</li>
              </ul>
              <div className={styles.buttonWrapper}>
                <Link href="/Softwareentwicklung">
                  <a>
                    <button>Zur Softwareentwicklung</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.transition}>
          <div className={styles.leftBackground}></div>
          <div className={styles.transitionBackground}></div>
        </div>
      </section>
    </>
  );
}
