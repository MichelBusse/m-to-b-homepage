import styles from "../../styles/services/Header.module.scss";
import Software3D from "../three/Software3D";
import Link from "next/link";

export default function SoftwareHeader(props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTextWrapper}>
          <div className={styles.headerTextShadow}></div>
          <div className={styles.headerText}>
            <h1 className={styles.headline}>{props.headline}</h1>
            <p>{props.slogan}</p>
            <Link href="/Softwareentwicklung/#software">
              <a>
                <button>Mehr erfahren</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.headerDiagonal}></div>
        <Software3D />
      </header>
    </>
  );
}
