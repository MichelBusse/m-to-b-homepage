import Head from "next/head";
import { useRouter } from "next/router";
import BlogOverview from "../../components/BlogOverview";
import MenuPlaceholder from "../../components/MenuPlaceholder";
import styles from "../../styles/Blog.module.scss";
import { getTexts } from "./Backend-As-A-Service";

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
            title={getTexts(router.locale).title}
            headline={getTexts(router.locale).headline}
            shortDescription={getTexts(router.locale).shortDescription}
            image={getTexts(router.locale).image}
          />
        </div>
      </main>
    </>
  );
}
