import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/AppPriceCalculator.module.scss";
import { BsGridFill } from "react-icons/bs";
import { RiUserStarFill } from "react-icons/ri";
import { FaPalette, FaCalendarDay } from "react-icons/fa";
import {
  MdSmartphone,
  MdLocationOn,
  MdPublic,
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";
import {
  BsXCircle,
  BsSlashCircle,
  BsCheckCircle,
  BsChatDotsFill,
} from "react-icons/bs";
import { toast } from "react-toastify";
import TagManager from "react-gtm-module";
import BudgetIcon from "../components/icons/BudgetIcon";
import { BiArrowBack } from "react-icons/bi";

type PriceResult = {
  minPrice: number;
  maxPrice: number;
};

export default function AppPriceCalculatorPage() {
  const router = useRouter();
  const formWrapperRef = useRef(null);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const [optionDivs, setOptionDivs] = useState<JSX.Element[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<PriceResult | null>(null);

  let texts = {
    title: "App Entwicklung Preis Rechner - M-to-B",
    description:
      "Wie viel kostet App Entwicklung? Berechne den Preis deiner App vorab und erhalte einen Überblick über alle Kosten.",
    headline: "App Entwicklung Preis Rechner",
    checkInputs: "Bitte überprüfe deine Eingaben",
    mailSuccess:
      "Erfolgreich gesendet! Deine Angaben werden nun von uns bearbeitet und du erhälst so schnell wie möglich eine Antwort.",
    mailError: "Senden fehlgeschlagen",
    introText:
      "Nach Beantwortung der folgenden Fragen erhälst du direkt eine Einschätzung für das Budget, mit dem du für deine App rechnen kannst.",
    namePlaceholder: "Name *",
    send: "Preis jetzt erhalten",
    resultsNewTry: "Neuer Versuch",
    resultsHeadline: "Hallo {0},",
    resultsText1:
      "Wir freuen uns, dir bei der Planung deiner App helfen zu können.",
    resultsText2:
      "Basierend auf deinen Angaben im Preisrechner, schätzen wir das Budget für die Entwicklung deiner App auf:",
    resultsText3:
      "Beachte, dass unser Preisrechner dir nur eine grobe Einschätzung geben kann. Für eine genauere Planung und alle offenen Fragen, kannst du ein kostenloses Beratungsgespräch mit einem Experten aus unserem Team vereinbaren:",
    resultsButton: "Kostenloses Beratungsgespräch",
  };

  if (router.locale == "en") {
    texts = {
      title: "App Development Budget Calculator - M-to-B",
      description:
        "How much does app development cost? Calculate your budget beforehand and get an overview over all costs.",
      headline: "App Development Budget Calculator",
      checkInputs: "Please check your inputs",
      mailSuccess:
        "Sent successfully! Your details will now be processed by us and you will receive an answer as soon as possible.",
      mailError: "Error: Could not send mail",
      introText:
        "After answering the following questions you'll receive an overview of your apps potential budget.",
      namePlaceholder: "Name *",
      send: "Receive costs now!",
      resultsNewTry: "New Try",
      resultsHeadline: "Hey {0},",
      resultsText1: "We look forward to helping you plan your app.",
      resultsText2:
        "Based on your information, we estimate the necessary budget for your app:",
      resultsText3:
        "This is just a rough estimate that we were able to make with very little information. For more detailed planning, you can use our non-binding discussion and get advice from an expert 1:1 on your app.",
      resultsButton: "Schedule a free consultation",
    };
  }

  let questions = useMemo(() => {
    if (router.locale == "en") {
      return [
        {
          question: <>App Budget Calculator</>,
          options: [],
          icons: [],
          selectMultiple: false,
        },
        {
          question: (
            <>
              Should your app be visible publicly or only to specific members?
            </>
          ),
          options: ["Specific members", "Publicly visible", "Not decided yet"],
          icons: [
            <RiUserStarFill key={0} />,
            <MdPublic key={1} />,
            <BsSlashCircle key={2} />,
          ],
          selectMultiple: false,
        },
        {
          question: <>What about the design?</>,
          options: ["Simple Design", "Individual Design", "Not decided yet"],
          icons: [
            <BsGridFill key={0} />,
            <FaPalette key={1} />,
            <MdSmartphone key={2} />,
          ],
          selectMultiple: false,
        },
        {
          question: <>Do you need an interface for existing software? </>,
          options: ["Yes", "No", "Not decided yet"],
          icons: [
            <BsCheckCircle key={0} />,
            <BsXCircle key={1} />,
            <BsSlashCircle key={2} />,
          ],
          selectMultiple: false,
        },
        {
          question: <>Do you need a login system?</>,
          options: ["Yes", "No", "Not decided yet"],
          icons: [
            <BsCheckCircle key={0} />,
            <BsXCircle key={1} />,
            <BsSlashCircle key={2} />,
          ],
          selectMultiple: false,
        },
        {
          question: <>Do your users need their own profile?</>,
          options: ["Yes", "No", "Not decided yet"],
          icons: [
            <BsCheckCircle key={0} />,
            <BsXCircle key={1} />,
            <BsSlashCircle key={2} />,
          ],
          selectMultiple: false,
        },
        {
          question: <>Does your app need push notifications?</>,
          options: ["Yes", "No", "Not decided yet"],
          icons: [
            <BsCheckCircle key={0} />,
            <BsXCircle key={1} />,
            <BsSlashCircle key={2} />,
          ],
          selectMultiple: false,
        },
        {
          question: <>Which functions should your app include?</>,
          options: [
            "Bookings / Dates",
            "Maps / Geodata",
            "Communication / Chat",
          ],
          icons: [
            <FaCalendarDay key={0} />,
            <MdLocationOn key={1} />,
            <BsChatDotsFill key={2} />,
          ],
          selectMultiple: true,
        },
        {
          question: <>Almost done...</>,
          options: [],
          icons: [],
          selectMultiple: false,
        },
      ];
    }

    return [
      {
        question: <>App Preis Rechner</>,
        options: [],
        icons: [],
        selectMultiple: false,
      },
      {
        question: <>Soll die App intern oder frei verfügbar sein?</>,
        options: [
          "Nur ausgewählte Nutzer",
          "Öffentlich für alle Nutzer",
          "Noch nicht fest",
        ],
        icons: [
          <RiUserStarFill key={0} />,
          <MdPublic key={1} />,
          <BsSlashCircle key={2} />,
        ],
        selectMultiple: false,
      },
      {
        question: <>Wie soll das Design aussehen?</>,
        options: [
          "Einfaches Design",
          "Individuelles Design",
          "Bereits vorhanden",
        ],
        icons: [
          <BsGridFill key={0} />,
          <FaPalette key={1} />,
          <MdSmartphone key={2} />,
        ],
        selectMultiple: false,
      },
      {
        question: (
          <>Benötigt die App eine Schnittstelle zu bestehender Software? </>
        ),
        options: ["Ja", "Nein", "Noch nicht fest"],
        icons: [
          <BsCheckCircle key={0} />,
          <BsXCircle key={1} />,
          <BsSlashCircle key={2} />,
        ],
        selectMultiple: false,
      },
      {
        question: <>Benötigt die App ein Login-System?</>,
        options: ["Ja", "Nein", "Noch nicht fest"],
        icons: [
          <BsCheckCircle key={0} />,
          <BsXCircle key={1} />,
          <BsSlashCircle key={2} />,
        ],
        selectMultiple: false,
      },
      {
        question: <>Benötigen die Benutzer der App ein eigenes Profil?</>,
        options: ["Ja", "Nein", "Noch nicht fest"],
        icons: [
          <BsCheckCircle key={0} />,
          <BsXCircle key={1} />,
          <BsSlashCircle key={2} />,
        ],
        selectMultiple: false,
      },
      {
        question: <>Benötigt die App Push-Notifications?</>,
        options: ["Ja", "Nein", "Noch nicht fest"],
        icons: [
          <BsCheckCircle key={0} />,
          <BsXCircle key={1} />,
          <BsSlashCircle key={2} />,
        ],
        selectMultiple: false,
      },
      {
        question: <>Welche Funktionen soll die App besitzen?</>,
        options: [
          "Buchungen / Termine",
          "Karten / Geodaten",
          "Kommunikation / Chat",
        ],
        icons: [
          <FaCalendarDay key={0} />,
          <MdLocationOn key={1} />,
          <BsChatDotsFill key={2} />,
        ],
        selectMultiple: true,
      },
      {
        question: <>Fast geschafft...</>,
        options: [],
        icons: [],
        selectMultiple: false,
      },
    ];
  }, [router.locale]);

  const [currentFormState, setCurrentFormState] = useState<number[][]>(
    questions.map((e) => [])
  );

  const nextQuestion = () => {
    setTransitionClass(styles.fadeOut);
    if (currentFormIndex == questions.length - 2) {
      fetch("/api/appPriceCalculatorTracking", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentFormState,
        }),
      });
    }
    setTimeout(() => {
      setCurrentFormIndex((prev) => {
        if (prev < questions.length - 1) {
          return prev + 1;
        } else {
          return prev;
        }
      });
      setTransitionClass("");
      window.scrollTo({ top: 0 });
    }, 200);
  };

  const previousQuestion = () => {
    setTransitionClass(styles.fadeOut);
    setTimeout(() => {
      setCurrentFormIndex((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return prev;
        }
      });
      setTransitionClass("");
      window.scrollTo({ top: 0 });
    }, 200);
  };

  const selectOption = (
    selectMultiple: boolean,
    questionIndex: number,
    optionIndex: number
  ) => {
    setCurrentFormState((prev) => {
      const newFormState = [...prev];
      if (!selectMultiple) {
        newFormState[questionIndex] = [optionIndex];
        return newFormState;
      }

      if (newFormState[questionIndex].includes(optionIndex)) {
        let subFormState = newFormState[questionIndex].filter(
          (e) => e != optionIndex
        );
        newFormState[questionIndex] = subFormState;
      } else {
        let subFormState = [...newFormState[questionIndex]];
        subFormState.push(optionIndex);
        newFormState[questionIndex] = subFormState;
      }
      return newFormState;
    });
  };

  useEffect(() => {
    setOptionDivs(
      questions[currentFormIndex].options.map((o, oIndex) => (
        <div
          className={`${styles.option} ${
            currentFormState[currentFormIndex].includes(oIndex)
              ? styles.selected
              : ""
          }`}
          onClick={() => {
            selectOption(
              questions[currentFormIndex].selectMultiple,
              currentFormIndex,
              oIndex
            );
          }}
          key={currentFormIndex + " " + oIndex}
        >
          <div className={styles.optionIconWrapper}>
            {questions[currentFormIndex].icons[oIndex]}
          </div>
          <span>{o}</span>
        </div>
      ))
    );
  }, [currentFormState, currentFormIndex, questions]);

  const calculatePrice = () => {
    let minPrice = 0;
    let maxPrice = 0;

    // Private App
    if (currentFormState[1].includes(0)) {
      minPrice += 7670;
      maxPrice += 7670;
    }

    // Public App
    if (currentFormState[1].includes(1)) {
      minPrice += 10620;
      maxPrice += 10620;
    }

    // Public or Private App
    if (currentFormState[1].includes(2)) {
      minPrice += 7670;
      maxPrice += 10620;
    }

    // Simple design
    if (currentFormState[2].includes(0)) {
      minPrice += 944;
      maxPrice += 944;
    }

    // Individual design
    if (currentFormState[2].includes(1)) {
      minPrice += 4720;
      maxPrice += 4720;
    }

    // Existing design
    if (currentFormState[2].includes(2)) {
      minPrice += 1180;
      maxPrice += 1180;
    }

    // Interface for existing services
    if (currentFormState[3].includes(0)) {
      minPrice += 3776;
      maxPrice += 3776;
    }

    // Interface for existing services not sure
    if (currentFormState[3].includes(2)) {
      minPrice += 0;
      maxPrice += 3776;
    }

    // Login system 10h - 20h
    if (currentFormState[4].includes(0)) {
      minPrice += 2832;
      maxPrice += 2832;
    }

    // Login system not sure
    if (currentFormState[4].includes(2)) {
      minPrice += 0;
      maxPrice += 2832;
    }

    // Own profile
    if (currentFormState[5].includes(0)) {
      minPrice += 2832;
      maxPrice += 2832;
    }

    // Own profile not sure
    if (currentFormState[5].includes(2)) {
      minPrice += 0;
      maxPrice += 2832;
    }

    // Push notifications
    if (currentFormState[6].includes(0)) {
      minPrice += 2832;
      maxPrice += 2832;
    }

    // Push notifications not sure
    if (currentFormState[6].includes(2)) {
      minPrice += 0;
      maxPrice += 2832;
    }

    // Dates
    if (currentFormState[8].includes(0)) {
      minPrice += 3776;
      maxPrice += 3776;
    }

    // Location
    if (currentFormState[8].includes(1)) {
      minPrice += 3776;
      maxPrice += 3776;
    }

    // Chat
    if (currentFormState[8].includes(2)) {
      minPrice += 4720;
      maxPrice += 4720;
    }

    maxPrice = Math.round(maxPrice * 1.1);

    return {
      minPrice,
      maxPrice,
    };
  };

  const submit = () => {
    if (
      name.trim() == "" ||
      currentFormState[1].length == 0 ||
      currentFormState[2].length == 0 ||
      currentFormState[3].length == 0 ||
      currentFormState[4].length == 0 ||
      currentFormState[5].length == 0 ||
      currentFormState[6].length == 0
    ) {
      toast.error(texts.checkInputs);
      return;
    }

    for (let i = 1; i < questions.length - 1; i++) {
      if (!questions[i].selectMultiple && currentFormState[i].length == 0) {
        toast.error(texts.checkInputs);
        return;
      }
    }

    const { minPrice, maxPrice } = calculatePrice();

    fetch("/api/appPriceCalculator", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        currentFormState,
        minPrice,
        maxPrice,
        language: router.locale,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          const dataLayerArgs = {
            dataLayer: {
              event: "app-price-sent",
            },
          };
          TagManager.dataLayer(dataLayerArgs);
        }
      })
      .finally(() => {
        setPrice({ minPrice, maxPrice });
      });
  };

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://m-to-b.com/App-Preis-Rechner"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Preis-Rechner"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <main className={styles.appPriceCalculator}>
        {price == null ? (
          <>
            <div
              className={`${styles.formWrapper} ${transitionClass}`}
              ref={formWrapperRef}
            >
              {currentFormIndex == 0 && (
                <div className={styles.iconWrapper}>
                  <BudgetIcon className={styles.icon} />
                </div>
              )}
              <h2>{questions[currentFormIndex].question}</h2>
              {currentFormIndex == 0 && <p>{texts.introText}</p>}
              {currentFormIndex == questions.length - 1 && (
                <div className={styles.inputWrapper}>
                  <input
                    name="name"
                    type="textfield"
                    required
                    value={name}
                    placeholder={texts.namePlaceholder}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button onClick={() => submit()}>{texts.send}</button>
                </div>
              )}
              {currentFormIndex > 0 && currentFormIndex < questions.length && (
                <div className={styles.optionsWrapper}>{optionDivs}</div>
              )}
              <div className={styles.stepCounter}>
                <span>
                  {currentFormIndex} / {questions.length - 1}
                </span>
              </div>
            </div>
            <div className={styles.controlButtonWrapper}>
              {currentFormIndex > 0 && currentFormIndex < questions.length ? (
                <div
                  className={styles.leftButtonWrapper}
                  onClick={() => previousQuestion()}
                >
                  <MdArrowBackIosNew />
                </div>
              ) : (
                <div></div>
              )}
              {currentFormIndex < questions.length - 1 && (
                <div
                  className={styles.rightButtonWrapper}
                  onClick={() => nextQuestion()}
                >
                  <MdArrowForwardIos />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.resultWrapper}>
              <div
                className={styles.retryButton}
                onClick={() => router.reload()}
              >
                <BiArrowBack />
                {texts.resultsNewTry}
              </div>
              <h2>{texts.resultsHeadline.replace("{0}", name)}</h2>
              <p>{texts.resultsText1}</p>
              <p>{texts.resultsText2}</p>
              <p>
                <strong>{`${price.minPrice.toLocaleString(
                  router.locale
                )} € - ${price.maxPrice.toLocaleString(
                  router.locale
                )} €`}</strong>
              </p>
              <p>{texts.resultsText3}</p>
              <button
                className="bounce"
                onClick={() =>
                  router.push({
                    pathname: "/Kontakt",
                    query: { name: name },
                  })
                }
              >
                <div>{texts.resultsButton}</div>
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
