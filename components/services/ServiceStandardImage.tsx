import styles from "../../styles/services/ServiceStandardImage.module.scss";
import Image from "next/image";

type Props = {
  active: boolean;
  image: string;
  imageAlt: string;
};

export default function ServiceStandardImage(props: Props) {
  return (
    <>
      <div
        className={
          styles.standardImage + " " + (props.active ? styles.active : "")
        }
      >
        <Image src={props.image} alt={props.imageAlt} layout="fill" />
      </div>
    </>
  );
}
