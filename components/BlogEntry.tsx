import blogEntryStyles from "../styles/BlogEntry.module.scss";
import React from "react";
import MenuPlaceholder from "./utility/MenuPlaceholder";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  headline: string;
  content: JSX.Element;
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
      <article className={blogEntryStyles.blogEntry}>
        <div className={blogEntryStyles.content}>
          <Image
            src={props.image}
            alt={blogEntryStyles.title}
            width={200}
            height={100}
            objectFit={"cover"}
            objectPosition={"center"}
            layout={"responsive"}
          />
          <div className={blogEntryStyles.text}>
            <h1>{props.headline}</h1>
            {props.content}

            <div className={blogEntryStyles.cta}>
              <h2>{texts.questions}</h2>
              <Link href="/">
                <a>
                  <button className="bounce">
                    <div>{texts.askExperts}</div>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogEntry;
