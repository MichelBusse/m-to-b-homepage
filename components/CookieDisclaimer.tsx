import styles from "../styles/CookieDisclaimer.module.scss";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import React from "react";
import TagManager from "react-gtm-module";
import { useRouter } from "next/router";

const tagManagerArgs = {
  gtmId: "GTM-MSM3HLM",
};

export default function CookieDisclaimer() {
  const router = useRouter();

  const [cookies, setCookie] = useCookies([
    "essentialAccepted",
    "statisticsAccepted",
  ]);

  const [formState, setFormState] = useState({
    cookieEssential: true,
    cookieStatistics: false,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(cookies.essentialAccepted !== "true");
  }, [cookies.essentialAccepted]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const targetName = event.target.name;
    const targetChecked = event.target.checked;

    setFormState((state) => {
      return { ...state, [targetName]: targetChecked };
    });
  };

  const cookieDisclaimerClick = (all: boolean) => {
    if (all) {
      setFormState({ cookieEssential: true, cookieStatistics: true });
    }

    var expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);

    setCookie("essentialAccepted", true, { expires: expiryDate });
    if (formState.cookieStatistics || all) {
      setCookie("statisticsAccepted", true, { expires: expiryDate });
      TagManager.initialize(tagManagerArgs);
    } else {
      setCookie("statisticsAccepted", false, { expires: expiryDate });
    }

    setVisible(false);
  };

  if (cookies.statisticsAccepted === "true") {
    TagManager.initialize(tagManagerArgs);
  }

  let texts = {
    headline: "Cookie Einstellungen",
    text: "Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während uns andere helfen, diese Website und Ihre Erfahrung zu verbessern.",
    essential: "Essenziell",
    statistics: "Statistiken",
    acceptAll: "Alle akzeptieren",
    save: "Speichern",
  };

  if (router.locale == "en") {
    texts = {
      headline: "Cookie Settings",
      text: "We use cookies on our website. Some of them are essential, while others help us to improve this website and your experience.",
      essential: "Essential",
      statistics: "Statistics",
      acceptAll: "Accept All",
      save: "Save",
    };
  }

  return visible ? (
    <div className={styles.cookieDisclaimer}>
      <div className={styles.cookieDisclaimerWrapper}>
        <div className={styles.cookieDisclaimerHeadline}>
          <h2>{texts.headline}</h2>
        </div>
        <div className={styles.cookieDisclaimerText}>
          <p>{texts.text}</p>
        </div>
        <div className={styles.cookieDisclaimerForm}>
          <input
            type="checkbox"
            name="cookieEssential"
            checked={formState.cookieEssential}
            onChange={onChange}
            disabled
          />
          <p>{texts.essential}</p>
        </div>
        <div className={styles.cookieDisclaimerForm}>
          <input
            type="checkbox"
            name="cookieStatistics"
            checked={formState.cookieStatistics}
            onChange={onChange}
          />
          <p>{texts.statistics}</p>
        </div>
        <div className={styles.cookieDisclaimerButton}>
          <button
            onClick={() => {
              cookieDisclaimerClick(true);
            }}
          >
            {texts.acceptAll}
          </button>
        </div>
        <div className={styles.cookieDisclaimerButton + " " + styles.save}>
          <button
            onClick={() => {
              cookieDisclaimerClick(false);
            }}
          >
            {texts.save}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
