import Head from "next/head";
import { useRouter } from "next/router";
import BlogEntry from "../../components/BlogEntry";

export function getTexts(lan: string | undefined) {
  let texts = {
    title: "Augmented-Reality-Im-OP",
    headline: "Augmented Reality im OP",
    content: (
      <>
        <p>
          Das Wettrennen für Augmented Reality in der Medizin hat begonnen.
          Firmen und Start-Ups forschen und entwickeln unermüdlich, um die
          ersten realen Anwendungen von Augmented Reality in der Chirurgie
          Wirklichkeit werden zu lassen. Auch wir laufen gemeinsam mit dem
          Universitätsklinikum Leipzig seit fast 1,5 Jahren in diesem Wettlauf
          mit und konnten schon verschiedene Entwicklungen realisieren. Was
          genau konnten wir bis jetzt auf den Weg bringen?
        </p>
        <p>
          Navigation im Gehirn - oder - An welcher Stelle im MRT-Bild befindet
          sich die Spitze des Instruments gerade?
        </p>
        <p>
          Die Navigation im Gehirn ist aktuell die erste und einzige
          Navigationmöglichkeit im OP. Während die herkömmlichen Geräte dabei
          auf große Stative, Kameras und Referenzpunkte am OP-Tisch setzen und
          per Bilderkennung des Instruments die Position im Patienten zu
          berechnen, versuchen wir die gleiche Funktionalität in der AR-Brille
          “Hololens 2” zu komprimieren. Anstatt auf den Bildschirm des Geräts zu
          schauen, das Instrument immer wieder im Blickfeld der Kamera
          auszurichten und dann die Position zu erkennen, sollen mit AR die
          entsprechenden MRT- oder CT-Bilder einfach neben dem Patienten
          eingeblendet werden und exakt dann erscheinen, wenn der Chirurg sie
          benötigt. Diese Funktionen sind längst keine Vision mehr, sondern
          konnten von uns zu großen Teilen schon umgesetzt werden und sind
          aktuell im Test für den Einsatz im OP.
        </p>
        <p>
          Damit verbunden, arbeiten wir auch in einem anderen Teilgebiet der
          Neurochirurgie und versuchen eine Zeichenfunktion auf dem Gehirn zu
          entwickeln - Warum?
        </p>
        <p>
          Bei bestimmten Tumoren im Gehirn nahe dem Sprachzentrum kann eine
          Wach-OP zur Entfernung angesetzt werden. Eine Wach-OP deshalb, um die
          wichtigen Sprachfunktionen nahe dem Tumor lokalisieren und somit
          schützen zu können. Dabei wird das Gehirn in den Gebieten um den Tumor
          mit Elektrizität stimuliert und währenddessen die Sprachfähigkeit des
          Patienten getestet. Werden nun Einschränkungen der Sprache
          (Wortfindungsstörung, etc.) hörbar, weiß der Chirurg, dass das
          stimulierte Areal wichtig für die Sprachfähigkeit ist. Und hier kommt
          das Problem - um dieses Areal nun zu markieren, muss nun per Hand die
          Position protokolliert werden und z.B. mit einem sterilen Stück Papier
          auf dem Gehirn markiert werden. Im weiteren Verlauf der OP können
          diese Papierstücke verrutschen und müssen zeitaufwändig neu
          positioniert werden. Um diese Hürde zu überwinden, soll künftig
          Augmented Reality zur Markierung verwendet werden - indem einfach
          digital die Stellen auf dem Gehirn “eingezeichnet” werden können.
        </p>
        <p>
          Zusammen mit den Ärzten und Forschern des Uniklinikums arbeiten wir an
          Lösungen wie diesen, um die Arbeit der Ärzte und die Erfahrung der
          Patienten durch Augmented Reality verbessern zu können.
        </p>
      </>
    ),
    shortDescription:
      "Statt mit Stethoskop bald mit AR-Brille - Wie die Chirurgie zukünftig mit Augmented Reality aussehen könnte.",
    image: "/images/blog/augmented-reality-op.png",
  };

  if (lan == "en") {
    texts = {
      title: "Augmented-Reality-Im-OP",
      headline: "Augmented Reality in Surgery",
      content: (
        <>
          <p>
            The race for augmented reality in medicine has begun. Companies and
            start-ups tirelessly research and develop to make the first real
            applications of augmented reality in surgery a reality. We have also
            been running in this race together with the Leipzig University
            Hospital for almost 1.5 years and have already been able to bring
            various developments into use. What exactly have we been able to get
            off the ground so far?
          </p>
          <p>
            Navigation in the brain - or - where in the MRI image is the tip of
            the instrument currently located?
            <br />
            Navigation in the brain is currently the first and only navigation
            option in the OR. While conventional devices rely on large tripods,
            cameras and reference points on the operating table to calculate the
            instrument&apos;s position in the patient using image recognition, we are
            trying to compress the same functionality in the &quot;Hololens 2&quot; AR
            glasses. Instead of looking at the screen of the device, repeatedly
            aligning the instrument in the camera&apos;s field of view and then
            recognizing the position on the screen, with AR the corresponding
            MRI or CT images should simply be displayed next to the patient and
            appear exactly when when the surgeon needs them. These functions are
            no longer a vision, but have already been implemented by us to a
            large extent and are currently being tested for use in the OR.
          </p>
          <p>
            In connection with this, we are also working in another area of
            ​​neurosurgery and are trying to develop a sign function on the
            brain - why?
            <br />
            In the case of certain tumors in the brain near the speech center,
            an awake operation can be scheduled to remove them. A wake
            operation, therefore, in order to be able to localize the important
            language functions near the tumor and thus protect them. The brain
            is stimulated with electricity in the areas around the tumor and the
            patient&apos;s ability to speak is tested. If language restrictions
            (word-finding disorders, etc.) become audible, the surgeon knows
            that the area just stimulated is important for the ability to speak.
            This is where the problem comes in - in order to mark this area, the
            position must now be recorded by hand and e.g. marked on the brain
            with a piece of sterile paper. As the operation progresses, these
            pieces of paper can slip and have to be repositioned, which is
            time-consuming. In order to overcome this hurdle, augmented reality
            is to be used for marking in the future - by simply digitally
            &quot;drawing&quot; the places on the brain. Together with the doctors and
            researchers of the university hospital, we are working on solutions
            like these to improve the work of the doctors and the experience of
            the patients through augmented reality.
          </p>
        </>
      ),
      shortDescription:
        "Soon with AR glasses instead of a stethoscope - how surgery could look like in the future with augmented reality.",
      image: "/images/blog/augmented-reality-op.png",
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
