import Link from "next/link";
import styles from "../styles/FloatingActionContact.module.scss";
import { IoMail } from "react-icons/io5";
import { MutableRefObject, useEffect, useState } from "react";
import { useRouter } from "next/router";
("react-icons/si");

type Props = {
  anchorRef?: MutableRefObject<null>;
};

export default function FloatingActionContact(props: Props) {
  const [contactLink, setContactLink] = useState("#contact");
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setContactLink("#contact");

    if (
      router.asPath.startsWith("/Blog") ||
      router.asPath.startsWith("/App-Preis-Rechner")
    ) {
      setContactLink("/#contact");
    }
  }, [router.asPath]);

  const centerPos = (element: HTMLElement) =>
    element.getBoundingClientRect().top +
    window.scrollY;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.8;
      if(1000 > scrollPosition){
        setActive(false);
      }else if (
        props.anchorRef &&
        props.anchorRef.current &&
        centerPos(props.anchorRef.current) < scrollPosition
      ) {
        setActive(false);
      }else{
        setActive(true);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [props.anchorRef]);

  return (
    <Link href={contactLink}>
      <a>
        <div className={styles.wrapper + (active ? ' ' + styles.active : '')}>
          <IoMail />
        </div>
      </a>
    </Link>
  );
}
