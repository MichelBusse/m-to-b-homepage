import styles from "../../styles/services/Header.module.scss";

export default function Header(props) {
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
