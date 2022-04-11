import styles from "../styles/Impressum.module.scss";

export default function Impressum() {
  return (
    <>
      <div className={styles.imprint}>
        <section>
          <div className={styles.text}>
            <h1>Impressum</h1>

            <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
            <p>
              M-to-B Softwareentwicklung Inh. Michel Busse
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

            <h4>Fotos/Grafiken</h4>
            <p>
              Für das Design wurden Fotos der folgenden Fotografen / Websites
              verwendet:
            </p>
            <ul>
              <li>pixabay</li>
              <li>Adobe Stock | joyfotoliakid</li>
              <li>Adobe Stock | Jirapong</li>
              <li>Adobe Stock | joyfotoliakid</li>
              <li>Adobe Stock | H_Ko</li>
              <a href="https://www.pexels.com/photo/serious-ethnic-field-engineer-examining-hardware-and-working-on-laptop-442152/">
                <li>Pexels | Field Engineer</li>
              </a>
              <a href="https://www.pexels.com/photo/woman-in-black-shirt-and-black-shorts-carrying-black-leather-shoulder-bag-4754146/">
                <li>Pexels | Cottonbro</li>
              </a>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
