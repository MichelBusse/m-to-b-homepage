import styles from "../styles/QuoteSection.module.scss";

type Props = {
  quote: string;
  source: string;
};

const QuoteSection = (props: Props) => {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.text}>
        <blockquote>
          <p className={styles.quote}>&quot;{props.quote}&quot;</p>
        </blockquote>
        <p className={styles.source}>- {props.source}</p>
      </div>
    </section>
  );
};

export default QuoteSection;
