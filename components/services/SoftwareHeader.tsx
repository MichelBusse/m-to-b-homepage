import styles from "../../styles/services/Header.module.scss";
import Software3D from "../three/Software3D";
import Link from "next/link";
import { useRef } from "react";

export default function SoftwareHeader(props) {
  const headerRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    headerRef.current &&
      window.scrollTo(0, headerRef.current.offsetHeight);
  };

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.headerTextWrapper}>
          <div className={styles.headerTextShadow}></div>
          <div className={styles.headerText}>
            <h1 className={styles.headline}>{props.headline}</h1>
            <p>{props.slogan}</p>
            <button onClick={scroll}>Mehr erfahren</button>
          </div>
        </div>
        <div className={styles.headerDiagonal}></div>
        <Software3D />
      </header>
    </>
  );
}
