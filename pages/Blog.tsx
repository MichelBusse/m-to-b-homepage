import Head from "next/head";
import { useRouter } from "next/router";
import BlogOverview from "../components/BlogOverview";
import MenuPlaceholder from "../components/utility/MenuPlaceholder";
import styles from "../styles/Blog.module.scss";
import { useEffect } from "react";
import { getSortedPostsData } from "../lib/posts";

type Props = {
  allPostsData : any
};

export default function BlogEntryPage(props : Props) {
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

  useEffect(() => {

  }, []);

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
          {props.allPostsData.map((data : any) => <BlogOverview
            id={data.id}
            title={data.title}
            description={data.description}
            image={data.image}
            key={data.id}
          />)};
        </div>
      </main>
    </>
  );
}


export async function getStaticProps({locale} : {locale : any}) {
  const allPostsData = getSortedPostsData(locale);
  return {
    props: {
      allPostsData,
    },
  };
}