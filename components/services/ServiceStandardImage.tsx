import styles from "../../styles/services/ServiceStandardImage.module.scss";

export default function ServiceStandardImage(props) {
  return (
    <>
      <div className={styles.standardImage}>
        <img src={props.image} alt={props.imageAlt} />
      </div>
    </>
  );
}
