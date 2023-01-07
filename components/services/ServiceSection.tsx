import serviceSectionStyles from "../../styles/services/ServiceSection.module.scss";
import React, { useState, useEffect, MutableRefObject, useRef } from "react";
import Image from "next/image";
import TypeWriter from "../TypeWriter";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Typed from "typed.js";
import { usePrevious } from "../../hooks/UsePrevious";

type Props = {
  headline : string,
  image: string,
  imageAlt: string,
  text: ReactJSXElement,
  sectionRef?: MutableRefObject<null>,
  typewriterKey: string,
}

const ServiceSection = ((props : Props) => {
  const [active, setActive] = useState(false);
  const typed = useRef<Typed | undefined>();
  const [refresh, setRefresh] = useState(0)

  const centerPos = (element : HTMLElement) =>
    element.getBoundingClientRect().top +
    window.scrollY +
    window.innerHeight * 0.5;
  
  const prevHeadline = usePrevious(props.headline);

  useEffect(() => {
    setRefresh((prev) => prev + 1)  
  }, [props.headline])

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (props.sectionRef && props.sectionRef.current && centerPos(props.sectionRef.current) < scrollPosition) {
        setActive(true)
        typed.current?.start()
      }
    };

    onScroll()

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
            <h2 style={{whiteSpace: "pre-wrap"}}>
              <TypeWriter typewriterKey={props.typewriterKey} typed={typed} refresh={refresh}>
                <span>{props.headline}</span>
              </TypeWriter>
            </h2>
            {props.text}
          </div>
        </div>
      </article>
  );
})

export default ServiceSection;