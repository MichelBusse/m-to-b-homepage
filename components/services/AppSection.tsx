import serviceSectionStyles from "../../styles/services/ServiceSection.module.scss";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { useState, useEffect, useRef } from "react";
import ServiceStandardImage from "./ServiceStandardImage";
import Image from "next/image";

export default function AppSection(props) {
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
          <div className={serviceSectionStyles.image}>
            <Image
              src="/images/Softwareentwicklung/smartphone.png"
              width={500}
              height={500}
              alt="App-Enticklung"
            />
          </div>
        </div>
        <div className={serviceSectionStyles.flexCell}>
          <div className={serviceSectionStyles.text}>
            <h2>
              {typewriterPlaceholder}
              <Typewriter
                onInit={(typewriter) => {
                  setTypewriterPlaceholder("");
                  typewriter.typeString("Mobile App-Entwicklung");
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
            <p style={{ transitionDelay: "0.3s" }} key={1}>
              Von der Idee bis zum Upload in den App Store führen wir Ihre App
              durch den Entwicklungsprozess und zum Erfolg. Mit Erfahrung in der
              Cross-Platform und nativen Entwicklung für Android und IOS können
              wir Ihre Anforderungen effizient und modern implementieren. Dabei
              legen wir auf verlässliche Funktionen genauso viel Wert wie auf
              ein überzeugendes und nutzbares UI-Design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
