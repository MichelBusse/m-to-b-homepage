import styles from "../../styles/services/CircleImage.module.scss";
import Image from "next/image"

export default function CircleImage(props) {
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
