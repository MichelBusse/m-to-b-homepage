import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/SmallTechnologiesSection.module.scss";

export const logos = {
  node: (
    <div className={styles.logo} key={1}>
      <div className={styles.logoCaption}>
        <span>NodeJS</span>
      </div>
      <Image
        src="/images/technologies/nodejs.png"
        width={100}
        height={100}
        alt="NodeJS Logo"
      />
    </div>
  ),
  firebase: (
    <div className={styles.logo} key={1}>
      <div className={styles.logoCaption}>
        <span>Firebase</span>
      </div>
      <Image
        src="/images/technologies/firebase.png"
        width={100}
        height={100}
        alt="Firebase Logo"
      />
    </div>
  ),
  dart: (
    <div className={styles.logo} key={1}>
      <div className={styles.logoCaption}>
        <span>Dart</span>
      </div>
      <Image
        src="/images/technologies/dart.png"
        width={100}
        height={100}
        alt="Dart Logo"
      />
    </div>
  ),
  react: (
    <div className={styles.logo} key={2}>
      <div className={styles.logoCaption}>
        <span>ReactJS</span>
      </div>
      <Image
        src="/images/technologies/reactjs.png"
        width={100}
        height={100}
        alt="ReactJS Logo"
      />
    </div>
  ),
  next: (
    <div className={styles.logo} key={3}>
      <div className={styles.logoCaption}>
        <span>NextJS</span>
      </div>
      <Image
        src="/images/technologies/nextjs.png"
        width={100}
        height={100}
        alt="NextJS Logo"
      />
    </div>
  ),
  nest: (
    <div className={styles.logo} key={4}>
      <div className={styles.logoCaption}>
        <span>NestJS</span>
      </div>
      <Image
        src="/images/technologies/nest.svg"
        width={100}
        height={100}
        alt="NestJS Logo"
      />
    </div>
  ),
  three: (
    <div className={styles.logo} key={5}>
      <div className={styles.logoCaption}>
        <span>ThreeJS</span>
      </div>
      <Image
        src="/images/technologies/threejs.png"
        width={100}
        height={100}
        alt="ThreeJS Logo"
      />
    </div>
  ),
  postgre: (
    <div className={styles.logo} key={6}>
      <div className={styles.logoCaption}>
        <span>PostgreSQL</span>
      </div>
      <Image
        src="/images/technologies/postgresql.png"
        width={100}
        height={100}
        alt="PostgreSQL Logo"
      />
    </div>
  ),
  supabase: (
    <div className={styles.logo} key={7}>
      <div className={styles.logoCaption}>
        <span>Supabase</span>
      </div>
      <Image
        src="/images/technologies/supabase.png"
        width={100}
        height={100}
        alt="Supabase Logo"
      />
    </div>
  ),
  unity: (
    <div className={styles.logo} key={8}>
      <div className={styles.logoCaption}>
        <span>Unity</span>
      </div>
      <Image
        src="/images/technologies/unity.png"
        width={100}
        height={100}
        alt="Unity Logo"
      />
    </div>
  ),
  vite: (
    <div className={styles.logo} key={9}>
      <div className={styles.logoCaption}>
        <span>Vite</span>
      </div>
      <Image
        src="/images/technologies/vite.png"
        width={100}
        height={100}
        alt="Vite Logo"
      />
    </div>
  ),
  flutter: (
    <div className={styles.logo} key={10}>
      <div className={styles.logoCaption}>
        <span>Flutter</span>
      </div>
      <Image
        src="/images/technologies/flutter.svg"
        width={100}
        height={100}
        alt="Flutter Logo"
      />
    </div>
  ),
};

type Props = {
  logos: JSX.Element[];
};

export default function SmallTechnologiesSection(props: Props) {
  const router = useRouter();

  let texts = {
    headline: "Technologien",
  };

  if (router.locale == "en") {
    texts = {
      headline: "Technologies",
    };
  }

  return (
    <>
      <section className={styles.technologiesSection}>
        <div className={styles.text}>
          <h2>{texts.headline}</h2>
        </div>
        <div className={styles.logoWrapper}>
          {props.logos}
        </div>
      </section>
    </>
  );
}
