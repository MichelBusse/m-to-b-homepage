import styles from "../../styles/services/CircleImage.module.scss";
import Image from "next/image"

type Props = {
  active: boolean,
  image: string,
  imageAlt: string,
}

export default function CircleImage(props : Props) {
  return (
    <div className={styles.circle + " " + (props.active ? styles.active : "")}>
      <Image
        style={{ transitionDelay: "0.3s" }}
        src={props.image}
        alt={props.imageAlt}
        layout="fill"
      />
    </div>
  );
}
