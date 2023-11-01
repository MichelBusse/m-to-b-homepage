import serviceSectionStyles from "../../styles/ServiceSection.module.scss";
import React, { useState, useEffect, MutableRefObject, useRef } from "react";
import Image from "next/image";
import TypeWriter from "./TypeWriter";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Typed from "typed.js";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  headline: string;
  image: string;
  imageAlt: string;
  text: ReactJSXElement;
  sectionRef?: MutableRefObject<null>;
  typewriterKey: string;
  siteLink?: string;
  buttonDelay?: string;
};

const TextSection = (props: Props) => {
  const [active, setActive] = useState(false);
  const typed = useRef<Typed | undefined>();
  const [refresh, setRefresh] = useState(0);
  const router = useRouter();

  let texts = {
    viewMore: "Mehr erfahren",
  };

  if (router.locale == "en") {
    texts = {
      viewMore: "Discover more",
    };
  }

  const centerPos = (element: HTMLElement) =>
    element.getBoundingClientRect().top +
    window.scrollY +
    window.innerHeight * 0.5;

  useEffect(() => {
    setRefresh((prev) => prev + 1);
  }, [props.headline]);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (
        props.sectionRef &&
        props.sectionRef.current &&
        centerPos(props.sectionRef.current) < scrollPosition
      ) {
        setActive(true);
        typed.current?.start();
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [props.sectionRef]);

  return (
    <article
      ref={props.sectionRef}
      className={
        serviceSectionStyles.serviceSection +
        " " +
        (active ? serviceSectionStyles.active : "")
      }
    >
      <div className={serviceSectionStyles.flexCell}>
        <div className={serviceSectionStyles.image}>
          <Image
            src={props.image}
            width={500}
            height={500}
            alt={props.imageAlt}
          />
        </div>
      </div>
      <div className={serviceSectionStyles.flexCell}>
        <div className={serviceSectionStyles.text}>
          <h2 style={{ whiteSpace: "pre-wrap" }}>
            <TypeWriter
              typewriterKey={props.typewriterKey}
              typed={typed}
              refresh={refresh}
            >
              <span>{props.headline}</span>
            </TypeWriter>
          </h2>
          {props.text}
          {props.siteLink && (
            <Link href={props.siteLink} passHref>
              <button
                className={`bounce`}
                style={{ transitionDelay: props.buttonDelay ?? "0.6s" }}
              >
                <div>{texts.viewMore}</div>
              </button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default TextSection;
