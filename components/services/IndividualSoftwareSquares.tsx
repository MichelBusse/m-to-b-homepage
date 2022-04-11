import styles from "../../styles/services/IndividualSoftwareSquares.module.scss";

export default function IndividualSoftwareSquares() {
  return (
    <>
      <div className={styles.squares}>
        <div className={styles.square}>
          <img src="/images/Softwareentwicklung/logistik.jpg" alt="Logistik" />
          <div className="curtain"></div>
        </div>
        <div className={styles.square}>
          <img
            src="/images/Softwareentwicklung/firmenprozesse.jpg"
            alt="Firmenprozesse"
          />
          <div className="curtain"></div>
        </div>
        <div className={styles.square}>
          <img
            src="/images/Softwareentwicklung/einsatzplanung.jpg"
            alt="Einsatzplanung"
          />
          <div className="curtain"></div>
        </div>
        <div className={styles.square}>
          <img src="/images/Softwareentwicklung/op.jpg" alt="OP" />
          <div className="curtain"></div>
        </div>
      </div>
    </>
  );
}
