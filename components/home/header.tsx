import { useEffect, useState } from "react";
import styles from "../../styles/home/Header.module.scss";
import Image from "next/image";
import Software3D from "../three/Software3D";

type Props = {
  headline: JSX.Element;
  text: JSX.Element;
  button: string;
  highlightImage?: string;
  highlightImageAlt?: string;
};

export default function Header(props: Props) {
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
                  right:
                    ((Math.floor(index / 4) % 6) - (index % 4)) * 11 + "em",
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
              {props.headline}{" "}
              <span className={styles.typewriterCursor}>|</span>
            </h1>
            {props.text}
            <a href="#formular">
              <button
                className={`bounce ${headerVisible ? styles.visible : ""}`}
              >
                <div>{props.button}</div>
              </button>
            </a>
          </header>
        </div>
        <div className={styles.cell}>
          {props.highlightImage ? (
            <div className={styles.highlightImageWrapper}>
              <Image
                src={props.highlightImage}
                alt={props.highlightImageAlt}
                width={512}
                height={512}
              />
            </div>
          ) : (
            <div className={styles.highlightWrapper}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/backgroundFigure.png"
                  alt="App-Entwickler Virtual Reality"
                  width={435}
                  height={580}
                />
              </div>
              <div className={styles.interactiveWrapper}>
                <Software3D />
              </div>
            </div>
          )}
        </div>
        <div className={styles.bottomTriangleTransition}></div>
      </section>
    </>
  );
}
