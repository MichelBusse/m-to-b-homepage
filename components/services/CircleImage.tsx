import styles from "../../styles/services/CircleImage.module.scss";

export default function CircleImage(props) {
  return (
    <div className={styles.circle + " " + (props.active ? styles.active : "")}>
      <img
        style={{ transitionDelay: "0.3s" }}
        src={props.image}
        alt={props.imageAlt}
      />
    </div>
  );
}
