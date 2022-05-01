import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

import styles from "../../styles/home/ContactSection.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { toast } from "react-toastify";
import Link from "next/link";

const Particles = dynamic(() => import("react-tsparticles"), {
  suspense: true,
});

export default function ContactSection(props) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    tel: "",
    text: "",
    privacy: false,
  });

  const onChange = (event) => {
    const elementName = event.target.name;
    const elementValue =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState((state) => {
      return { ...state, [elementName]: elementValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formState.name.trim() === "" ||
      formState.email.trim() === "" ||
      formState.text.trim() === "" ||
      !formState.privacy
    ) {
      toast.error("Bitte überprüfe die Eingaben");
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
        toast.success("E-Mail erfolgreich versendet!");
        setFormState({
          name: "",
          email: "",
          tel: "",
          text: "",
          privacy: false,
        });
      } else {
        toast.error("Fehler beim Versenden!");
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
        <Suspense fallback={'loading'}>
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
        </Suspense>
        <div className={styles.flexWrapper}>
          <div className={styles.contactText}>
            <div className={styles.textWrapper}>
              <h2>Kontakt</h2>
              <p>
                Interessiert? Lassen Sie sich kostenlos zu allen Möglichkeiten
                für Ihr Projekt beraten und ein unverbindliches Angebot
                erstellen!
              </p>
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
            </div>
          </div>
          <div className={styles.contactFormular} id="formular">
            <div className={styles.transWrapper}>
              <form>
                <h2>Anfrage senden</h2>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={onChange}
                  />
                  <span className={formState.name !== "" ? styles.written : ""}>
                    Ihr Name
                  </span>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={onChange}
                  />
                  <span
                    className={formState.email !== "" ? styles.written : ""}
                  >
                    Ihre E-Mail
                  </span>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    type="tel"
                    name="tel"
                    value={formState.tel}
                    onChange={onChange}
                  />
                  <span className={formState.tel !== "" ? styles.written : ""}>
                    Ihre Telefonnummer
                  </span>
                </div>
                <div className={styles.inputWrapper}>
                  <textarea
                    name="text"
                    value={formState.text}
                    onChange={onChange}
                  ></textarea>
                  <span className={formState.text !== "" ? styles.written : ""}>
                    Ihre Nachricht
                  </span>
                </div>
                <div className={styles.submitWrapper}>
                  <p className={styles.checkboxWrapper}>
                    <input
                      type="checkbox"
                      name="privacy"
                      className={styles.checkbox}
                      checked={formState.privacy}
                      onChange={onChange}
                    />
                    <span>
                      Ich akzeptiere die{" "}
                      <Link href="/Datenschutz">
                        <a>Datenschutzerklärung</a>
                      </Link>
                    </span>
                  </p>
                  <input
                    className={styles.submit}
                    type="submit"
                    name="sendMail"
                    value="Absenden"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
