import Head from "next/head";
import { useRouter } from "next/router";
import BlogEntry from "../../components/BlogEntry";

export function getTexts(lan: string | undefined) {
  let texts = {
    title: "Augmented-Reality-Branchen",
    headline: "Augmented Reality in verschiedenen Branchen",
    content: (
      <>
        <h2>Einzelhandel</h2>
        <p>
          Im Einzelhandel kann Augmented Reality dazu eingesetzt werden, das
          Einkaufserlebnis für Kunden zu verbessern. Durch die Integration von
          AR in mobile Apps können Kunden Produkte in 3D sehen und ausprobieren,
          bevor sie eine Kaufentscheidung treffen. AR kann auch Kunden dabei zu
          helfen, Artikel schneller zu finden und personalisierte Angebote zu
          erhalten.
        </p>
        <h2>Gesundheitswesen</h2>
        <p>
          Im Gesundheitswesen kann Augmented Reality bei der Ausbildung von
          Ärzten und medizinischem Fachpersonal eingesetzt werden. Durch die
          Verwendung von AR-Headsets können Studenten virtuelle Operationen
          durchführen und sich mit medizinischen Geräten vertraut machen, bevor
          sie in der Praxis arbeiten. AR kann auch bei der Diagnose und
          Behandlung von Patienten eingesetzt werden, indem es Ärzten
          ermöglicht, virtuelle Modelle des Körpers zu erstellen und Krankheiten
          genauer zu diagnostizieren.
        </p>
        <h2>Automobilindustrie</h2>
        <p>
          In der Automobilindustrie trägt Augmented Reality dazu bei, die
          Wartung von Fahrzeugen zu vereinfachen. AR-Headsets können Technikern
          bei der Wartung von Fahrzeugen helfen, indem sie ihnen anzeigen, wo
          sich bestimmte Teile befinden und welche Schritte sie zur Reparatur
          durchführen müssen. Außerdem kann den Kunden das Kauferlebnis
          erleichtert werden, indem sie virtuelle Testfahrten durchführen oder
          ihre Konfigurationen in 3D visualisieren können.
        </p>
        <h2>Tourismus</h2>
        <p>
          Im Tourismus kann Augmented Reality verwendet werden, Reisenden ein
          besseres Verständnis der Orte zu vermitteln, die sie besuchen. Durch
          die Verwendung von AR-Apps können Reisende historische Stätten oder
          Museen erkunden und zusätzliche Informationen und Animationen in
          Echtzeit erhalten. Außerdem hilft AR, die Navigation und Orientierung
          in unbekannten Städten zu erleichtern, indem Reisenden eine virtuelle
          Karte und Anweisungen anzeigt werden.
        </p>
        <h2>Zukünftige Anwendungen</h2>
        <p>
          Die Zukunft von Augmented Reality wird immer aufregender. Wir
          erwarten, dass diese Technologie in Bereichen wie Architektur,
          Bildung, Sport und Unterhaltung weiter eingesetzt wird. Durch die
          Verwendung von AR können Architekten und Designer ihre Konzepte in
          Echtzeit visualisieren und Änderungen vornehmen. In der Bildung können
          AR-Apps helfen, das Lernen zu verbessern und Schülern Schülern
          virtuelle Erfahrungen zu bieten. Im Sport kann AR dazu beitragen,
          Zuschauern ein besseres Erlebnis zu bieten, indem sie zusätzliche
          Statistiken und Informationen in Echtzeit anzeigen. In der
          Unterhaltung können unvergleichliche, immersive Erlebnisse geschaffen
          werden. Die Gaming-Industrie hat bereits begonnen, AR zu integrieren.
          Spiele wie Pokemon Go haben gezeigt, wie die Technologie die
          Spielerfahrung verbessern kann, indem sie digitale Elemente in die
          reale Welt einfügt. Aber AR in der Unterhaltung geht über Gaming
          hinaus.
        </p>
        <h2>Fazit</h2>
        <p>
          Insgesamt bietet Augmented Reality eine Fülle von Möglichkeiten, um
          immersive Erlebnisse in verschiedenen Branchen zu schaffen. Ob im
          Einzelhandel, Gesundheitswesen, Automobilindustrie, Tourismus oder
          Unterhaltung, AR kann dazu beitragen, die Erfahrung der Benutzer zu
          verbessern, indem sie digitale Elemente in die reale Welt einfügt. Wir
          sind gespannt, was die Zukunft für AR bereithält und freuen uns
          darauf, weiterhin innovative Anwendungen dieser aufregenden
          Technologie zu entwickeln.
        </p>
      </>
    ),
    shortDescription:
      "Augmented Reality findet schon heute Anwendung in den unterschiedlichsten Branchen und bietet noch viele Möglichkeiten darüber hinaus.",
    image: "/images/blog/augmented-reality.png",
  };

  if (lan == "en") {
    texts = {
      title: "Augmented-Reality-Branchen",
      headline: "Augmented Reality in Various Industries",
      content: (
        <>
          <h2>Retail</h2>
          <p>
            In retail, augmented reality can be used to improve the shopping
            experience for customers. By integrating AR into mobile apps,
            customers can see and try products in 3D before making a purchase
            decision. AR can also help customers find items faster and get
            personalized offers.
          </p>
          <h2>Healthcare</h2>
          <p>
            In healthcare, augmented reality can be used in the training of
            doctors and medical professionals. By using AR headsets, students
            can perform virtual surgeries and become familiar with medical
            equipment before going to the office. AR can also be used in the
            diagnosis and treatment of patients, allowing doctors to create
            virtual models of the body and more accurately diagnose diseases.
          </p>
          <h2>Automotive Industry</h2>
          <p>
            In the automotive industry, augmented reality helps simplify vehicle
            maintenance. AR headsets can help technicians service vehicles by
            showing them where certain parts are located and what steps they
            need to take to repair them. In addition, the shopping experience
            can be made easier for customers by being able to carry out virtual
            test drives or visualize their configurations in 3D.
          </p>
          <h2>Tourism</h2>
          <p>
            In tourism, augmented reality can be used to give travelers a better
            understanding of the places they are visiting. By using AR apps,
            travelers can explore historical sites or museums and receive
            additional real-time information and animations. Also, AR helps to
            facilitate navigation and orientation in unfamiliar cities by
            showing travelers a virtual map and directions.
          </p>
          <h2>Future Applications</h2>
          <p>
            The future of augmented reality is getting more and more exciting.
            We expect this technology to continue to be used in areas such as
            architecture, education, sports and entertainment. By using AR,
            architects and designers can visualize their concepts and make
            changes in real time. In education, AR apps can help enhance
            learning and provide virtual experiences for students. In sports, AR
            can help provide viewers with a better experience by showing
            additional real-time statistics and information. In entertainment,
            unparalleled, immersive experiences can be created. The gaming
            industry has already started to integrate AR. Games like Pokemon Go
            have shown how technology can enhance gaming experiences by adding
            digital elements to the real world. But AR in entertainment goes
            beyond gaming.
          </p>
          <h2>Conclusion</h2>
          <p>
            Overall, augmented reality offers a wealth of opportunities to
            create immersive experiences across multiple industries. Whether
            it&apos;s in retail, healthcare, automotive, tourism or
            entertainment, AR can help enhance users&apos; experience by
            injecting digital elements into the real world. We&apos;re excited
            to see what the future holds for AR and look forward to continuing
            to develop innovative uses of this exciting technology.
          </p>
        </>
      ),
      shortDescription:
        "Augmented Reality is already being used in a wide variety of industries and offers many possibilities beyond that.",
      image: "/images/blog/augmented-reality.png",
    };
  }

  return texts;
}

export default function BlogEntryPage() {
  const router = useRouter();

  const texts = getTexts(router.locale);

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href={"https://m-to-b.com/Blog/" + texts.title}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={"https://m-to-b.com/en/Blog/" + texts.title}
        />
        <title key="title">{texts.headline + " - M-to-B"}</title>
        <meta name="description" content={texts.shortDescription} />
      </Head>
      <main>
        <BlogEntry
          headline={texts.headline}
          content={texts.content}
          image={texts.image}
        />
      </main>
    </>
  );
}
