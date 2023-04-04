import Head from "next/head";
import { useRouter } from "next/router";
import BlogOverview from "../../components/BlogOverview";
import MenuPlaceholder from "../../components/MenuPlaceholder";
import styles from "../../styles/Blog.module.scss";
import { getTexts as post1Texts } from "./Backend-As-A-Service";
import { getTexts as post2Texts } from "./Flutter-App-Entwicklung";
import { getTexts as post3Texts } from "./Augmented-Reality-Branchen";

export default function BlogEntryPage() {
  const router = useRouter();

  let texts = {
    title: "Blog - M-to-B",
    desctiption:
      "Hier findest du Posts über neue Technologie-Trends rund um App-Entwicklung und Augmented Reality",
  };

  if (router.locale == "en") {
    texts = {
      title: "Blog - M-to-B",
      desctiption:
        "Here you will find posts about new technology trends related to app development and augmented reality",
    };
  }

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="de" href={"https://m-to-b.com/Blog"} />
        <link
          rel="alternate"
          hrefLang="en"
          href={"https://m-to-b.com/en/Blog"}
        />
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.desctiption} />
      </Head>
      <main>
        <MenuPlaceholder />
        <div className={styles.content}>
          <BlogOverview
            title={post3Texts(router.locale).title}
            headline={post3Texts(router.locale).headline}
            shortDescription={post3Texts(router.locale).shortDescription}
            image={post3Texts(router.locale).image}
          />
          <BlogOverview
            title={post2Texts(router.locale).title}
            headline={post2Texts(router.locale).headline}
            shortDescription={post2Texts(router.locale).shortDescription}
            image={post2Texts(router.locale).image}
          />
          <BlogOverview
            title={post1Texts(router.locale).title}
            headline={post1Texts(router.locale).headline}
            shortDescription={post1Texts(router.locale).shortDescription}
            image={post1Texts(router.locale).image}
          />
        </div>
      </main>
    </>
  );
}
