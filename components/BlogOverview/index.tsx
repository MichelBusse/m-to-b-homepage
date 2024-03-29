import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function BlogOverview(props: Props) {
  const router = useRouter();

  let texts = {
    read: "Mehr lesen",
  };

  if (router.locale == "en") {
    texts = {
      read: "Read more",
    };
  }

  return (
    <div
      className={`${styles.blogOverview} ${
        props.reverse ? styles.reverse : ""
      }`}
    >
      <div className={styles.image}>
        <Image
          src={props.image}
          alt={props.title}
          width={500}
          height={200}
        />
      </div>
      <div className={styles.text}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link href={"/Blog/" + props.id}>
            <button className={"bounce"}>
              <div>{texts.read}</div>
            </button>
        </Link>
      </div>
    </div>
  );
}
