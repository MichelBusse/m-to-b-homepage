import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";

import styles from "../../styles/home/ContactSection.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { toast } from "react-toastify";
import Link from "next/link";
import Particles from "react-tsparticles";
import { useRouter } from "next/router";
import QnA from "./QnA";
import { AnchorRefs } from "../../pages/_app";

type Props = {
  anchorRefs: AnchorRefs;
};

export default function ContactSection(props: Props) {
  const router = useRouter();

  let texts = {
    headline1: "Kontakt",
    contactText:
      "Du bist interessiert oder hast noch Fragen? Nutze unsere kostenlose Beratung und sende uns einfach eine Nachricht!",
    request: "Nachricht senden",
    privacyText: "Ich akzeptiere die ",
    privacy: "Datenschutzerklärung",
    send: "Absenden",
    formName: "Ihr Name",
    formMail: "Ihre E-Mail",
    formPhone: "Ihre Telefonnummer",
    formMessage: "Ihre Nachricht",
    checkInputs: "Bitte überprüfe die Eingaben",
    mailSuccess: "E-Mail erfolgreich versendet!",
    mailError: "Fehler beim Versenden",
  };

  if (router.locale == "en") {
    texts = {
      headline1: "Contact",
      contactText:
        "Interested? Get free advice on all possibilities for your project and receive a non-binding offer!",
      request: "Get in touch",
      privacyText: "I accept the ",
      privacy: "privacy policy",
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
      console.log(res);
      if (res.status === 200) {
        toast.success(texts.mailSuccess);
        setFormState({
          name: "",
          email: "",
          tel: "",
          text: "",
          privacy: false,
        });
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
        ref={props.anchorRefs ? props.anchorRefs.contactRef : null}
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
                value: "#dddddd",
              },
              links: {
                enable: true,
                distance: 300,
                color: "#dddddd",
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
                <strong>Leipzig</strong>
              </p>
              <QnA />
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
                    <label htmlFor="privacy">
                      {texts.privacyText}{" "}
                      <Link href="/Datenschutz">
                        <a>{texts.privacy}</a>
                      </Link>
                    </label>
                  </p>
                  <button
                    type="submit"
                    form="formular"
                    name="sendMail"
                    value={texts.send}
                    onClick={handleSubmit}
                  >
                    {texts.send}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
