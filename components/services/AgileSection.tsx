import { useEffect, useState } from "react";
import styles from "../../styles/services/AgileSection.module.scss";
import { MdPlayArrow } from "react-icons/md";
import { useRouter } from "next/router";

export default function AgileSection() {
  const router = useRouter();

  let texts = {
    headline: <>Agile Software&shy;entwicklung</>,
    descriptions: [
      <>
        <p>
          <MdPlayArrow className={styles.icon} />
          Ausarbeitung der Anforderungen und Technologien
        </p>
      </>,
      <>
        <p>
          <MdPlayArrow className={styles.icon} />
          Planung der Softwarestruktur und Erstellung des UI/UX-Design
        </p>
      </>,
      <>
        <p>
          <MdPlayArrow className={styles.icon} />
          Umsetzung der Anforderungen
        </p>
      </>,
      <>
        <p>
          <MdPlayArrow className={styles.icon} />
          Überprüfung und Bestätigung der Ergebnisse
        </p>
      </>,
      <>
        <p>
          <MdPlayArrow className={styles.icon} />
          Rücksprache im Team bzw. mit dem Kunden
        </p>
      </>,
      <>
        <p>
          <MdPlayArrow className={styles.icon} />
          Support, Behebung von Bugs, Erweiterungen
        </p>
      </>,
    ],
  };

  if (router.locale == "en") {
    texts = {
      headline: <>Agile software development</>,
      descriptions: [
        <>
          <p>
            <MdPlayArrow className={styles.icon} />
            Requirements engineering and decision of technologies
          </p>
        </>,
        <>
          <p>
            <MdPlayArrow className={styles.icon} />
            Planning and organization of the software structure and UI/UX design
          </p>
        </>,
        <>
          <p>
            <MdPlayArrow className={styles.icon} />
            Implementation of all requirements
          </p>
        </>,
        <>
          <p>
            <MdPlayArrow className={styles.icon} />
            Review and validation of all functionalities
          </p>
        </>,
        <>
          <p>
            <MdPlayArrow className={styles.icon} />
            Retrospective with the team and customer
          </p>
        </>,
        <>
          <p>
            <MdPlayArrow className={styles.icon} />
            Support, bug fixing, extensions
          </p>
        </>,
      ],
    };
  }

  const [selected, setSelected] = useState(0);
  const [time, setTime] = useState(Date.now());
  const [interacted, setInteracted] = useState(false);

  const changeSelected = (sel) => {
    setSelected(sel);
    setInteracted(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!interacted) {
        setTime(Date.now());
        setSelected((s) => (s + 1) % 6);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [interacted, time]);

  return (
    <>
      <section className={styles.agileSection}>
        <h2>{texts.headline}</h2>
        <svg
          version="1.1"
          id={styles.flowChart}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 841.9 550.3"
        >
          <g
            className={
              styles.arrowWrapper + " " + (selected === 3 ? styles.active : "")
            }
            onClick={() => changeSelected(3)}
          >
            <g id="arrow4">
              <path
                className={styles.arrow}
                d="M390.1,94.3l38.3,65.4c-24.9-2.9-50,2.3-72.1,15.2c-25.9,15.2-44.6,39.2-52.9,68l-64.1,37.6h0l-22.6-38.7
			l-14.9-25.4c15.4-55.9,51.3-102.7,101.4-132.1c45.7-26.8,98.3-36.2,150-27L390.1,94.3z"
              />
              <path
                className={styles.arrowText}
                d="M197.2,237l37,63.2h0L197.2,237z"
              />
            </g>
            <g>
              <path
                className={styles.arrowText}
                d="M280.2,172.8l-4.1,4.1l11.5,11.5l-1.7,1.7l-11.5-11.5l-4.1,4.1l-1.4-1.4l10-10L280.2,172.8z"
              />
              <path
                className={styles.arrowText}
                d="M296.6,179.7c-1.3,1.3-2.8,1.9-4.4,1.9c-1.7,0-3.2-0.8-4.6-2.2l-0.3-0.3c-1-1-1.6-2-2-3.1s-0.5-2.2-0.2-3.3
			c0.2-1.1,0.7-2,1.5-2.7c1.2-1.2,2.6-1.8,4.1-1.7c1.5,0.1,3,1,4.6,2.5l0.7,0.7l-6.5,6.5c1,0.9,2,1.4,3.1,1.5
			c1.1,0.1,2.1-0.3,2.9-1.1c0.6-0.6,0.9-1.2,1.1-1.8c0.2-0.6,0.2-1.3,0.1-2l1.8-0.2C298.8,176.3,298.2,178.1,296.6,179.7z
			 M287.8,171.3c-0.7,0.7-1,1.5-0.9,2.4c0,0.9,0.4,1.9,1.2,2.9l4.8-4.8l-0.1-0.1c-0.9-0.8-1.7-1.2-2.6-1.3
			C289.3,170.3,288.5,170.6,287.8,171.3z"
              />
              <path
                className={styles.arrowText}
                d="M305.1,165.8c-0.4-0.4-1-0.6-1.5-0.5c-0.6,0.1-1.4,0.5-2.4,1.1c-1,0.7-1.9,1.1-2.6,1.3
			c-0.7,0.2-1.4,0.3-2,0.2c-0.6-0.1-1.1-0.4-1.6-0.9c-0.8-0.8-1.1-1.8-1-3c0.1-1.2,0.7-2.3,1.7-3.4c1.1-1.1,2.2-1.7,3.5-1.8
			c1.2-0.1,2.3,0.3,3.2,1.1l-1.6,1.6c-0.4-0.4-1-0.6-1.7-0.6c-0.7,0.1-1.3,0.4-1.9,1c-0.6,0.6-0.9,1.2-1,1.8
			c-0.1,0.6,0.1,1.1,0.5,1.5c0.4,0.4,0.8,0.5,1.4,0.4c0.5-0.1,1.3-0.5,2.3-1.1c1-0.6,1.9-1.1,2.6-1.3c0.8-0.3,1.4-0.3,2-0.2
			c0.6,0.1,1.2,0.4,1.7,0.9c0.9,0.9,1.2,1.9,1,3.1c-0.2,1.2-0.8,2.3-1.9,3.4c-0.8,0.8-1.6,1.3-2.4,1.6c-0.9,0.3-1.7,0.4-2.5,0.2
			s-1.5-0.5-2.1-1.1l1.6-1.6c0.6,0.5,1.2,0.7,2,0.6c0.7-0.1,1.4-0.5,2.1-1.1c0.6-0.6,1-1.2,1.1-1.9
			C305.6,166.7,305.5,166.2,305.1,165.8z"
              />
              <path
                className={styles.arrowText}
                d="M301.7,150.5l2.3,2.3l1.8-1.8l1.3,1.3l-1.8,1.8l5.9,5.9c0.4,0.4,0.8,0.6,1.1,0.6c0.4,0,0.7-0.1,1.1-0.5
			c0.2-0.2,0.4-0.5,0.7-0.9l1.3,1.3c-0.3,0.5-0.7,1-1.1,1.4c-0.7,0.7-1.5,1.1-2.3,1c-0.8-0.1-1.6-0.5-2.4-1.3l-5.9-5.9l-1.7,1.7
			l-1.3-1.3l1.7-1.7l-2.3-2.3L301.7,150.5z"
              />
              <path
                className={styles.arrowText}
                d="M321.4,154.8c-1.3,1.3-2.8,1.9-4.4,1.9c-1.7,0-3.2-0.8-4.6-2.2l-0.3-0.3c-1-1-1.6-2-2-3.1
			c-0.4-1.1-0.5-2.2-0.2-3.3c0.2-1.1,0.7-2,1.5-2.7c1.2-1.2,2.6-1.8,4.1-1.7c1.5,0.1,3,1,4.6,2.5l0.7,0.7l-6.5,6.5
			c1,0.9,2,1.4,3.1,1.5c1.1,0.1,2.1-0.3,2.9-1.1c0.6-0.6,0.9-1.2,1.1-1.8c0.2-0.6,0.2-1.3,0.1-2l1.8-0.2
			C323.6,151.4,323,153.2,321.4,154.8z M312.6,146.5c-0.7,0.7-1,1.5-0.9,2.4c0,0.9,0.4,1.9,1.2,2.9l4.8-4.8l-0.1-0.1
			c-0.9-0.8-1.7-1.2-2.6-1.3C314.1,145.5,313.3,145.8,312.6,146.5z"
              />
              <path
                className={styles.arrowText}
                d="M318.8,137.9l1.3,1.2c-0.2-1.7,0.3-3.1,1.5-4.2c2-2,4.2-1.9,6.5,0.4l6.3,6.3l-1.6,1.6l-6.3-6.3
			c-0.7-0.7-1.4-1-2-1.1c-0.6,0-1.3,0.3-1.9,0.9c-0.5,0.5-0.9,1.1-1,1.8c-0.1,0.7-0.1,1.4,0.2,2.1l6.8,6.8l-1.6,1.6l-9.6-9.6
			L318.8,137.9z"
              />
            </g>
          </g>
          <g
            className={
              styles.arrowWrapper + " " + (selected === 1 ? styles.active : "")
            }
            onClick={() => changeSelected(1)}
          >
            <g id="arrow2">
              <path
                className={styles.arrow}
                d="M628.3,333.9L628.3,333.9c-5.5,19.9-13.5,38.4-23.7,55.2C569.8,447,510.2,485.6,444,494.4
			c-21.9,2.9-44.4,2.6-67.1-1.4l3.2-1.9l43.8-25.7l16.1-9.4L424,428.5v0l-22.2-37.9c7.4,0.9,14.9,1,22.2,0.5c4.7-0.3,9.3-1,13.9-1.9
			c12.5-2.5,24.6-7.1,36-13.7c25.9-15.2,44.6-39.2,52.9-68l14.2-8.3l49.9-29.2l0,0l0,0L628.3,333.9z"
              />
              <path
                className={styles.arrowText}
                d="M424,428.5l16.1,27.5l0,0L424,428.5z M590.8,269.9l-49.9,29.2L590.8,269.9L590.8,269.9z M596,250.2L596,250.2
			l27.7,47.3L596,250.2z M590.8,269.9l-49.9,29.2L590.8,269.9L590.8,269.9z M424,428.5l16.1,27.5l0,0L424,428.5z M590.8,269.9
			l-49.9,29.2L590.8,269.9L590.8,269.9z M424,428.5l16.1,27.5l0,0L424,428.5z M424,428.5l16.1,27.5l0,0L424,428.5z"
              />
            </g>
            <g>
              <path
                className={styles.arrowText}
                d="M480.4,426.3l14.7,6.3l-6.3-14.7l2.2-2.2l12.9,12.9l-1.7,1.7l-5-5l-5.3-5.6l6.2,14.7l-1.3,1.3l-14.6-6.2
			l5.6,5.2l5,5l-1.7,1.7l-12.9-12.9L480.4,426.3z"
              />
              <path
                className={styles.arrowText}
                d="M501.3,421.4c-0.9-0.9-1.6-2-2-3.1c-0.4-1.1-0.4-2.2-0.2-3.3c0.3-1.1,0.8-2,1.6-2.9c1.3-1.3,2.8-1.9,4.5-1.8
			c1.7,0.1,3.3,0.9,4.8,2.4l0.1,0.1c0.9,0.9,1.6,1.9,2,3c0.4,1.1,0.5,2.2,0.2,3.3c-0.3,1.1-0.8,2-1.7,2.9c-1.3,1.3-2.8,1.9-4.5,1.8
			c-1.7-0.1-3.3-0.9-4.8-2.4L501.3,421.4z M503.1,419.9c1.1,1.1,2.2,1.7,3.3,1.8c1.1,0.2,2.1-0.2,2.9-1c0.8-0.8,1.2-1.8,1-3
			c-0.2-1.1-0.8-2.3-2-3.5c-1-1-2.1-1.7-3.3-1.8c-1.1-0.2-2.1,0.2-3,1c-0.8,0.8-1.1,1.8-1,2.9S501.9,418.7,503.1,419.9z"
              />
              <path
                className={styles.arrowText}
                d="M511.7,411c-1.5-1.5-2.3-3-2.5-4.6c-0.2-1.6,0.3-2.9,1.4-4.1c1.1-1.1,2.4-1.6,3.8-1.5l-5-5l1.6-1.6l13.6,13.6
			l-1.5,1.5l-1.1-0.9c0.1,1.5-0.4,2.8-1.5,3.9c-1.1,1.1-2.5,1.6-4.1,1.3c-1.6-0.2-3.1-1-4.6-2.5L511.7,411z M513.5,409.6
			c1.1,1.1,2.2,1.7,3.2,1.9c1.1,0.2,2-0.1,2.8-0.9c1-1,1.3-2.3,0.9-3.7l-4.4-4.4c-1.4-0.4-2.6-0.1-3.6,0.9c-0.8,0.8-1.1,1.7-0.9,2.8
			C511.6,407.2,512.3,408.4,513.5,409.6z"
              />
              <path
                className={styles.arrowText}
                d="M531.3,401.5c-1.3,1.3-2.8,1.9-4.4,1.9c-1.7,0-3.2-0.8-4.6-2.2l-0.3-0.3c-1-1-1.6-2-2-3.1
			c-0.4-1.1-0.5-2.2-0.2-3.3c0.2-1.1,0.7-2,1.5-2.7c1.2-1.2,2.6-1.8,4.1-1.7c1.5,0.1,3,1,4.6,2.5l0.7,0.7l-6.5,6.5
			c1,0.9,2,1.4,3.1,1.5c1.1,0.1,2.1-0.3,2.9-1.1c0.6-0.6,0.9-1.2,1.1-1.8c0.2-0.6,0.2-1.3,0.1-2l1.8-0.2
			C533.5,398.1,532.9,399.9,531.3,401.5z M522.5,393.1c-0.7,0.7-1,1.5-0.9,2.4c0,0.9,0.4,1.9,1.2,2.9l4.8-4.8l-0.1-0.1
			c-0.9-0.8-1.7-1.2-2.6-1.3C524,392.1,523.2,392.4,522.5,393.1z"
              />
              <path
                className={styles.arrowText}
                d="M538.5,393.9l-1.6,1.6L523.3,382l1.6-1.6L538.5,393.9z"
              />
              <path
                className={styles.arrowText}
                d="M542.9,389.5l-1.6,1.6l-13.6-13.6l1.6-1.6L542.9,389.5z"
              />
              <path
                className={styles.arrowText}
                d="M533.4,374.8c-0.3-0.3-0.4-0.6-0.4-0.9c0-0.3,0.1-0.7,0.4-1s0.7-0.5,1-0.5c0.3,0,0.7,0.2,0.9,0.4
			c0.3,0.3,0.4,0.6,0.4,0.9c0,0.3-0.1,0.7-0.5,1c-0.3,0.3-0.6,0.5-1,0.5C534,375.2,533.7,375,533.4,374.8z M547.3,385.1l-1.6,1.6
			l-9.6-9.6l1.6-1.6L547.3,385.1z"
              />
              <path
                className={styles.arrowText}
                d="M554.1,378.7c-1.3,1.3-2.8,1.9-4.4,1.9c-1.7,0-3.2-0.8-4.6-2.2l-0.3-0.3c-1-1-1.6-2-2-3.1s-0.5-2.2-0.2-3.3
			c0.2-1.1,0.7-2,1.5-2.8c1.2-1.2,2.6-1.8,4.1-1.7c1.5,0.1,3,1,4.6,2.5l0.7,0.7l-6.5,6.5c1,0.9,2,1.4,3.1,1.5
			c1.1,0.1,2.1-0.3,2.9-1.1c0.6-0.6,0.9-1.2,1.1-1.8c0.2-0.6,0.2-1.3,0.1-2l1.8-0.2C556.3,375.3,555.7,377.1,554.1,378.7z
			 M545.3,370.3c-0.7,0.7-1,1.5-0.9,2.4c0,0.9,0.4,1.9,1.2,2.9l4.8-4.8l-0.1-0.1c-0.9-0.8-1.7-1.2-2.6-1.3
			C546.7,369.3,546,369.6,545.3,370.3z"
              />
              <path
                className={styles.arrowText}
                d="M556,360.2c-0.3,0.2-0.6,0.5-0.9,0.7c-1.1,1.1-1.3,2.3-0.8,3.6l6.8,6.8l-1.6,1.6l-9.6-9.6l1.6-1.6l1.1,1.1
			c-0.3-1.4,0-2.6,1-3.6c0.3-0.3,0.6-0.5,0.8-0.6L556,360.2z"
              />
              <path
                className={styles.arrowText}
                d="M569.6,363.1c-1.3,1.3-2.8,1.9-4.4,1.9c-1.7,0-3.2-0.8-4.6-2.2l-0.3-0.3c-0.9-0.9-1.6-2-2-3.1
			c-0.4-1.1-0.5-2.2-0.2-3.3c0.2-1.1,0.7-2,1.5-2.8c1.2-1.2,2.6-1.8,4.1-1.7c1.5,0.1,3,1,4.6,2.5l0.7,0.7l-6.5,6.5
			c1,0.9,2,1.4,3.1,1.5c1.1,0.1,2.1-0.3,2.9-1.1c0.6-0.6,0.9-1.2,1.1-1.8c0.2-0.6,0.2-1.3,0.1-2l1.8-0.2
			C571.8,359.7,571.2,361.5,569.6,363.1z M560.8,354.8c-0.7,0.7-1,1.5-0.9,2.4c0,0.9,0.4,1.9,1.2,2.9l4.8-4.8l-0.1-0.1
			c-0.9-0.8-1.7-1.2-2.6-1.3S561.5,354.1,560.8,354.8z"
              />
              <path
                className={styles.arrowText}
                d="M567.1,346.2l1.3,1.1c-0.2-1.6,0.3-3.1,1.5-4.2c2-2,4.2-1.9,6.5,0.4l6.3,6.3l-1.6,1.6l-6.3-6.3
			c-0.7-0.7-1.4-1-2-1.1c-0.6,0-1.3,0.3-1.9,1c-0.5,0.5-0.9,1.1-1,1.8c-0.1,0.7-0.1,1.4,0.2,2.1l6.8,6.8l-1.6,1.6l-9.6-9.6
			L567.1,346.2z"
              />
            </g>
          </g>
          <g
            className={
              styles.arrowWrapper + " " + (selected === 2 ? styles.active : "")
            }
            onClick={() => changeSelected(2)}
          >
            <g id="arrow3">
              <path
                className={styles.arrow}
                d="M633,313.3l-9.3-15.8L596,250.2l-65.4,38.3c2.9-24.9-2.3-50-15.2-72.1c-15.2-25.9-39.2-44.6-68-52.9
			l-37.6-64.1l64-37.5C584.3,92.3,652.5,202.1,633,313.3z"
              />
              <path
                className={styles.arrowText}
                d="M590.8,269.9L590.8,269.9l37.5,64L590.8,269.9z M390.1,94.3L390.1,94.3l63.2-37L390.1,94.3z"
              />
            </g>
            <g>
              <path
                className={styles.arrowText}
                d="M462.1,108.9l-1.7-1.7l12.9-12.9L475,96L462.1,108.9z"
              />
              <path
                className={styles.arrowText}
                d="M476.1,103.7l-1,1.1c1.5-0.1,2.9,0.4,4.1,1.6c1.3,1.3,1.7,2.8,1.2,4.3c0.8-0.1,1.6-0.1,2.4,0.1
			c0.8,0.2,1.5,0.7,2.2,1.4c2.1,2.1,2.1,4.3-0.1,6.5l-6.4,6.4l-1.6-1.6l6.3-6.3c0.7-0.7,1-1.4,1.1-2c0-0.7-0.3-1.3-1.1-2.1
			c-0.6-0.6-1.3-0.9-2.1-1c-0.8,0-1.5,0.2-2.2,0.8l-6.3,6.3l-1.6-1.6l6.3-6.3c1.4-1.4,1.4-2.8,0-4.1c-1.1-1.1-2.3-1.4-3.6-0.8l-7,7
			l-1.6-1.6l9.6-9.6L476.1,103.7z"
              />
              <path
                className={styles.arrowText}
                d="M493.6,131c-1.5,1.5-3,2.3-4.5,2.5c-1.6,0.2-2.9-0.2-4-1.4c-1.2-1.2-1.7-2.4-1.6-3.8l-4.6,4.6l-1.6-1.6
			l13.2-13.2l1.5,1.5l-1,1.1c1.5-0.2,2.8,0.4,4,1.5c1.1,1.2,1.6,2.5,1.4,4c-0.2,1.5-1.1,3.1-2.6,4.6L493.6,131z M492.2,129.2
			c1.1-1.1,1.7-2.2,1.9-3.2c0.2-1.1-0.2-2-1-2.8c-1-1-2.2-1.3-3.5-0.9l-4.6,4.6c-0.4,1.4-0.1,2.5,0.9,3.6c0.8,0.8,1.7,1.1,2.8,0.9
			C489.8,131.1,490.9,130.4,492.2,129.2z"
              />
              <path
                className={styles.arrowText}
                d="M492.8,139.6l-1.6-1.6l13.6-13.6l1.6,1.6L492.8,139.6z"
              />
              <path
                className={styles.arrowText}
                d="M499.2,146.3c-1.3-1.3-1.9-2.8-1.9-4.4c0-1.7,0.8-3.2,2.2-4.6l0.3-0.3c0.9-0.9,2-1.6,3.1-2
			c1.1-0.4,2.2-0.5,3.3-0.2c1.1,0.2,2,0.7,2.7,1.5c1.2,1.2,1.8,2.6,1.7,4.1c-0.1,1.5-1,3-2.5,4.6l-0.7,0.7l-6.5-6.5
			c-0.9,1-1.4,2-1.5,3.1c-0.1,1.1,0.3,2.1,1.1,2.9c0.6,0.6,1.2,0.9,1.8,1.1c0.6,0.2,1.3,0.2,2,0.1l0.2,1.8
			C502.6,148.5,500.8,147.9,499.2,146.3z M507.6,137.6c-0.7-0.7-1.5-1-2.4-0.9c-0.9,0-1.9,0.4-2.9,1.2l4.8,4.8l0.1-0.1
			c0.8-0.9,1.2-1.7,1.3-2.6C508.6,139,508.3,138.2,507.6,137.6z"
              />
              <path
                className={styles.arrowText}
                d="M516.1,143.8l-1,1.1c1.5-0.1,2.9,0.4,4.1,1.6c1.3,1.3,1.7,2.8,1.2,4.3c0.8-0.1,1.6-0.1,2.4,0.1
			c0.8,0.2,1.5,0.7,2.2,1.4c2.1,2.1,2.1,4.3-0.1,6.5l-6.4,6.4l-1.6-1.6l6.3-6.3c0.7-0.7,1-1.4,1.1-2c0-0.7-0.3-1.3-1.1-2.1
			c-0.6-0.6-1.3-0.9-2.1-1c-0.8,0-1.5,0.2-2.2,0.8l-6.3,6.3l-1.6-1.6l6.3-6.3c1.4-1.4,1.4-2.8,0-4.1c-1.1-1.1-2.3-1.3-3.6-0.8l-7,7
			l-1.6-1.6l9.6-9.6L516.1,143.8z"
              />
              <path
                className={styles.arrowText}
                d="M524.7,171.8c-1.3-1.3-1.9-2.8-1.9-4.4c0-1.7,0.8-3.2,2.2-4.6l0.3-0.3c0.9-0.9,2-1.6,3.1-2
			c1.1-0.4,2.2-0.5,3.3-0.2c1.1,0.2,2,0.7,2.7,1.5c1.2,1.2,1.8,2.6,1.7,4.1c-0.1,1.5-1,3-2.5,4.6l-0.7,0.7l-6.5-6.5
			c-0.9,1-1.4,2-1.5,3.1c-0.1,1.1,0.3,2.1,1.1,2.9c0.6,0.6,1.2,0.9,1.8,1.1c0.6,0.2,1.3,0.2,2,0.1l0.2,1.8
			C528.1,174,526.3,173.4,524.7,171.8z M533,163c-0.7-0.7-1.5-1-2.4-0.9s-1.9,0.4-2.9,1.2l4.8,4.8l0.1-0.1c0.8-0.9,1.2-1.7,1.3-2.6
			C534,164.5,533.7,163.7,533,163z"
              />
              <path
                className={styles.arrowText}
                d="M541.6,169.2l-1.2,1.3c1.6-0.2,3.1,0.3,4.2,1.5c2,2,1.9,4.2-0.4,6.5l-6.3,6.3l-1.6-1.6l6.3-6.3
			c0.7-0.7,1-1.4,1.1-2c0-0.6-0.3-1.3-1-1.9c-0.5-0.5-1.1-0.9-1.8-1c-0.7-0.1-1.4-0.1-2.1,0.2l-6.8,6.8l-1.6-1.6l9.6-9.6
			L541.6,169.2z"
              />
              <path
                className={styles.arrowText}
                d="M554.6,177.6l-2.3,2.3l1.8,1.8l-1.3,1.3l-1.8-1.8l-5.9,5.9c-0.4,0.4-0.6,0.8-0.6,1.1c0,0.4,0.1,0.7,0.5,1.1
			c0.2,0.2,0.5,0.4,0.9,0.7l-1.3,1.3c-0.5-0.3-1-0.7-1.4-1.1c-0.7-0.7-1.1-1.5-1-2.3c0.1-0.8,0.5-1.6,1.3-2.4l5.9-5.9l-1.7-1.7
			l1.3-1.3l1.7,1.7l2.3-2.3L554.6,177.6z"
              />
              <path
                className={styles.arrowText}
                d="M548.1,194.9l-1.6-1.6l9.6-9.6l1.6,1.6L548.1,194.9z M558.5,181.1c0.3-0.3,0.6-0.4,0.9-0.4
			c0.3,0,0.7,0.1,1,0.4c0.3,0.3,0.5,0.7,0.5,1c0,0.3-0.2,0.7-0.4,0.9c-0.3,0.3-0.6,0.4-0.9,0.4c-0.3,0-0.7-0.1-1-0.5s-0.5-0.6-0.5-1
			C558.1,181.6,558.2,181.3,558.5,181.1z"
              />
              <path
                className={styles.arrowText}
                d="M554.6,201.7c-1.3-1.3-1.9-2.8-1.9-4.4c0-1.7,0.8-3.2,2.2-4.6l0.3-0.3c0.9-0.9,2-1.6,3.1-2
			c1.1-0.4,2.2-0.5,3.3-0.2c1.1,0.2,2,0.7,2.7,1.5c1.2,1.2,1.8,2.6,1.7,4.1c-0.1,1.5-1,3-2.5,4.6l-0.7,0.7l-6.5-6.5
			c-0.9,1-1.4,2-1.5,3.1c-0.1,1.1,0.3,2.1,1.1,2.9c0.6,0.6,1.2,0.9,1.8,1.1c0.6,0.2,1.3,0.2,2,0.1l0.2,1.8
			C558,203.9,556.2,203.3,554.6,201.7z M562.9,192.9c-0.7-0.7-1.5-1-2.4-0.9s-1.9,0.4-2.9,1.2l4.8,4.8l0.1-0.1
			c0.8-0.9,1.2-1.7,1.3-2.6C563.9,194.4,563.6,193.6,562.9,192.9z"
              />
              <path
                className={styles.arrowText}
                d="M573.1,203.7c-0.2-0.3-0.5-0.6-0.7-0.9c-1.1-1.1-2.3-1.3-3.6-0.8l-6.8,6.8l-1.6-1.6l9.6-9.6l1.6,1.6l-1.1,1.1
			c1.4-0.3,2.6,0,3.6,1c0.3,0.3,0.5,0.6,0.6,0.9L573.1,203.7z"
              />
              <path
                className={styles.arrowText}
                d="M570.1,217.2c-1.3-1.3-1.9-2.8-1.9-4.4c0-1.7,0.8-3.2,2.2-4.6l0.3-0.3c0.9-0.9,2-1.6,3.1-2
			c1.1-0.4,2.2-0.5,3.3-0.2c1.1,0.2,2,0.7,2.7,1.5c1.2,1.2,1.8,2.6,1.7,4.1c-0.1,1.5-1,3-2.5,4.6l-0.7,0.7l-6.5-6.5
			c-0.9,1-1.4,2-1.5,3.1c-0.1,1.1,0.3,2.1,1.1,2.9c0.6,0.6,1.2,0.9,1.8,1.1c0.6,0.2,1.3,0.2,2,0.1l0.2,1.8
			C573.5,219.4,571.7,218.8,570.1,217.2z M578.5,208.5c-0.7-0.7-1.5-1-2.4-0.9c-0.9,0-1.9,0.4-2.9,1.2l4.8,4.8l0.1-0.1
			c0.8-0.9,1.2-1.7,1.3-2.6S579.2,209.1,578.5,208.5z"
              />
              <path
                className={styles.arrowText}
                d="M587,214.7l-1.2,1.3c1.7-0.2,3.1,0.3,4.2,1.5c2,2,1.9,4.2-0.4,6.5l-6.3,6.3l-1.6-1.6l6.3-6.3
			c0.7-0.7,1-1.4,1.1-2c0-0.6-0.3-1.3-1-1.9c-0.5-0.5-1.1-0.9-1.8-1c-0.7-0.1-1.4-0.1-2.1,0.2l-6.8,6.8l-1.6-1.6l9.6-9.6L587,214.7z
			"
              />
            </g>
          </g>
          <g
            className={
              styles.arrowWrapper + " " + (selected === 4 ? styles.active : "")
            }
            onClick={() => changeSelected(4)}
          >
            <g id="arrow5">
              <path
                className={styles.arrow}
                d="M420.4,450.9L420.4,450.9l-56.2,32.9v0l-7.8,4.6c-56.8-15.6-102.4-52.2-130.6-99.2
			c-26.7-44.4-38-98.1-28.5-152.2l37,63.2l65.4-38.3c-6.5,55.6,28.2,109.1,83.2,125l5,8.5L420.4,450.9z"
              />
              <path
                className={styles.arrowText}
                d="M216.7,241.8l22.6,38.7h0L216.7,241.8z M387.8,395.3l32.5,55.6l0,0L387.8,395.3z M440.1,456l-16.1,9.4
			l-43.8,25.7l43.8-25.6L440.1,456L440.1,456z M387.8,395.3l32.5,55.6l0,0L387.8,395.3z M387.8,395.3l32.5,55.6l0,0L387.8,395.3z"
              />
            </g>
            <g>
              <path
                className={styles.arrowText}
                d="M277.3,354.9l-6.3,14.7l14.7-6.3l2.2,2.2l-12.9,12.9l-1.7-1.7l5-5l5.6-5.3l-14.7,6.2l-1.3-1.3l6.2-14.6
			l-5.2,5.6l-5,5l-1.7-1.7l12.9-12.9L277.3,354.9z"
              />
              <path
                className={styles.arrowText}
                d="M281.6,385.2c-1.3-1.3-1.9-2.8-1.9-4.4c0-1.7,0.8-3.2,2.2-4.6l0.3-0.3c0.9-1,2-1.6,3.1-2
			c1.1-0.4,2.2-0.5,3.3-0.2c1.1,0.2,2,0.7,2.8,1.5c1.2,1.2,1.8,2.6,1.7,4.1c-0.1,1.5-1,3-2.5,4.6l-0.7,0.7l-6.5-6.5
			c-0.9,1-1.4,2-1.5,3.1c-0.1,1.1,0.3,2.1,1.1,2.9c0.6,0.6,1.2,0.9,1.8,1.1c0.6,0.2,1.3,0.2,2,0.1l0.2,1.8
			C285,387.4,283.2,386.8,281.6,385.2z M290,376.5c-0.7-0.7-1.5-1-2.4-0.9c-0.9,0-1.9,0.4-2.9,1.2l4.8,4.8l0.1-0.1
			c0.8-0.9,1.2-1.7,1.3-2.6C291,377.9,290.7,377.1,290,376.5z"
              />
              <path
                className={styles.arrowText}
                d="M291.2,394.8c-1.3-1.3-1.9-2.8-1.9-4.4c0-1.7,0.8-3.2,2.2-4.6l0.3-0.3c0.9-1,2-1.6,3.1-2
			c1.1-0.4,2.2-0.5,3.3-0.2c1.1,0.2,2,0.7,2.8,1.5c1.2,1.2,1.8,2.6,1.7,4.1c-0.1,1.5-1,3-2.5,4.6l-0.7,0.7l-6.5-6.5
			c-0.9,1-1.4,2-1.5,3.1c-0.1,1.1,0.3,2.1,1.1,2.9c0.6,0.6,1.2,0.9,1.8,1.1c0.6,0.2,1.3,0.2,2,0.1l0.2,1.8
			C294.6,397,292.8,396.4,291.2,394.8z M299.6,386.1c-0.7-0.7-1.5-1-2.4-0.9c-0.9,0-1.9,0.4-2.9,1.2l4.8,4.8l0.1-0.1
			c0.8-0.9,1.2-1.7,1.3-2.6C300.6,387.5,300.3,386.7,299.6,386.1z"
              />
              <path
                className={styles.arrowText}
                d="M311.1,390.6l-2.3,2.3l1.8,1.8l-1.3,1.3l-1.8-1.8l-5.9,5.9c-0.4,0.4-0.6,0.7-0.6,1.1c0,0.4,0.1,0.7,0.5,1.1
			c0.2,0.2,0.5,0.4,0.9,0.7l-1.3,1.3c-0.5-0.3-1-0.7-1.4-1.1c-0.7-0.7-1.1-1.5-1-2.3c0.1-0.8,0.5-1.6,1.3-2.4l5.9-5.9l-1.7-1.7
			l1.3-1.3l1.7,1.7l2.3-2.3L311.1,390.6z"
              />
              <path
                className={styles.arrowText}
                d="M304.7,408l-1.6-1.6l9.6-9.6l1.6,1.6L304.7,408z M315,394.1c0.3-0.3,0.6-0.4,0.9-0.4c0.3,0,0.7,0.1,1,0.4
			c0.3,0.3,0.5,0.7,0.5,1c0,0.3-0.2,0.7-0.4,0.9c-0.3,0.3-0.6,0.4-0.9,0.4c-0.3,0-0.7-0.1-1-0.5c-0.3-0.3-0.5-0.6-0.5-1
			C314.6,394.7,314.8,394.4,315,394.1z"
              />
              <path
                className={styles.arrowText}
                d="M318.4,402.6l-1.1,1.3c1.6-0.2,3.1,0.3,4.2,1.5c2,2,1.9,4.2-0.4,6.5l-6.3,6.3l-1.6-1.6l6.3-6.3
			c0.7-0.7,1-1.4,1.1-2c0-0.6-0.3-1.3-1-1.9c-0.5-0.5-1.1-0.9-1.8-1c-0.7-0.1-1.4-0.1-2.1,0.2l-6.8,6.8l-1.6-1.6l9.6-9.6
			L318.4,402.6z"
              />
              <path
                className={styles.arrowText}
                d="M321.8,415.3c1.5-1.5,3-2.3,4.6-2.5c1.6-0.2,2.9,0.3,4.1,1.4c1.2,1.2,1.7,2.5,1.5,4l1.1-1l1.5,1.5l-9.3,9.3
			c-1.2,1.2-2.6,1.8-4,1.8c-1.4,0-2.8-0.6-4-1.9c-0.7-0.7-1.2-1.5-1.6-2.5c-0.4-1-0.5-1.9-0.3-2.7l1.8-0.1c-0.2,1.6,0.3,2.9,1.3,3.9
			c0.8,0.8,1.6,1.2,2.5,1.2c0.9,0,1.7-0.4,2.6-1.2l0.8-0.8c-1.4,0.1-2.7-0.4-3.8-1.5c-1.1-1.1-1.6-2.5-1.4-4.1
			C319.3,418.5,320.2,416.9,321.8,415.3z M323.2,417.2c-1.1,1.1-1.7,2.1-1.9,3.2c-0.2,1.1,0.1,2,0.9,2.8c1,1,2.3,1.3,3.7,0.9
			l4.4-4.4c0.4-1.4,0.1-2.6-0.9-3.6c-0.8-0.8-1.7-1.1-2.8-0.9C325.6,415.2,324.4,415.9,323.2,417.2z"
              />
            </g>
          </g>
          <g
            className={
              styles.arrowWrapper + " " + (selected === 0 ? styles.active : "")
            }
            onClick={() => changeSelected(0)}
          >
            <path
              id="arrow1"
              className={styles.arrow}
              d="M329,494.4H9.2l52.6-52.6L9.2,389.2h199.9C235,436,276.6,473.9,329,494.4z"
            />
            <g>
              <path
                className={styles.arrowText}
                d="M121.6,444.5H114l-1.7,4.8h-2.5l7-18.2h2.1l7,18.2h-2.5L121.6,444.5z M114.7,442.6h6.2l-3.1-8.5L114.7,442.6z
			"
              />
              <path
                className={styles.arrowText}
                d="M130.1,435.8l0.1,1.7c1-1.3,2.4-2,4.1-2c2.9,0,4.3,1.6,4.3,4.8v8.9h-2.3v-9c0-1-0.2-1.7-0.7-2.2
			c-0.4-0.5-1.1-0.7-2-0.7c-0.8,0-1.4,0.2-2,0.6c-0.6,0.4-1,0.9-1.3,1.6v9.6h-2.3v-13.5H130.1z"
              />
              <path
                className={styles.arrowText}
                d="M150.4,449.3c-0.1-0.3-0.2-0.7-0.3-1.4c-1.1,1.1-2.4,1.7-3.9,1.7c-1.3,0-2.4-0.4-3.3-1.1
			c-0.9-0.8-1.3-1.7-1.3-2.9c0-1.4,0.5-2.5,1.6-3.3c1.1-0.8,2.6-1.2,4.5-1.2h2.3V440c0-0.8-0.2-1.5-0.7-1.9
			c-0.5-0.5-1.2-0.7-2.1-0.7c-0.8,0-1.5,0.2-2.1,0.6c-0.6,0.4-0.8,0.9-0.8,1.5h-2.3c0-0.7,0.2-1.3,0.7-2c0.5-0.6,1.1-1.1,2-1.5
			c0.8-0.4,1.7-0.6,2.7-0.6c1.6,0,2.8,0.4,3.7,1.2c0.9,0.8,1.3,1.9,1.4,3.2v6.2c0,1.2,0.2,2.2,0.5,3v0.2H150.4z M146.5,447.5
			c0.7,0,1.4-0.2,2.1-0.6c0.7-0.4,1.1-0.9,1.4-1.5v-2.8h-1.8c-2.8,0-4.3,0.8-4.3,2.5c0,0.7,0.2,1.3,0.7,1.7
			C145.1,447.3,145.8,447.5,146.5,447.5z"
              />
              <path
                className={styles.arrowText}
                d="M158.5,449.3h-2.3v-19.2h2.3V449.3z"
              />
              <path
                className={styles.arrowText}
                d="M166.6,445.9l3.2-10.1h2.5l-5.4,15.6c-0.8,2.3-2.2,3.4-4,3.4l-0.4,0l-0.9-0.2v-1.9l0.6,0.1
			c0.8,0,1.4-0.2,1.8-0.5c0.4-0.3,0.8-0.9,1.1-1.7l0.5-1.4l-4.8-13.4h2.5L166.6,445.9z"
              />
              <path
                className={styles.arrowText}
                d="M182.1,445.7c0-0.6-0.2-1.1-0.7-1.5c-0.5-0.3-1.3-0.6-2.5-0.9c-1.2-0.3-2.1-0.6-2.8-0.9
			c-0.7-0.4-1.2-0.8-1.5-1.3c-0.3-0.5-0.5-1.1-0.5-1.7c0-1.1,0.5-2,1.4-2.8s2.1-1.2,3.6-1.2c1.5,0,2.8,0.4,3.7,1.2
			c1,0.8,1.4,1.8,1.4,3H182c0-0.6-0.3-1.2-0.8-1.6s-1.2-0.7-2-0.7c-0.8,0-1.5,0.2-2,0.6c-0.5,0.4-0.7,0.8-0.7,1.4
			c0,0.6,0.2,1,0.7,1.3c0.4,0.3,1.2,0.6,2.4,0.8c1.2,0.3,2.1,0.6,2.8,0.9c0.7,0.4,1.2,0.8,1.6,1.3c0.3,0.5,0.5,1.1,0.5,1.8
			c0,1.2-0.5,2.2-1.5,2.9c-1,0.7-2.2,1.1-3.8,1.1c-1.1,0-2-0.2-2.9-0.6c-0.8-0.4-1.5-0.9-2-1.6c-0.5-0.7-0.7-1.4-0.7-2.2h2.3
			c0,0.8,0.4,1.4,0.9,1.8c0.6,0.5,1.3,0.7,2.3,0.7c0.9,0,1.6-0.2,2.1-0.5C181.9,446.8,182.1,446.3,182.1,445.7z"
              />
              <path
                className={styles.arrowText}
                d="M193.1,449.5c-1.8,0-3.3-0.6-4.5-1.8c-1.2-1.2-1.7-2.8-1.7-4.8v-0.4c0-1.3,0.3-2.5,0.8-3.6
			c0.5-1.1,1.2-1.9,2.2-2.5c0.9-0.6,1.9-0.9,3-0.9c1.8,0,3.1,0.6,4.1,1.7s1.5,2.8,1.5,5v1h-9.2c0,1.3,0.4,2.4,1.2,3.2
			c0.7,0.8,1.7,1.2,2.8,1.2c0.8,0,1.5-0.2,2.1-0.5c0.6-0.3,1.1-0.8,1.5-1.3l1.4,1.1C197.1,448.7,195.4,449.5,193.1,449.5z
			 M192.8,437.4c-0.9,0-1.7,0.3-2.4,1c-0.6,0.7-1,1.6-1.2,2.9h6.8v-0.2c-0.1-1.2-0.4-2.1-1-2.7C194.5,437.7,193.8,437.4,192.8,437.4
			z"
              />
            </g>
          </g>
          <g
            className={
              styles.arrowWrapper + " " + (selected === 5 ? styles.active : "")
            }
            onClick={() => changeSelected(5)}
          >
            <path
              id="arrow6"
              className={styles.arrow}
              d="M832.7,441.3l-53.2,53.2H501c50.3-19.8,93.4-56.6,120.3-105.3h157.1l1.1-1.1L832.7,441.3z"
            />
            <g>
              <path
                className={styles.arrowText}
                d="M654.2,443.6l0.4,2.4l0.5-2.2l3.6-12.7h2l3.5,12.7l0.5,2.2l0.4-2.5l2.8-12.5h2.4l-4.4,18.2h-2.2L660,436
			l-0.3-1.4l-0.3,1.4l-3.9,13.3h-2.2l-4.4-18.2h2.4L654.2,443.6z"
              />
              <path
                className={styles.arrowText}
                d="M680.6,449.3c-0.1-0.3-0.2-0.7-0.3-1.4c-1.1,1.1-2.4,1.7-3.9,1.7c-1.3,0-2.4-0.4-3.3-1.1
			c-0.9-0.8-1.3-1.7-1.3-2.9c0-1.4,0.5-2.5,1.6-3.3c1.1-0.8,2.6-1.2,4.5-1.2h2.3V440c0-0.8-0.2-1.5-0.7-1.9
			c-0.5-0.5-1.2-0.7-2.1-0.7c-0.8,0-1.5,0.2-2.1,0.6c-0.6,0.4-0.8,0.9-0.8,1.5h-2.3c0-0.7,0.2-1.3,0.7-2c0.5-0.6,1.1-1.1,2-1.5
			c0.8-0.4,1.7-0.6,2.7-0.6c1.6,0,2.8,0.4,3.7,1.2c0.9,0.8,1.3,1.9,1.4,3.2v6.2c0,1.2,0.2,2.2,0.5,3v0.2H680.6z M676.8,447.5
			c0.7,0,1.4-0.2,2.1-0.6s1.1-0.9,1.4-1.5v-2.8h-1.8c-2.8,0-4.3,0.8-4.3,2.5c0,0.7,0.2,1.3,0.7,1.7
			C675.4,447.3,676,447.5,676.8,447.5z"
              />
              <path
                className={styles.arrowText}
                d="M692.7,437.8c-0.4-0.1-0.7-0.1-1.1-0.1c-1.5,0-2.5,0.6-3.1,1.9v9.6h-2.3v-13.5h2.3l0,1.6
			c0.8-1.2,1.8-1.8,3.2-1.8c0.5,0,0.8,0.1,1,0.2V437.8z"
              />
              <path
                className={styles.arrowText}
                d="M698.6,432.5v3.3h2.5v1.8h-2.5v8.4c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.6,0.4,1.2,0.4c0.3,0,0.6-0.1,1.1-0.2v1.9
			c-0.6,0.2-1.2,0.2-1.8,0.2c-1,0-1.8-0.3-2.3-0.9s-0.8-1.5-0.8-2.7v-8.4h-2.5v-1.8h2.5v-3.3H698.6z"
              />
              <path
                className={styles.arrowText}
                d="M712.2,448c-0.9,1.1-2.2,1.6-4,1.6c-1.4,0-2.5-0.4-3.3-1.3c-0.8-0.8-1.1-2.1-1.1-3.7v-8.8h2.3v8.7
			c0,2.1,0.8,3.1,2.5,3.1c1.8,0,2.9-0.7,3.5-2v-9.8h2.3v13.5h-2.2L712.2,448z"
              />
              <path
                className={styles.arrowText}
                d="M720.1,435.8l0.1,1.7c1-1.3,2.4-2,4.1-2c2.9,0,4.3,1.6,4.3,4.8v8.9h-2.3v-9c0-1-0.2-1.7-0.7-2.2
			c-0.4-0.5-1.1-0.7-2-0.7c-0.8,0-1.4,0.2-2,0.6c-0.6,0.4-1,0.9-1.3,1.6v9.6H718v-13.5H720.1z"
              />
              <path
                className={styles.arrowText}
                d="M731.5,442.4c0-2.1,0.5-3.8,1.5-5s2.3-1.9,3.9-1.9c1.7,0,2.9,0.6,3.9,1.8l0.1-1.5h2.1V449
			c0,1.8-0.5,3.1-1.6,4.1c-1,1-2.4,1.5-4.2,1.5c-1,0-1.9-0.2-2.9-0.6c-0.9-0.4-1.6-1-2.1-1.7l1.2-1.4c1,1.2,2.2,1.8,3.6,1.8
			c1.1,0,2-0.3,2.6-1c0.6-0.6,0.9-1.5,0.9-2.7v-1.2c-0.9,1.1-2.2,1.6-3.8,1.6c-1.6,0-2.9-0.6-3.8-1.9
			C732,446.4,731.5,444.6,731.5,442.4z M733.9,442.7c0,1.5,0.3,2.7,0.9,3.6s1.5,1.3,2.6,1.3c1.5,0,2.5-0.7,3.2-2v-6.2
			c-0.7-1.3-1.8-1.9-3.2-1.9c-1.1,0-2,0.4-2.6,1.3C734.2,439.7,733.9,441,733.9,442.7z"
              />
            </g>
          </g>
        </svg>
        {texts.descriptions[selected]}
      </section>
    </>
  );
}
