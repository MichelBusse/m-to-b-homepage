import { useEffect, useState } from "react"
import styles from "../../styles/home/Header.module.scss"
import TextScrambler from 'react-scramble-text'

export default function Header() {

  const [headerVisible, setHeaderVisible] = useState(false)
  const [squareCount, setSquareCount] = useState(0)

  useEffect(() => {
    if (squareCount == 0) {
      for (let i = 0; i < 24; i++) {
        setTimeout(() => {
          setSquareCount(squareCount + i)
        }, 200 * i)
      }
    }
    if (!headerVisible) {
      setTimeout(() => {
        setHeaderVisible(true)
      }, 500)
    }

  })

  const phrases = ["Software", "Zukunft"];

  return (
    <>
      <div className={styles.homeBackgroundWrapper}>
        <video
          className={styles.backgroundVideo + " " + styles.homeParts}
          src="/videos/main_background_video.mp4"
          preload="metadata"
          muted
          loop
          autoPlay
          poster="/videos/thumbnail.jpeg"
        ></video>
        <div className={styles.backgroundColor + " " + styles.homeParts}></div>
        <div className={styles.squareContainer + " " + styles.homeParts}>
          <div
            className={squareCount > 0 ? styles.square + " " + styles.active : styles.square}
            style={{ left: 0, top: 0, opacity: 0.25 }}
          ></div>
          <div
            className={squareCount > 1 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "11em", top: 0, opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 2 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "22em", top: 0, opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 3 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "33em", top: 0, opacity: 0.15 }}
          ></div>
          <div
            className={squareCount > 4 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "44em", top: 0, opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 5 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "55em", top: 0, opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 6 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "66em", top: 0, opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 7 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "0em", top: "11em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 8 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "11em", top: "11em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 9 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "22em", top: "11em", opacity: 0.15 }}
          ></div>
          <div
            className={squareCount > 10 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "33em", top: "11em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 11 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "0em", top: "22em", opacity: 0.15 }}
          ></div>
          <div
            className={squareCount > 12 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "11em", top: "22em", opacity: 0.15 }}
          ></div>
          <div
            className={squareCount > 13 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "22em", top: "22em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 14 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "33em", top: "22em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 15 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "0em", top: "33em", opacity: 0.15 }}
          ></div>
          <div
            className={squareCount > 16 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "11em", top: "33em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 17 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "22em", top: "33em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 18 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "0em", top: "44em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 19 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "11em", top: "44em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 20 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "22em", top: "44em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 21 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "0em", top: "55em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 22 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "11em", top: "55em", opacity: 0.2 }}
          ></div>
          <div
            className={squareCount > 23 ? styles.square + " " + styles.active : styles.square}
            style={{ left: "0em", top: "66em", opacity: 0.2 }}
          ></div>
        </div>
      </div>
      <div id={styles.homeFixed} className={styles.homeParts}>
        <header id={styles.header}>
          <h1 className={headerVisible ? styles.visible : ""}>M-to-B</h1>
          <h2 className={headerVisible ? styles.visible : ""} id={styles.subHeadline}>
            <TextScrambler 
              phrases={phrases}
              speed={50}
              pauseTime={3000}
              chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              symbolColor="rgb(255, 255, 255)" /> aus Leipzig</h2>
          <a href="#services">
            <button className={headerVisible ? styles.visible : ""}>Unsere Leistungen</button>
          </a>
        </header>
      </div>
      <section id="home" className={styles.home}></section>
    </>
  );
}
