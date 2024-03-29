import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Datenschutz.module.scss";

export const config = {
  unstable_runtimeJS: false,
};

export default function PrivacyPolicy() {
  const router = useRouter();

  let texts = {
    title: "Datenschutz - M-to-B Software",
    description:
    "Die Datenschutzerklärung unserer Homepage von M-to-B Software",
  };

  if (router.locale == "en") {
    texts = {
      title: "Privacy Policy - M-to-B Software",
      description:
      "Privacy Policy of our homepage M-to-B Software",
    };
  }
  return (
    <>
      <Head>
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <div className={styles.privacy}>
        <section>
          <div className={styles.text}>
            <h1>Datenschutz&shy;erklärung</h1>
            <p>
              Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
              EU-Datenschutzgrundverordnung (DSGVO), ist:
            </p>
            <p>Michel Busse</p>
            <h4>Ihre Betroffenenrechte</h4>
            <p>
              Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
              können Sie jederzeit folgende Rechte ausüben:
            </p>
            <ul>
              <li>
                Auskunft über Ihre bei uns gespeicherten Daten und deren
                Verarbeitung (Art. 15 DSGVO),
              </li>
              <li>
                Berichtigung unrichtiger personenbezogener Daten (Art. 16
                DSGVO),
              </li>
              <li>
                Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),
              </li>
              <li>
                Einschränkung der Datenverarbeitung, sofern wir Ihre Daten
                aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art.
                18 DSGVO),
              </li>
              <li>
                Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21
                DSGVO) und
              </li>
              <li>
                Datenübertragbarkeit, sofern Sie in die Datenverarbeitung
                eingewilligt haben oder einen Vertrag mit uns abgeschlossen
                haben (Art. 20 DSGVO).
              </li>
            </ul>
            <p>
              Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
              jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Sie können sich jederzeit mit einer Beschwerde an eine
              Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde
              des Bundeslands Ihres Wohnsitzes oder an die für uns als
              verantwortliche Stelle zuständige Behörde.
            </p>
            <p>
              Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen
              Bereich) mit Anschrift finden Sie unter:{" "}
              <a
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                target="_blank"
                rel="noreferrer"
              >
                bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
              </a>
              .
            </p>
            <h3>
              Erfassung allgemeiner Informationen beim Besuch unserer Website
            </h3>
            <h4>Art und Zweck der Verarbeitung:</h4>
            <p>
              Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht
              registrieren oder anderweitig Informationen übermitteln, werden
              automatisch Informationen allgemeiner Natur erfasst. Diese
              Informationen (Server-Logfiles) beinhalten etwa die Art des
              Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres
              Internet-Service-Providers, Ihre IP-Adresse und ähnliches.{" "}
            </p>
            <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
            <ul>
              <li>
                Sicherstellung eines problemlosen Verbindungsaufbaus der
                Website,
              </li>
              <li>
                Sicherstellung einer reibungslosen Nutzung unserer Website,
              </li>
              <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
              <li>zur Optimierung unserer Website.</li>
            </ul>
            <p>
              Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu
              ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert
              statistisch ausgewertet, um unseren Internetauftritt und die
              dahinterstehende Technik zu optimieren.{" "}
            </p>
            <h4>Rechtsgrundlage und berechtigtes Interesse:</h4>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf
              Basis unseres berechtigten Interesses an der Verbesserung der
              Stabilität und Funktionalität unserer Website.
            </p>
            <h4>Empfänger:</h4>
            <p>
              Empfänger der Daten sind ggf. technische Dienstleister, die für
              den Betrieb und die Wartung unserer Webseite als
              Auftragsverarbeiter tätig werden.
            </p>
            <p></p>
            <h4>Speicherdauer:</h4>
            <p>
              Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung
              nicht mehr erforderlich sind. Dies ist für die Daten, die der
              Bereitstellung der Website dienen, grundsätzlich der Fall, wenn
              die jeweilige Sitzung beendet ist.{" "}
            </p>
            <p></p>
            <h4>Bereitstellung vorgeschrieben oder erforderlich:</h4>
            <p>
              Die Bereitstellung der vorgenannten personenbezogenen Daten ist
              weder gesetzlich noch vertraglich vorgeschrieben. Ohne die
              IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit
              unserer Website nicht gewährleistet. Zudem können einzelne Dienste
              und Services nicht verfügbar oder eingeschränkt sein. Aus diesem
              Grund ist ein Widerspruch ausgeschlossen.{" "}
            </p>
            <p></p>
            <h3>Kontaktformular</h3>
            <h4>Art und Zweck der Verarbeitung:</h4>
            <p>
              Die von Ihnen eingegebenen Daten werden zum Zweck der
              individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die
              Angabe einer validen E-Mail-Adresse sowie Ihres Namens
              erforderlich. Diese dient der Zuordnung der Anfrage und der
              anschließenden Beantwortung derselben. Die Angabe weiterer Daten
              ist optional.
            </p>
            <h4>Rechtsgrundlage:</h4>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten
              erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6
              Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine
              unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben
              werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche
              Anschlussfragen gespeichert.
            </p>
            <p>
              Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen,
              erfolgt die Verarbeitung der in das Kontaktformular eingegebenen
              Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1
              lit. b DSGVO).
            </p>
            <h4>Empfänger:</h4>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
            <p></p>
            <h4>Speicherdauer:</h4>
            <p>
              Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage
              gelöscht.
            </p>
            <p>
              Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den
              gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten
              nach Ablauf dieser Fristen.{" "}
            </p>
            <h4>Bereitstellung vorgeschrieben oder erforderlich:</h4>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt
              freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern
              Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage
              mitteilen.
            </p>
            <p></p>
            <h3>Verwendung von Google Analytics</h3>
            <p>
              Soweit Sie ihre Einwilligung gegeben haben, wird auf dieser
              Website Google Analytics eingesetzt, ein Webanalysedienst der
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA
              (nachfolgend: „Google“). Google Analytics verwendet sog.
              „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Webseite durch Sie
              ermöglichen. Die durch das Cookie erzeugten Informationen über
              Ihre Benutzung dieser Webseite werden in der Regel an einen Server
              von Google in den USA übertragen und dort gespeichert. Aufgrund
              der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird
              Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten
              der Europäischen Union oder in anderen Vertragsstaaten des
              Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur
              in Ausnahmefällen wird die volle IP-Adresse an einen Server von
              Google in den USA übertragen und dort gekürzt. Die im Rahmen von
              Google Analytics von Ihrem Browser übermittelte IP-Adresse wird
              nicht mit anderen Daten von Google zusammengeführt.{" "}
            </p>
            <p>
              Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden
              Sie unter{" "}
              <a
                href="https://www.google.com/analytics/terms/de.html"
                rel="noreferrer"
                target="_blank"
              >
                https://www.google.com/analytics/terms/de.html
              </a>{" "}
              und unter{" "}
              <a
                href="https://policies.google.com/?hl=de"
                rel="noreferrer"
                target="_blank"
              >
                https://policies.google.com/?hl=de
              </a>
              .{" "}
            </p>
            <p>
              Im Auftrag des Betreibers dieser Website wird Google diese
              Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten,
              um Reports über die Webseitenaktivitäten zusammenzustellen und um
              weitere mit der Websitenutzung und der Internetnutzung verbundene
              Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen.{" "}
            </p>
            <p>
              Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B.
              User-ID) oder Werbe-IDs verknüpften Daten werden nach 14 Monaten
              automatisch gelöscht. Die Löschung von Daten, deren
              Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im
              Monat.
            </p>
            <h4>Widerruf der Einwilligung:</h4>
            <p>
              Sie können die Speicherung der Cookies durch eine entsprechende
              Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website vollumfänglich werden nutzen
              können.{" "}
            </p>
            <p>
              Sie können darüber hinaus die Erfassung der durch das Cookie
              erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl.
              Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
              durch Google verhindern, indem sie das unter dem folgenden Link
              verfügbare Browser-Plugin herunterladen und installieren:{" "}
              <a
                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                rel="noreferrer"
                target="_blank"
              >
                Browser Add On zur Deaktivierung von Google Analytics
              </a>
              .
            </p>
            <p></p>
            <h3>SSL-Verschlüsselung</h3>
            <p>
              Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
              verwenden wir dem aktuellen Stand der Technik entsprechende
              Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
            </p>
            <p></p>
            <h3>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h3>
            <h4>Einzelfallbezogenes Widerspruchsrecht</h4>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, jederzeit gegen die Verarbeitung Sie
              betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1
              lit. f DSGVO (Datenverarbeitung auf der Grundlage einer
              Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt
              auch für ein auf diese Bestimmung gestütztes Profiling im Sinne
              von Art. 4 Nr. 4 DSGVO.
            </p>
            <p>
              Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten
              nicht mehr verarbeiten, es sei denn, wir können zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
              Interessen, Rechte und Freiheiten überwiegen, oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
              von Rechtsansprüchen.
            </p>
            <h4>Empfänger eines Widerspruchs</h4>
            <p>
              Michel Busse
              <br />
              michel.busse@m-to-b.com
            </p>

            <h3>Nutzung von Google Analytics</h3>
            <p>
              Wir verwenden Google Analytics, um die Website-Nutzung zu
              analysieren. Die daraus gewonnenen Daten werden genutzt, um unsere
              Website sowie Werbemaßnahmen zu optimieren.
            </p>
            <p>
              Google Analytics ist ein Webanalysedienst, der von Google Inc.
              (1600 Amphitheatre Parkway, Mountain View, CA 94043, United
              States) betrieben und bereitgestellt wird. Google verarbeitet die
              Daten zur Website-Nutzung in unserem Auftrag und verpflichtet sich
              vertraglich zu Maßnahmen, um die Vertraulichkeit der verarbeiteten
              Daten zu gewährleisten.
            </p>
            <h4>
              Während Ihres Website-Besuchs werden u.a. folgende Daten
              aufgezeichnet:
            </h4>
            <p>Aufgerufene Seiten</p>
            <p>
              Die Erreichung von &quot;Website-Zielen&quot; (z.B.
              Kontaktanfragen und Newsletter-Anmeldungen)
            </p>
            <p>
              Ihr Verhalten auf den Seiten (beispielsweise Klicks,
              Scroll-Verhalten und Verweildauer)
            </p>
            <p>Ihr ungefährer Standort (Land und Stadt)</p>
            <p>
              Ihre IP-Adresse (in gekürzter Form, sodass keine eindeutige
              Zuordnung möglich ist)
            </p>
            <p>
              Technische Informationen wie Browser, Internetanbieter, Endgerät
              und Bildschirmauflösung
            </p>
            <p>
              Herkunftsquelle Ihres Besuchs (d.h. über welche Website bzw. über
              welches Werbemittel Sie zu uns gekommen sind)
            </p>
            <p>
              Diese Daten werden an einen Server von Google in den USA
              übertragen. Google beachtet dabei die Datenschutzbestimmungen des
              „EU-US Privacy Shield“-Abkommens.
            </p>
            <p>
              Google Analytics speichert Cookies in Ihrem Webbrowser für die
              Dauer von zwei Jahren seit Ihrem letzten Besuch. Diese Cookies
              enthaltene eine zufallsgenerierte User-ID, mit der Sie bei
              zukünftigen Website-Besuchen wiedererkannt werden können.
            </p>
            <p>
              Die aufgezeichneten Daten werden zusammen mit der
              zufallsgenerierten User-ID gespeichert, was die Auswertung
              pseudonymer Nutzerprofile ermöglicht. Diese nutzerbezogenen Daten
              werden automatisch nach 14 Monaten gelöscht. Sonstige Daten
              bleiben in aggregierter Form unbefristet gespeichert.
            </p>
            <p>
              Sollten Sie mit der Erfassung nicht einverstanden sein, können Sie
              diese mit der einmaligen Installation des Browser-Add-ons zur
              Deaktivierung von Google Analytics unterbinden.
            </p>

            <h3>Änderung unserer Datenschutzbestimmungen</h3>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um Änderungen unserer Leistungen in der Datenschutzerklärung
              umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren
              erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
            <h3>Fragen an den Datenschutzbeauftragten</h3>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
              eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz
              verantwortliche Person in unserer Organisation:
            </p>
            <p>
              Michel Busse
              <br />
              michel.busse@m-to-b.com
            </p>
            <p>
              <em>
                Die Datenschutzerklärung wurde mithilfe der activeMind AG
                erstellt, den Experten für{" "}
                <a
                  href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  externe Datenschutzbeauftragte
                </a>{" "}
                (Version #2020-09-30).
              </em>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
