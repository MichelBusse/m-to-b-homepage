import { useEffect, useState } from "react";
import styles from "../../styles/home/Header.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Software3D from "../three/Software3D";

export default function Header() {
  const router = useRouter();

  const [headerVisible, setHeaderVisible] = useState(false);
  const [squareCount, setSquareCount] = useState(0);

  useEffect(() => {
    if (squareCount == 0) {
      for (let i = 0; i < 24; i++) {
        setTimeout(() => {
          setSquareCount(squareCount + i);
        }, 200 * i);
      }
    }
    if (!headerVisible) {
      setTimeout(() => {
        setHeaderVisible(true);
      }, 500);
    }
  });

  let texts = {
    headline: "aus Leipzig",
    services: "Kostenloses Beratungsgespräch vereinbaren!",
  };
  let phrases = ["Software", "Apps", "Zukunft"];

  if (router.locale == "en") {
    phrases = ["Software", "Apps", "Future"];
    texts = {
      headline: "from Leipzig",
      services: "Schedule a free consultation!",
    };
  }

  return (
    <>
      <section id="home" className={styles.home}>
        <div className={styles.squareContainer}>
          {Array.from(Array(18).keys()).map((index) => {
            return (
              <div
                key={index}
                className={
                  squareCount > 0
                    ? styles.square + " " + styles.active
                    : styles.square
                }
                style={{
                  right: ((Math.floor(index / 4) % 6) - (index % 4)) * 11 + "em",
                  bottom: (index % 4) * 11 + "em",
                  opacity: 0.3 - 0.015 * index,
                  transitionDelay: 50 * index + "ms",
                }}
              ></div>
            );
          })}
        </div>
        <div className={styles.cell}>
          <header id={styles.header}>
            <h1 className={headerVisible ? styles.visible : ""}>
              Deine Agentur für App-{" "}
              <br/>und Software-Entwicklung <span className={styles.typewriterCursor}>|</span>
            </h1>
            <p>
              Mit Erfahrung und Begeisterung realisieren wir deine Ideen!
              <br />
              Als App-Agentur helfen wir unseren Kunden, erfolgreiche und
              beeindruckende Apps zu entwickeln.
            </p>
            <p>
              Nutze unsere kostenlose Beratung und lass uns gemeinsam dein
              Projekt verwirklichen.
            </p>
            <a href="#formular">
              <button className={headerVisible ? styles.visible : ""}>
                {texts.services}
              </button>
            </a>
          </header>
        </div>
        <div className={styles.cell}>
          <div className={styles.highlightWrapper}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/backgroundFigure.png"
                alt="App-Entwickler Virtual Reality"
                width={420}
                height={580}
              />
            </div>
            <div className={styles.interactiveWrapper}>
              <Software3D />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
