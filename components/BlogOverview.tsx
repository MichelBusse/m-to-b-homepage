import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/BlogOverview.module.scss";

type Props = {
  title: string;
  headline: string;
  shortDescription: string;
  image: string;
  reverse?: boolean;
};

export default function BlogOverview(props: Props) {
  const router = useRouter();
  
  let texts = {
    read: "Mehr lesen",
  }

  if(router.locale == "en"){
    texts = {
      read: "Read more",
    }
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
          alt={props.headline}
          width={200}
          height={100}
          layout={"responsive"}
        />
      </div>
      <div className={styles.text}>
        <h2>{props.headline}</h2>
        <p>{props.shortDescription}</p>
      </div>
      <Link href={"/Blog/" + props.title}>
        <a>
          <button className={"bounce"}>
            <div>{texts.read}</div>
          </button>
        </a>
      </Link>
    </div>
  );
}
