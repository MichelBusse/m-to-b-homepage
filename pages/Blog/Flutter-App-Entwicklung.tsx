import Head from "next/head";
import { useRouter } from "next/router";
import BlogEntry from "../../components/BlogEntry";

export function getTexts(lan: string | undefined) {
  let texts = {
    title: "Flutter-App-Entwicklung",
    headline: "App Entwicklung mit Flutter",
    content: (
      <>
        <p>
          Als App-Agentur sind wir ständig auf der Suche nach neuen Technologien
          und Methoden, um die Entwicklung von Apps zu optimieren und unseren
          Kunden die bestmöglichen Lösungen zu bieten. Eine dieser Technologien,
          die wir in den letzten Jahren verstärkt nutzen, ist Flutter.
        </p>
        <p>
          Flutter ist ein von Google entwickeltes Open-Source-Framework, das auf
          der Programmiersprache Dart basiert. Mit Flutter können Entwickler
          plattformübergreifende Apps für iOS, Android und sogar das Web
          erstellen. Eines der größten Vorteile von Flutter ist die effiziente
          Entwicklung von Apps durch die Verwendung eines einzigen Code-Sets für
          alle Plattformen.
        </p>
        <p>
          Ein weiterer Vorteil von Flutter ist die Hot-Reload-Funktion, mit der
          Entwickler Änderungen in Echtzeit sehen können, was die
          Entwicklungszeit verkürzt und die Produktivität steigert. Darüber
          hinaus bietet Flutter eine große Auswahl an vorgefertigten Widgets,
          die es Entwicklern ermöglichen, schnell und einfach ansprechende und
          benutzerfreundliche Apps zu erstellen.
        </p>

        <p>
          Wir haben bei unserer Agentur Flutter erfolgreich eingesetzt, um
          plattformübergreifende Apps für unsere Kunden zu entwickeln. Durch die
          Verwendung eines einzigen Code-Sets können wir die Entwicklungszeit
          und -kosten reduzieren und gleichzeitig eine qualitativ hochwertige
          App auf allen Plattformen liefern.
        </p>
        <p>
          Wir empfehlen unseren Kunden, die App Entwicklung mit Flutter in
          Erwägung zu ziehen, wenn sie eine plattformübergreifende App
          benötigen. Flutter bietet nicht nur eine schnelle Entwicklung und eine
          bessere Benutzererfahrung, sondern auch eine große Community von
          Entwicklern und Unterstützern, die ständig neue Tools und Ressourcen
          entwickeln und teilen.
        </p>
        <p>
          Bei der Wahl des richtigen Frameworks für die App Entwicklung ist es
          wichtig, die Anforderungen und Ziele des Projekts zu berücksichtigen.
          Wir bei unserer Agentur stehen unseren Kunden gerne zur Verfügung, um
          ihnen bei der Entscheidung zu helfen und sie auf dem Weg zur
          erfolgreichen Entwicklung ihrer App zu unterstützen.
        </p>
        <h2>Fazit</h2>
        <p>
          Flutter ist eine leistungsstarke Technologie für die App Entwicklung,
          die bei unserer Agentur bereits erfolgreich eingesetzt wurde. Durch
          die Verwendung eines einzigen Code-Sets für alle Plattformen können
          wir die Entwicklungszeit und -kosten reduzieren und gleichzeitig eine
          qualitativ hochwertige App auf allen Plattformen liefern. Wir
          empfehlen unseren Kunden, Flutter in Erwägung zu ziehen, wenn sie eine
          plattformübergreifende App benötigen.
        </p>
      </>
    ),
    shortDescription:
      "App Entwicklung mit Flutter - Wie wir bei unserer Agentur die Entwicklung von plattformübergreifenden Apps effizienter gestalten.",
    image: "/images/blog/app-development-with-flutter.png",
  };

  if (lan == "en") {
    texts = {
      title: "Flutter-App-Entwicklung",
      headline: "App Development with Flutter",
      content: (
        <>
          <p>
            As an app agency, we are constantly looking for new technologies and
            methods to optimize app development and offer our customers the best
            possible solutions. One of these technologies that we have been
            using more and more of in recent years is Flutter.
          </p>
          <p>
            Flutter is an open source framework developed by Google and based on
            the Dart programming language. Flutter allows developers to create
            cross-platform apps for iOS, Android, and even the web. One of
            Flutter&apos;s greatest advantages is the efficient development of
            apps by using a single code set for all platforms.
          </p>
          <p>
            Another benefit of Flutter is the hot reload feature, which allows
            developers to see changes in real time, reducing development time
            and increasing productivity. In addition, Flutter offers a wide
            range of pre-built widgets that allow developers to quickly and
            easily create beautiful and user-friendly apps.
          </p>
          <p>
            We have successfully used Flutter at our agency to develop
            cross-platform apps for our clients. By using a single code set, we
            can reduce development time and costs while delivering a high
            quality app across all platforms.
          </p>
          <p>
            We encourage our customers to consider app development with Flutter
            if they need a cross-platform app. Flutter not only offers rapid
            development and better user experience, but also a large community
            of developers and supporters who are constantly developing and
            sharing new tools and resources.
          </p>
          <p>
            When choosing the right framework for app development, it is
            important to consider the needs and goals of the project. At our
            agency, we are always available to our clients to help them make
            their decision and support them on their way to the successful
            development of their app.
          </p>
          <h2>Conclusion</h2>
          <p>
            Flutter is a powerful technology for app development that has
            already been used successfully at our agency. By using a single code
            set for all platforms, we can reduce development time and costs
            while delivering a high quality app across all platforms. We
            encourage our customers to consider Flutter if they need a
            cross-platform app.
          </p>
        </>
      ),
      shortDescription:
        "App development with Flutter - How we make the development of cross-platform apps more efficient at our agency.",
      image: "/images/blog/app-development-with-flutter.png",
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
