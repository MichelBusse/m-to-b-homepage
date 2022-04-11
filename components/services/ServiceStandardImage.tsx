import styles from "../../styles/services/ServiceStandardImage.module.scss";
import Image from "next/image"

export default function ServiceStandardImage(props) {
  return (
    <>
      <div className={styles.standardImage}>
        <Image src={props.image} alt={props.imageAlt} layout="fill"/>
      </div>
    </>
  );
}
