import styles from "../../styles/services/WebdesignHeader.module.scss";

export default function WebdesignHeader(props) {
  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: "url('" + props.backgroundImage + "')" }}
      >
        <div className={styles.backgroundColor}></div>
        <div className={styles.headerTextWrapper}>
          <div className={styles.headerText}>
            <h1 className={styles.headline}>{props.headline}</h1>
            <p>{props.slogan}</p>
          </div>
        </div>
        <div className={styles.headerDiagonal}></div>
      </header>
    </>
  );
}
