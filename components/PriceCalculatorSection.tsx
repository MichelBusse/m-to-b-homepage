import { useRouter } from "next/router";
import styles from "../styles/PriceCalculatorSection.module.scss";
import { GrMoney } from "react-icons/gr";
import BudgetIcon from "./icons/BudgetIcon";
import AndroidIcon from "./icons/AndroidIcon";
import Link from "next/link";

const PriceCalculatorSection = () => {
  const router = useRouter();

  let texts = {
    headline: "App Preis Rechner",
    text: "Erhalte sofort eine erste Einschätzung für das Budget deiner App",
    buttonText: "Jetzt Preis berechnen",
  };

  if (router.locale == "en") {
    texts = {
      headline: "App Budget Calculator",
      text: "Receive a first approximation of your app's budget immediately",
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
          <a>
            <button className="bounce">
              <div>{texts.buttonText}</div>
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default PriceCalculatorSection;
