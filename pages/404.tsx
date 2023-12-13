import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/NotFoundPage.module.scss";
import Image from "next/image";
import MenuPlaceholder from "../components/utility/MenuPlaceholder";
import Link from "next/link";

export const config = {
  unstable_runtimeJS: false,
};

export default function NotFoundPage() {
  const router = useRouter();

  let texts = {
    title: "404: Seite konnte nicht gefunden werden",
    description: "Seite konnte nicht gefunden werden",
  };

  if (router.locale == "en") {
    texts = {
      title: "404: This page could not be found",
      description: "This page could not be found",
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
          <div className={styles.imageWrapper}>
            <Image
              src="/images/notfound.png"
              alt={texts.title}
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <h2>{texts.title}</h2>
        </section>
      </div>
    </>
  );
}
