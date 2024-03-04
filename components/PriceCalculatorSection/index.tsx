import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Link from "next/link";
import BudgetIcon from "../Icons/BudgetIcon";

const PriceCalculatorSection = () => {
  const router = useRouter();

  let texts = {
    headline: "App Preis Rechner",
    text: "Erhalte eine erste Einschätzung über das Budget deiner App",
    buttonText: "Jetzt Preis berechnen",
  };

  if (router.locale == "en") {
    texts = {
      headline: "App Budget Calculator",
      text: "Receive a first approximation of your app's budget",
      buttonText: "Calculate budget now",
    };
  }

  return (
    <section className={styles.priceCalculatorSection}>
      <div className={styles.logoWrapper}>
        <BudgetIcon className={styles.icon} />
      </div>
      <div className={styles.textWrapper}>
        <h2>{texts.headline}</h2>
        <p>{texts.text}</p>
        <Link href={"/App-Preis-Rechner"}>
            <button className="bounce">
              <div>{texts.buttonText}</div>
            </button>
        </Link>
      </div>
    </section>
  );
};

export default PriceCalculatorSection;
