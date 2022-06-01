import dynamic from "next/dynamic";

import styles from "../../styles/services/SoftwareHeader.module.scss";
import { Suspense, useRef } from "react";
import { useRouter } from "next/router";

const Software3D = dynamic(() => import("../three/Software3D"), {
  suspense: true,
});

export default function SoftwareHeader(props) {
  const router = useRouter();

  let texts = {
    headline: <>Software&shy;entwicklung</>,
    subHeadline: (
      <>
        Sehen Sie Ihre Ideen entstehen, lösen Sie Probleme und schaffen Sie sich
        einen Vorteil durch individuell entwickelte Software, ob Apps oder
        Systemlösungen!
      </>
    ),
    discover: <>Mehr erfahren</>,
  };

  if (router.locale == "en") {
    texts = {
      headline: <>Software Development</>,
      subHeadline: (
        <>
          Discover solutions and realize your visions - individual software
          development provides unlimited potential to gain an advantage!
        </>
      ),
      discover: <>Discover more</>,
    };
  }
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
            <h1 className={styles.headline}>{texts.headline}</h1>
            <p>
              {texts.subHeadline}
            </p>
            <button onClick={scroll}>{texts.discover}</button>
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
