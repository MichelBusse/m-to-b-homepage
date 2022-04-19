import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/services/TechnologiesSection.module.scss";

const logos = [
  <div className={styles.logo} key={1}>
    <div className={styles.logoCaption}>
      <span>NodeJS</span>
    </div>
    <Image src="/images/technologies/nodejs.png" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={2}>
    <div className={styles.logoCaption}>
      <span>ReactJS</span>
    </div>
    <Image src="/images/technologies/reactjs.png" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={3}>
    <div className={styles.logoCaption}>
      <span>NextJS</span>
    </div>
    <Image src="/images/technologies/nextjs.png" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={4}>
    <div className={styles.logoCaption}>
      <span>NestJS</span>
    </div>
    <Image src="/images/technologies/nest.svg" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={5}>
    <div className={styles.logoCaption}>
      <span>ThreeJS</span>
    </div>
    <Image src="/images/technologies/threejs.png" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={6}>
    <div className={styles.logoCaption}>
      <span>PostgreSQL</span>
    </div>
    <Image src="/images/technologies/postgresql.png" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={7}>
    <div className={styles.logoCaption}>
      <span>MongoDB</span>
    </div>
    <Image src="/images/technologies/mongodb.svg" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={8}>
    <div className={styles.logoCaption}>
      <span>Docker</span>
    </div>
    <Image src="/images/technologies/docker.webp" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={9}>
    <div className={styles.logoCaption}>
      <span>AWS</span>
    </div>
    <Image src="/images/technologies/aws.png" width={100} height={100} />
  </div>,
  <div className={styles.logo} key={10}>
    <div className={styles.logoCaption}>
      <span>Flutter</span>
    </div>
    <Image src="/images/technologies/flutter.svg" width={100} height={100} />
  </div>,
];

export default function TechnologiesSection(props) {
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 920 && !mobileMode) {
        setMobileMode(true);
      } else if (window.innerWidth >= 920 && mobileMode) {
        setMobileMode(false);
      }
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <>
      <section className={styles.technologiesSection}>
        <div className={styles.blueCurtain}></div>
        <div className={styles.text}>
          <h2>Technologien</h2>
        </div>
        <div className={styles.logoWrapper}>
          {mobileMode ? (
            <>
              <div className={styles.row}>{logos.slice(0, 1)}</div>
              <div className={styles.row}>{logos.slice(1, 3)}</div>
              <div className={styles.row}>{logos.slice(3, 4)}</div>
              <div className={styles.row}>{logos.slice(4, 6)}</div>
              <div className={styles.row}>{logos.slice(6, 7)}</div>
              <div className={styles.row}>{logos.slice(7, 9)}</div>
              <div className={styles.row}>{logos.slice(9, 10)}</div>
            </>
          ) : (
            <>
              <div className={styles.row}>{logos.slice(0, 3)}</div>
              <div className={styles.row}>{logos.slice(3, 7)}</div>
              <div className={styles.row}>{logos.slice(7, 10)}</div>
            </>
          )}
          <div className={styles.text}>
            <p>...oder individuell nach Ihren Anforderungen</p>
          </div>
        </div>
      </section>
    </>
  );
}
