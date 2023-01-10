import styles from "../styles/CookieDisclaimer.module.scss";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useCookies } from "react-cookie";import React from 'react';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-MSM3HLM',
}

export default function CookieDisclaimer() {
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
  }, [cookies.essentialAccepted])

  const onChange : ChangeEventHandler<HTMLInputElement> = (event) => {
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
      TagManager.initialize(tagManagerArgs)
    } else {
      setCookie("statisticsAccepted", false, { expires: expiryDate });
    }

    setVisible(false);
  }

  if(cookies.statisticsAccepted === "true"){
    TagManager.initialize(tagManagerArgs)
  }

  return visible ? (
    <div className={styles.cookieDisclaimer}>
      <div className={styles.cookieDisclaimerWrapper}>
        <div className={styles.cookieDisclaimerHeadline}>
          <h2>Cookie Einstellungen</h2>
        </div>
        <div className={styles.cookieDisclaimerText}>
          <p>
            Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
            essenziell, während andere uns helfen, diese Website und Ihre
            Erfahrung zu verbessern.
          </p>
        </div>
        <div className={styles.cookieDisclaimerForm}>
          <input
            type="checkbox"
            name="cookieEssential"
            checked={formState.cookieEssential}
            onChange={onChange}
            disabled
          />
          <p>Essenziell</p>
        </div>
        <div className={styles.cookieDisclaimerForm}>
          <input
            type="checkbox"
            name="cookieStatistics"
            checked={formState.cookieStatistics}
            onChange={onChange}
          />
          <p>Statistiken</p>
        </div>
        <div className={styles.cookieDisclaimerButton + " " + styles.accept}>
          <button
            onClick={() => {
              cookieDisclaimerClick(true)
            }}
          >
            Alle akzeptieren
          </button>
        </div>
        <div className={styles.cookieDisclaimerButton + " " + styles.save}>
          <button
            onClick={() => {
              cookieDisclaimerClick(false)
            }}
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
