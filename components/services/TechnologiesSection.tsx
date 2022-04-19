import Image from "next/image";
import styles from "../../styles/services/TechnologiesSection.module.scss";
export default function TechnologiesSection(props) {
  return (
    <>
      <section className={styles.technologiesSection}>
        <div className={styles.blueCurtain}></div>
        <div className={styles.text}>
          <h2>Technologien</h2>
        </div>
        <div className={styles.logoWrapper}>
          <div className={styles.row}>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>NodeJS</span>
              </div>
              <Image
                src="/images/technologies/nodejs.png"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>ReactJS</span>
              </div>
              <Image
                src="/images/technologies/reactjs.png"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>NextJS</span>
              </div>
              <Image
                src="/images/technologies/nextjs.png"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>NestJS</span>
              </div>
              <Image
                src="/images/technologies/nest.svg"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>ThreeJS</span>
              </div>
              <Image
                src="/images/technologies/threejs.png"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>PostgreSQL</span>
              </div>
              <Image
                src="/images/technologies/postgresql.png"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>MongoDB</span>
              </div>
              <Image
                src="/images/technologies/mongodb.svg"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>Docker</span>
              </div>
              <Image
                src="/images/technologies/docker.webp"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>AWS</span>
              </div>
              <Image
                src="/images/technologies/aws.png"
                width={100}
                height={100}
              />
            </div>
            <div className={styles.logo}>
              <div className={styles.logoCaption}>
                <span>Flutter</span>
              </div>
              <Image
                src="/images/technologies/flutter.svg"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className={styles.text}>
            <p>
              ...oder individuell nach Ihren Anforderungen
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
