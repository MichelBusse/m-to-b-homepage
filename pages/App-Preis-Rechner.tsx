import Head from "next/head";
import { AnchorRefs } from "./_app";
import { useRouter } from "next/router";
import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import styles from "../styles/AppPriceCalculator.module.scss";
import { BsFillQuestionSquareFill, BsGridFill } from "react-icons/bs";
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

type Props = {
  anchorRefs: AnchorRefs;
};

export default function HomePage(props: Props) {
  const router = useRouter();
  const formWrapperRef = useRef(null);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const [optionDivs, setOptionDivs] = useState<JSX.Element[]>([]);
  const [email, setEmail] = useState("");

  let texts = {
    title: "App Entwicklung Preis Rechner - M-to-B",
    description:
      "Wie viel kostet App Entwicklung? Berechne den Preis deiner App vorab und erhalte einen Kostenüberblick",
    headline: "App Entwicklung Preis Rechner",
    checkInputs: "Bitte überprüfe deine Eingaben",
    mailSuccess: "Erfolgreich gesendet!",
    mailError: "Senden fehlgeschlagen",
  };

  let questions = [
    {
      question: <>Soll die App intern oder frei verfügbar sein?</>,
      options: [
        "Nur für bestimmte Nutzer",
        "Öffentlich für alle Nutzer",
        "Steht noch nicht fest",
      ],
      icons: [<RiUserStarFill />, <MdPublic />, <BsSlashCircle />],
      selectMultiple: false,
    },
    {
      question: <>Wie soll das Design aussehen?</>,
      options: [
        "Einfaches Design",
        "Individuelles Design",
        "Design ist bereits vorhanden",
      ],
      icons: [<BsGridFill />, <FaPalette />, <MdSmartphone />],
      selectMultiple: false,
    },
    {
      question: <>Benötigt die App ein Login-System?</>,
      options: ["Ja", "Nein", "Steht noch nicht fest"],
      icons: [<BsCheckCircle />, <BsXCircle />, <BsSlashCircle />],
      selectMultiple: false,
    },
    {
      question: <>Sollen bestehende Services angebunden werden? </>,
      options: ["Ja", "Nein", "Steht noch nicht fest"],
      icons: [<BsCheckCircle />, <BsXCircle />, <BsSlashCircle />],
      selectMultiple: false,
    },
    {
      question: <>Haben die Benutzer der App ein eigenes Profil?</>,
      options: ["Ja", "Nein", "Steht noch nicht fest"],
      icons: [<BsCheckCircle />, <BsXCircle />, <BsSlashCircle />],
      selectMultiple: false,
    },
    {
      question: <>Benötigt die Anwendung ein Backoffice-Bedienfeld?</>,
      options: ["Ja", "Nein", "Steht noch nicht fest"],
      icons: [<BsCheckCircle />, <BsXCircle />, <BsSlashCircle />],
      selectMultiple: false,
    },
    {
      question: <>Welche Funktionen soll die App besitzen?</>,
      options: [
        "Buchungen / Termine",
        "Karten / Geodaten",
        "Kommunikation / Chat",
      ],
      icons: [<FaCalendarDay />, <MdLocationOn />, <BsChatDotsFill />],
      selectMultiple: true,
    },
    {
      question: <>Ergebnisse an diese E-Mail senden:</>,
      options: [],
      icons: [],
      selectMultiple: false,
    },
  ];

  if (router.locale == "en") {
    texts = {
      title: "App Development Costs Calculator - M-to-B",
      description:
        "How much does app development cost? Calculate your budget beforehand and get an overview",
      headline: "App Development Costs Calculator",
      checkInputs: "Please check your inputs",
      mailSuccess: "Sent successfully",
      mailError: "Error: Could not send mail",
    };
  }

  const [currentFormState, setCurrentFormState] = useState<number[][]>(
    questions.map((e) => [])
  );

  const nextQuestion = () => {
    setTransitionClass(styles.fadeOut);
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
  }, [currentFormState, currentFormIndex]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const calculatePrice = () => {
    let minPrice = 12000;
    let maxPrice = 15000;

    // Public App
    if (currentFormState[0].includes(1)) {
      minPrice += 4000;
      maxPrice += 6500;
    }

    // Public or Private App
    if (currentFormState[0].includes(2)) {
      minPrice += 0;
      maxPrice += 6500;
    }

    // Simple design
    if (currentFormState[1].includes(0)) {
      minPrice += 1000;
      maxPrice += 2500;
    }

    // Individual design
    if (currentFormState[1].includes(1)) {
      minPrice += 2500;
      maxPrice += 6000;
    }

    // Existing design
    if (currentFormState[1].includes(2)) {
      minPrice += 0;
      maxPrice += 1500;
    }

    // Login system 10h - 20h
    if (currentFormState[2].includes(0)) {
      minPrice += 1250;
      maxPrice += 2500;
    }

    // Login system not sure
    if (currentFormState[2].includes(2)) {
      minPrice += 0;
      maxPrice += 2500;
    }

    // Existing services
    if (currentFormState[3].includes(0)) {
      minPrice += 1500;
      maxPrice += 5850;
    }

    // Existing services not sure
    if (currentFormState[3].includes(2)) {
      minPrice += 0;
      maxPrice += 5850;
    }

    // Own profile
    if (currentFormState[4].includes(0)) {
      minPrice += 2000;
      maxPrice += 5400;
    }

    // Own profile not sure
    if (currentFormState[4].includes(2)) {
      minPrice += 0;
      maxPrice += 5400;
    }

    // Backoffice
    if (currentFormState[5].includes(0)) {
      minPrice += 2000;
      maxPrice += 3800;
    }

    // Backoffice not sure
    if (currentFormState[5].includes(2)) {
      minPrice += 0;
      maxPrice += 3800;
    }

    // Dates
    if (currentFormState[5].includes(2)) {
      minPrice += 800;
      maxPrice += 1500;
    }

    // Location
    if (currentFormState[5].includes(2)) {
      minPrice += 1000;
      maxPrice += 2400;
    }

    // Chat
    if (currentFormState[5].includes(2)) {
      minPrice += 1500;
      maxPrice += 3800;
    }

    return {
      minPrice,
      maxPrice,
    };
  };

  const submit = () => {
    if (email.trim() == "") {
      toast.error(texts.checkInputs);
      return;
    }

    const { minPrice, maxPrice } = calculatePrice();

    fetch("/api/contactSection", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, minPrice, maxPrice }),
    }).then((res) => {
      if (res.status === 200) {
        toast.success(texts.mailSuccess);
        setEmail("");
        const dataLayerArgs = {
          dataLayer: {
            event: "app-price-sent",
          },
        };
        TagManager.dataLayer(dataLayerArgs);
        router.push("/App-Entwicklung");
      } else {
        toast.error(texts.mailError);
      }
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
        <div
          className={`${styles.formWrapper} ${transitionClass}`}
          ref={formWrapperRef}
        >
          <h2>{questions[currentFormIndex].question}</h2>
          {currentFormIndex == questions.length - 1 ? (
            <div className={styles.inputWrapper}>
              <button onClick={() => previousQuestion()}>
                <MdArrowBackIosNew />
              </button>
              <input
                name="email"
                type="textfield"
                required
                value={email}
                onChange={onChange}
              />
              <button onClick={() => submit()}>Senden</button>
            </div>
          ) : (
            <div className={styles.optionsWrapper}>{optionDivs}</div>
          )}
          <div className={styles.stepCounter}>
            <span>
              {currentFormIndex + 1} / {questions.length}
            </span>
          </div>
        </div>
        {currentFormIndex > 0 && currentFormIndex < questions.length - 1 && (
          <div
            className={styles.leftButtonWrapper}
            onClick={() => previousQuestion()}
          >
            <MdArrowBackIosNew />
          </div>
        )}
        {currentFormIndex < questions.length - 1 && (
          <div
            className={styles.rightButtonWrapper}
            onClick={() => nextQuestion()}
          >
            <MdArrowForwardIos />
          </div>
        )}
      </main>
    </>
  );
}
