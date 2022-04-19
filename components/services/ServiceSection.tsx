import serviceSectionStyles from "../../styles/services/ServiceSection.module.scss";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function WebdesignSection(props) {
  const [active, setActive] = useState(false);
  const [typewriterList, addTypewriter] = useState<TypewriterClass[]>([]);
  const [typewriterPlaceholder, setTypewriterPlaceholder] = useState(
    props.headline
  );
  const serviceSectionRef = useRef<HTMLElement>(null);

  const centerPos = (element) => element.offsetTop + window.innerHeight * 0.5;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (centerPos(serviceSectionRef.current) < scrollPosition) {
        setActive(true);
        typewriterList.forEach((typewriter) => typewriter.start());
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [typewriterList]);

  return (
    <>
      <section
        ref={serviceSectionRef}
        className={
          serviceSectionStyles.serviceSection +
          " " +
          (active ? serviceSectionStyles.active : "")
        }
      >
        <div className={serviceSectionStyles.flexCell}>
          <div className={serviceSectionStyles.text}>
            <h2>
              {typewriterPlaceholder}
              <Typewriter
                onInit={(typewriter) => {
                  setTypewriterPlaceholder("");
                  typewriter.typeString(props.headline);
                  addTypewriter((state) => [...state, typewriter]);
                  if (
                    centerPos(serviceSectionRef.current) <
                    window.scrollY + window.innerHeight
                  ) {
                    typewriter.start();
                  }
                }}
              />
            </h2>
            {props.text}
          </div>
        </div>
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
      </section>
    </>
  );
}
