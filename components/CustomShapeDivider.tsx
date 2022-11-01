import { useEffect, useState } from "react";
import styles from "../styles/CustomShapeDivider.module.scss";

export default function CustomShapeDivider(props) {
  const className = props.flip
    ? styles.customShapeDivider + " "
    : styles.customShapeDivider + " " + styles.flip;

  const [mainRandom, setMainRandom] = useState(1200);
  const [secondRandom, setSecondRandom] = useState(600);

  useEffect(() => {
    setMainRandom(Math.random() * 800 + 200);
    setSecondRandom(Math.random() * 800 + 200);
  }, []);

  return (
    <div className={className}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d={`M1200 0L0 0 ${mainRandom} 120 1200 0z`}
          className={styles.shapeFillSecond}
        ></path>
        <path
          d={`M1200 0L0 0 ${secondRandom} 90 1200 0z`}
          className={styles.shapeFillMain}
        ></path>
      </svg>
    </div>
  );
}
