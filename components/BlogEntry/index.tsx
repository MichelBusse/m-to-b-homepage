import styles from "./styles.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuPlaceholder from "../MenuPlaceholder";

type Props = {
  title: string;
  content: string;
  image: string;
};

const BlogEntry = (props: Props) => {
  const router = useRouter();

  let texts = {
    questions: "Noch Fragen?",
    askExperts: "Sprich mit unseren Experten",
  };

  if (router.locale == "en") {
    texts = {
      questions: "Questions left?",
      askExperts: "Talk with our Experts",
    };
  }

  return (
    <>
      <MenuPlaceholder />
      <article className={styles.blogEntry}>
        <div className={styles.content}>
          <Image
            src={props.image}
            alt={styles.title}
            width={600}
            height={300}
          />
          <div className={styles.text}>
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.content}}></div>
            <div className={styles.cta}>
              <h2>{texts.questions}</h2>
              <Link href="/">
                  <button className="bounce">
                    <div>{texts.askExperts}</div>
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogEntry;
