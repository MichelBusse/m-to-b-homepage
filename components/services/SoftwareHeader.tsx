import styles from "../../styles/services/SoftwareHeader.module.scss";
import Software3D from "../three/Software3D";
import { useRef } from "react";

export default function SoftwareHeader(props) {
  const headerRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    headerRef.current && window.scrollTo(0, headerRef.current.offsetHeight);
  };

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.headerTextWrapper}>
          <div className={styles.headerTextShadow}></div>
          <div className={styles.headerText}>
            <h1 className={styles.headline}>Software&shy;entwicklung</h1>
            <p>
              Sehen Sie Ihre Ideen entstehen, lösen Sie Probleme und verschaffen
              Sie sich einen Vorteil durch individuell entwickelte Software, ob
              App oder Systemlösungen!
            </p>
            <button onClick={scroll}>Mehr erfahren</button>
          </div>
        </div>
        <div className={styles.headerDiagonal}></div>
        <div className={styles.canvasContainer}>
          <Software3D />
        </div>
      </header>
    </>
  );
}
