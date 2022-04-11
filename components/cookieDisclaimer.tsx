import styles from "../styles/CookieDisclaimer.module.scss";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

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
  }, [])

  const onChange = (event) => {
    const targetName = event.target.name;
    const targetChecked = event.target.checked;

    setFormState((state) => {
      return { ...state, [targetName]: targetChecked };
    });
  };

  const startTagManager = (w, d, s, l, i) => {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  };
  
  const cookieDisclaimerClick = (all) => {
    if (all) {
      setFormState({ cookieEssential: true, cookieStatistics: true });
    }

    var expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);

    setCookie("essentialAccepted", true, { expires: expiryDate });
    if (formState.cookieStatistics) {
      setCookie("statisticsAccepted", true, { expires: expiryDate });
      startTagManager(window, document, "script", "dataLayer", "GTM-MSM3HLM");
    } else {
      setCookie("statisticsAccepted", false, { expires: expiryDate });
    }

    setVisible(false);
  }

  if(cookies.statisticsAccepted === "true"){
    startTagManager(window,document,'script','dataLayer','GTM-MSM3HLM')
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
