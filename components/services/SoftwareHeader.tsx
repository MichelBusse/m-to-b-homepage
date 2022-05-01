import dynamic from "next/dynamic";

import styles from "../../styles/services/SoftwareHeader.module.scss";
import { Suspense, useRef } from "react";

const Software3D = dynamic(() => import("../three/Software3D"), {
  suspense: true,
});

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
          <Suspense fallback={"loading"}>
            <Software3D />
          </Suspense>
        </div>
      </header>
    </>
  );
}
