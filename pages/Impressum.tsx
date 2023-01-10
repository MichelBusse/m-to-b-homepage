import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Impressum.module.scss";

export const config = {
  unstable_runtimeJS: false,
};

export default function Imprint() {
  const router = useRouter()

  let texts = {
    title: "Impressum - M-to-B",
    description:
    "Das Impressum unserer Homepage von M-to-B Software",
  };

  if (router.locale == "en") {
    texts = {
      title: "Imprint - M-to-B",
      description:
      "Imprint of our homepage M-to-B Software",
    };
  }

  return (
    <>
      <Head>
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <div className={styles.imprint}>
        <section>
          <div className={styles.text}>
            <h1>Impressum</h1>

            <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
            <p>
              M-to-B Software Inh. Michel Busse
              <br />
              Kirchberger Str. 62
              <br />
              08107 Kirchberg
            </p>

            <h4>Kontakt</h4>
            <p>
              Telefon: 0160 98709043
              <br />
              E-Mail: kontakt@m-to.b.com
            </p>

            <h4>Umsatzsteuer-ID</h4>
            <p>
              Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
              Umsatzsteuergesetz:
              <br />
              DE343086286
            </p>

            <h4>EU-Streitschlichtung</h4>
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h4>
              Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
            </h4>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <p>
              Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
            </p>

            <h4>Urheberrecht</h4>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
