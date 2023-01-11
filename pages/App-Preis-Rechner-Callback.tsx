import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/AppPriceCalculatorCallback.module.scss";
import { toast } from "react-toastify";
import TagManager from "react-gtm-module";
import { Button, TextField } from "@mui/material";

export default function AppPriceCalculatorCallbackPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tag, setTag] = useState("");

  let texts = {
    title: "Kostenloses Beratungsgespräch anfragen - M-to-B",
    checkInputs: "Bitte überprüfe deine Eingaben",
    mailSuccess: "Erfolgreich gesendet!",
    mailError: "Senden fehlgeschlagen",
    description: "Jetzt unser kostenloses Beratungsgespräch anfragen",
    headline: "Nutzen Sie jetzt unser kostenloses 30 minütiges Beratungsgespräch!",
    send: "Senden",
  };

  if (router.locale == "en") {
    texts = {
      title: "Free Consultation - M-to-B",
      checkInputs: "Please check your inputs",
      mailSuccess: "Sent successfully",
      mailError: "Error: Could not send mail",
      description: "Request a free consultation",
      headline: "Get a free 30 minute consultation now",
      send: "Send",
    };
  }

  useEffect(() => {
    const {mail, tag} = router.query

    tag && setTag(tag.toString())
    mail && setEmail(mail.toString())
  }, [router.query])

  const submit = () => {
    if (phone.trim() == "" || email.trim() == "") {
      toast.error(texts.checkInputs);
      return;
    }

    fetch("/api/appPriceCalculatorCallback", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, phone, tag }),
    }).then((res) => {
      if (res.status === 200) {
        toast.success(texts.mailSuccess);
        setEmail("");
        setPhone("");
        const dataLayerArgs = {
          dataLayer: {
            event: "app-price-callback-sent",
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
          href="https://m-to-b.com/App-Preis-Rechner-Callback"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://m-to-b.com/en/App-Preis-Rechner-Callback"
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <main className={styles.appPriceCalculator}>
        <div className={`${styles.formWrapper}`}>
          <h2>{texts.headline}</h2>
          <div className={styles.inputWrapper}>
            <TextField 
              name="email"
              type="textfield"
              required
              variant="filled"
              label="Email"
              sx={{background : "#ffffff", width : "100%", margin: "0.5em 0"}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
              name="phone"
              type="textfield"
              required
              variant="filled"
              label="Telefon"
              sx={{background : "#ffffff", width : "100%", margin: "0.5em 0"}}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button 
              onClick={() => submit()}
              sx={{background : "#ffffff", width : "100%", margin: "0.5em 0", fontSize: "1.2em", padding: "0.5em", fontWeight: "bold", textTransform: "none"}}
              variant="contained"
            >Jetzt anfragen!</Button>
          </div>
        </div>
      </main>
    </>
  );
}
