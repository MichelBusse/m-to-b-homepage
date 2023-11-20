import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "../styles/ContactSection.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { toast } from "react-toastify";
import Link from "next/link";
import Particles from "react-tsparticles";
import { useRouter } from "next/router";
import FAQAppDevelopment from "./FAQAppDevelopment";
import { AnchorRefs } from "../pages/_app";
import TagManager from "react-gtm-module";
import FloatingActionContact from "./FloatingActionContact";

type Props = {
  anchorRefs: AnchorRefs;
  qnaSection?: JSX.Element;
  location?: string;
  locationLink?: string;
};

export default function ContactSection(props: Props) {
  const router = useRouter();
  const contactRef = useRef(null);

  let texts = {
    headline1: "Kontakt",
    contactText:
      "Du bist interessiert oder hast noch Fragen? Nutze unsere kostenlose Beratung und sende uns einfach eine Nachricht!",
    request: "Sende uns eine Nachricht",
    privacyText: "Ich akzeptiere die Datenschutzerklärung",
    send: "Absenden",
    formName: "Name",
    formMail: "E-Mail",
    formPhone: "Telefonnummer",
    formMessage: "Nachricht",
    checkInputs: "Bitte überprüfe die Eingaben",
    mailSuccess: "E-Mail erfolgreich versendet!",
    mailError: "Fehler beim Versenden!",
  };

  if (router.locale == "en") {
    texts = {
      headline1: "Contact",
      contactText:
        "Interested? Get free advice on all possibilities for your project and receive a non-binding offer!",
      request: "Get in touch",
      privacyText: "I accept the privacy policy",
      send: "Send Request",
      formName: "Your name",
      formMail: "Your mail",
      formPhone: "Your phone",
      formMessage: "Your message",
      checkInputs: "Please check your inputs",
      mailSuccess: "Mail send successfully!",
      mailError: "Error while sending your mail",
    };
  }

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    tel: "",
    text: "",
    privacy: false,
  });

  useEffect(() => {
    if (router.query.name != null) {
      setFormState((state) => ({
        ...state,
        name: router.query.name as string,
      }));
    }
    if (router.query.phone != null) {
      setFormState((state) => ({
        ...state,
        tel: router.query.phone as string,
      }));
    }
    if (router.query.email != null) {
      setFormState((state) => ({
        ...state,
        email: router.query.email as string,
      }));
    }
  }, [router.query.email, router.query.name, router.query.phone]);

  const onChange: ChangeEventHandler<any> = (event) => {
    const elementName = event.target.name;
    const elementValue =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState((state) => {
      return { ...state, [elementName]: elementValue };
    });
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (
      formState.name.trim() === "" ||
      formState.email.trim() === "" ||
      formState.text.trim() === "" ||
      !formState.privacy
    ) {
      toast.error(texts.checkInputs);
      return;
    }

    fetch("/api/contactSection", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.status === 200) {
        toast.success(texts.mailSuccess);
        setFormState({
          name: "",
          email: "",
          tel: "",
          text: "",
          privacy: false,
        });
        const dataLayerArgs = {
          dataLayer: {
            event: "contact-form-sent",
          },
        };
        TagManager.dataLayer(dataLayerArgs);
        if (router.pathname == "/Kontakt") {
          router.push("/");
        }
      } else {
        toast.error(texts.mailError);
      }
    });
  };

  return (
    <>
      <div className="scrollAnchor" id="contact"></div>
      <section
        className={styles.contactSection}
        ref={props.anchorRefs ? props.anchorRefs.contactRef : contactRef}
      >
        <div className={styles.contactTransitionWrapper}></div>
        <div className={styles.contactTransition}></div>
        <Particles
          className={styles.particles}
          options={{
            fpsLimit: 120,
            style: { position: "absolute", width: "100%", height: "100%" },
            particles: {
              number: {
                value: 50,
              },
              color: {
                value: "#ebebeb",
              },
              links: {
                enable: true,
                distance: 300,
                color: "#ebebeb",
                opacity: 1,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: 6,
                random: true,
              },
            },
          }}
        />
        <div className={styles.flexWrapper}>
          <div className={styles.contactText}>
            <div className={styles.textWrapper}>
              <h2>{texts.headline1}</h2>
              <p>{texts.contactText}</p>
              <p>
                <HiMail className={styles.icon} />
                <a href="mailto: kontakt@m-to-b.com">kontakt@m-to-b.com</a>
              </p>
              <p>
                <BsTelephoneFill className={styles.icon} />
                <a href="tel:+4916098709043">0160 98709043</a>
              </p>
              <p>
                <IoLocationSharp className={styles.icon} />
                <Link href={props.locationLink ?? "/App-Agentur/Leipzig"}>
                  <a>{props.location ? props.location + " (digital)" : "Leipzig (digital)"}</a>
                </Link>
              </p>
              {props.qnaSection ?? <FAQAppDevelopment />}
            </div>
          </div>
          <div className={styles.contactFormular} id="formular">
            <div className={styles.transWrapper}>
              <form>
                <h2>{texts.request}</h2>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={onChange}
                  />
                  <label
                    htmlFor="name"
                    className={formState.name !== "" ? styles.written : ""}
                  >
                    {texts.formName}
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={onChange}
                  />
                  <label
                    htmlFor="email"
                    className={formState.email !== "" ? styles.written : ""}
                  >
                    {texts.formMail}
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    value={formState.tel}
                    onChange={onChange}
                  />
                  <label
                    htmlFor="tel"
                    className={formState.tel !== "" ? styles.written : ""}
                  >
                    {texts.formPhone}
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <textarea
                    name="text"
                    id="text"
                    value={formState.text}
                    onChange={onChange}
                  ></textarea>
                  <label
                    htmlFor="text"
                    className={formState.text !== "" ? styles.written : ""}
                  >
                    {texts.formMessage}
                  </label>
                </div>
                <div className={styles.submitWrapper}>
                  <p className={styles.checkboxWrapper}>
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      className={styles.checkbox}
                      checked={formState.privacy}
                      onChange={onChange}
                    />
                    <label htmlFor="privacy">{texts.privacyText}</label>
                  </p>
                  <button
                    type="submit"
                    form="formular"
                    name="sendMail"
                    value={texts.send}
                    onClick={handleSubmit}
                    className={"bounce"}
                  >
                    <div>{texts.send}</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FloatingActionContact anchorRef={props.anchorRefs ? props.anchorRefs.contactRef : contactRef} />
    </>
  );
}
