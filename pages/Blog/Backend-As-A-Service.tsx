import Head from "next/head";
import { useRouter } from "next/router";
import BlogEntry from "../../components/BlogEntry";

export function getTexts(lan: string | undefined) {
  let texts = {
    title: "Backend-As-A-Service",
    headline: "Was ist Backend-As-A-Service (BaaS)?",
    content: (
      <>
        <p>
          So wie viele App-Entwickler müssen wir uns regelmäßig mit der Frage
          beschäftigen, welches Backend für unsere Anwendungen das jeweils
          Passende ist. Dabei besteht die Hauptauswahl zwischen zwei
          Alternativen: Ein klassischer Server oder eine
          Backend-As-A-Service-Lösung.
          <br />
          Während man bei einem klassischen Server die vollkommene Kontrolle
          über alle Verbindungen bis ins kleinste Detail hat, bietet letzteres
          den Vorteil, dass man sich eben nicht um die Standardfunktionen, wie
          Authentifizierung, Sicherheit, Datenbankanbindung und
          Serverinfrastruktur kümmern muss. Bei Backend-As-A-Service verwendet
          man eine fertige Plattform, die alle wichtigen Funktionen bereits
          implementiert hat. So kann man sich direkt mit den tatsächlichen
          App-Features beschäftigen und spart sich den administrativen Aufwand
          außenrum.
        </p>

        <p>
          Die verbreitetste Backend-As-A-Service-Lösung ist Google Firebase,
          eine ausgereifte Plattform, die mächtige Funktionen in fast allen
          Bereichen bietet (A/B Testing, Datenbanken, Push-Notifications, Cloud
          Functions, …). Firebase kommt mit einem Pay-As-You-Go-Preissystem. Das
          bedeutet, es bietet sehr günstige Einstiegspreise und wird dann mit
          steigendem Volumen teurer. Zu beachten ist, dass Firebase nicht
          Open-Source ist, nicht selbst gehostet werden kann und ein späterer
          Datenexport häufig sehr aufwändig sein kann (nicht zuletzt durch das
          Firebase-exklusive Datenbanksystem).
        </p>

        <p>
          Als Alternative zu Firebase haben wir deshalb bereits mit den
          Plattformen Appwrite und Supabase gearbeitet. Beides sind
          Open-Source-Projekte, die in Konkurrenz zu Firebase ziehen, aber beide
          sind auch noch aktiv in Entwicklung. Während sich Appwrite eher für
          simplere Anwendungen eignet, da hier vor allem die
          Berechtigungs-Einstellungen nur sehr oberflächlich sind, bietet
          Supabase schon eine echte Alternative zu Googles Firebase.
          <br />
          Wir konnten schon ganze Apps mit Supabase realisieren und waren
          begeistert von den vielen Möglichkeiten, die trotz seiner Neuheit
          schon vorhanden sind. Mit Authentifizierung, einem
          PostreSQL-Datenbanksystem, Cloud Funktionen und Echtzeit-Übertragungen
          bietet Supabase bereits alle Features, die für die App-Entwicklung
          nötig sind.
          <br />
          Doch auch hier muss erwähnt werden, dass Supabase mit steigenden
          Kapazitäten mehr Serverressourcen und somit steigende Kosten
          verursacht. Welche Plattform bei hohem Volumen die wie sich Supabase
          dann tatsächlich mit hunderttausenden Nutzern schlägt, bleibt
          abzuwarten, da hier noch die nötigen Referenz-Projekte fehlen.
        </p>

        <p>
          Schlussendlich bleibt die Entscheidung, welches Backend man für seine
          App verwendet. Wirklich etwas falsch machen wird man weder mit
          Firebase noch mit Supabase. Hier bleibt nur die Wahl ob man den Fokus
          auf ein ausgereiftes und bewährtes System, oder eine höhere
          Flexibilität legen möchte. 🚀
        </p>
      </>
    ),
    shortDescription:
      "Als Backend-As-A-Service (BaaS) werden Cloud-Lösungen bezeichnet, die den typischen Administrationsaufwand minimieren und so den Entwicklungsprozess beschleunigen können.",
    image: "/images/blog/backend-as-a-service.png",
  };

  if (lan == "en") {
    texts = {
      title: "Backend-As-A-Service",
      headline: "What is Backend-as-a-Service (BaaS)?",
      content: (
        <>
          <p>
            Like many app developers, we regularly have to deal with the
            question of which backend is the right one for our applications. The
            main choice is between two alternatives: a classic server or a
            backend-as-a-service solution. <br /> While with a classic server
            you have complete control over all connections down to the smallest
            detail, the latter offers the advantage that you don&apos;t have to
            worry about standard functions such as authentication, security,
            database connection and server infrastructure. With
            Backend-As-A-Service you use a ready-made platform that has already
            implemented all important functions. In this way, you can deal
            directly with the actual app features and save yourself the
            administrative effort on the outside.
          </p>
          <p>
            The most common backend-as-a-service solution is Google Firebase, a
            mature platform that offers powerful functions in almost all areas
            (A/B testing, databases, push notifications, cloud functions, ... ).
            Firebase comes with a pay-as-you-go pricing system. That means it
            offers very cheap entry-level prices and then gets more expensive as
            volume increases. It should be noted that Firebase is not open
            source, cannot be self-hosted and later data export can often be
            very time-consuming (not least due to the Firebase-exclusive
            database system).
          </p>
          <p>
            As an alternative to Firebase, we have therefore already worked with
            the platforms Appwrite and Supabase. Both are open source projects
            that compete with Firebase, but both are also still actively
            developing. While Appwrite is more suitable for simpler
            applications, since the authorization settings are only very
            superficial, Supabase offers a real alternative to Google&apos;s
            Firebase. <br /> We have already been able to implement entire apps
            with Supabase and were enthusiastic about the many possibilities
            that are already available despite its novelty. With authentication,
            a PostreSQL database system, cloud functions and real-time
            transfers, Supabase already offers all the features required for app
            development. <br /> But it must also be mentioned here that Supabase
            causes more server resources and thus increasing costs with
            increasing capacities. It remains to be seen which high-volume
            platform like Supabase will actually do with hundreds of thousands
            of users, as the necessary reference projects are still missing.
          </p>
          <p>
            Ultimately, the decision remains as to which backend to use for your
            app. You won&apos;t really go wrong with either Firebase or
            Supabase. The only choice here is whether you want to focus on a
            mature and proven system or on greater flexibility. 🚀
          </p>
        </>
      ),
      shortDescription:
        "Backend-As-A-Service (BaaS) refers to cloud solutions that minimize the typical administration effort and can thus speed up the development process.",
      image: "/images/blog/backend-as-a-service.png",
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
        <title key="title">
          {texts.headline + " - M-to-B"}
        </title>
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
