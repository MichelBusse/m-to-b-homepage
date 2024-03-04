import styles from "./styles.module.scss";

type Props = {
  label1: string;
  label2: string;
  label3: string;
  icon1: JSX.Element;
  icon2: JSX.Element;
  icon3: JSX.Element;
};

const IconTextSection = (props: Props) => {
  return (
    <section className={styles.iconTextSection}>
      <div className={styles.flexWrapper}>
        <div className={styles.cell}>
          <div className={styles.icon}>{props.icon1}</div>
          <p>{props.label1}</p>
        </div>
        <div className={styles.cell}>
          <div className={styles.icon}>{props.icon2}</div>
          <p>{props.label2}</p>
        </div>
        <div className={styles.cell}>
          <div className={styles.icon}>{props.icon3}</div>
          <p>{props.label3}</p>
        </div>
      </div>
    </section>
  );
};

export default IconTextSection;
