import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Software3D from "../Three/Software3D";

type Props = {
  headline: JSX.Element;
  topHeadline?: JSX.Element;
  text: JSX.Element;
  priceCalculatorButton?: boolean;
  highlightImage?: string;
  highlightImageAlt?: string;
  requestButtonText?: string;
  buttonLink?: string;
};

export default function Header(props: Props) {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [squareCount, setSquareCount] = useState(0);
  const router = useRouter();

  let texts = {
    priceCalculatorButtonText: "App-Preis-Rechner",
  };

  if (router.locale == "en") {
    texts = {
      priceCalculatorButtonText: "Calculate app's budget",
    };
  }

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
      <section className={styles.home}>
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
                  transitionDelay: (100 * index + 1000) + "ms",
                }}
              ></div>
            );
          })}
        </div>
        <div className={`${styles.cell} ${styles.headerCell}`}>
          <header id={styles.header}>
            {props.topHeadline && <div className={styles.topHeadline}>{props.topHeadline}</div>}
            <h1 className={headerVisible ? styles.visible : ""}>
              {props.headline}&nbsp;
              <span className={styles.typewriterCursor}>|</span>
            </h1>
            {props.text}
            <div className={styles.buttonWrapper}>
              {props.requestButtonText &&
              <Link href={props.buttonLink ?? "#contact"}>
                  <button
                    className={`bounce ${headerVisible ? styles.visible : ""}`}
                  >
                    <div>{props.requestButtonText}</div>
                  </button>
              </Link>}
              {props.priceCalculatorButton && (
                <Link href="/App-Preis-Rechner">
                    <button
                      className={`bounce ${
                        headerVisible ? styles.visible : ""
                      } ${styles.priceCalculatorButton}`}
                    >
                      <div>{texts.priceCalculatorButtonText}</div>
                    </button>
                </Link>
              )}
            </div>
          </header>
        </div>
        <div className={styles.cell}>
          {props.highlightImage ? (
            <div className={styles.highlightImageWrapper}>
              <Image
                src={props.highlightImage}
                alt={props.highlightImageAlt ?? ""}
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
                  width={512}
                  height={512}
                  style={{width: "100%", height: "100%", objectFit: "contain"}}
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
