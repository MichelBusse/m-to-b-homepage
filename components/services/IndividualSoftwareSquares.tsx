import styles from "../../styles/services/IndividualSoftwareSquares.module.scss";
import Image from "next/image";

export default function IndividualSoftwareSquares() {
  return (
    <>
      <div className={styles.squares}>
        <div className={styles.square}>
          <div className={styles.caption}>
            <span>Industrie</span>
          </div>
          <Image
            src="/images/Softwareentwicklung/logistik.jpg"
            alt="Industrie"
            layout="fill"
          />
          <div className="curtain"></div>
        </div>
        <div className={styles.square}>
          <div className={styles.caption}>
            <span>Management</span>
          </div>
          <Image
            src="/images/Softwareentwicklung/firmenprozesse.jpg"
            alt="Firmenprozesse"
            layout="fill"
          />
          <div className="curtain"></div>
        </div>
        <div className={styles.square}>
          <div className={styles.caption}>
            <span>Startups</span>
          </div>
          <Image
            src="/images/Softwareentwicklung/einsatzplanung.jpg"
            alt="Einsatzplanung"
            layout="fill"
          />
          <div className="curtain"></div>
        </div>
        <div className={styles.square}>
          <div className={styles.caption}>
            <span>Medizin</span>
          </div>
          <Image
            src="/images/Softwareentwicklung/op.jpg"
            alt="OP"
            layout="fill"
          />
          <div className="curtain"></div>
        </div>
      </div>
    </>
  );
}
