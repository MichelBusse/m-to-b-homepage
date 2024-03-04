import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/NotFoundPage.module.scss";
import MenuPlaceholder from "@/components/MenuPlaceholder";

export const config = {
  unstable_runtimeJS: false,
};

export default function NotFoundPage() {
  const router = useRouter();

  let texts = {
    title: "404: Das ist nicht die Seite, die ihr sucht...",
    description: "Das ist nicht die Seite, die ihr sucht...",
  };

  if (router.locale == "en") {
    texts = {
      title: "404: This is not the site you're looking for...",
      description: "This is not the site you're looking for...",
    };
  }
  return (
    <>
      <Head>
        <title key="title">{texts.title}</title>
        <meta name="description" content={texts.description} />
      </Head>
      <MenuPlaceholder />
      <div className={styles.wrapper}>
        <section>
          <h2>{texts.title}</h2>
        </section>
      </div>
    </>
  );
}
