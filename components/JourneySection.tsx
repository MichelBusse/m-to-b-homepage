import { useRouter } from "next/router";
import styles from "../styles/JourneySection.module.scss";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const JourneySection = () => {
  const router = useRouter();

  const [journeySize, setJourneySize] = useState("big");

  const updateJourneySize = useCallback((e) => {
    if (e.matches) {
      setJourneySize("small");
    } else {
      setJourneySize("big");
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 800px)`);
    media.addEventListener("change", updateJourneySize);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
        updateJourneySize("small");
    }

    return () => media.removeEventListener("change", updateJourneySize);
  }, [updateJourneySize]);
  

  return (
    <section className={styles.journeySection}>
      <div className={styles.imageWrapper}>
        <Image
            src={`/images/app-development/journey-${journeySize}-${router.locale}.svg`}
            layout="fill"
            alt="App Development Journey"
        />
      </div>
    </section>
  );
};

export default JourneySection;
