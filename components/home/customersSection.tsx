import styles from "../../styles/home/CustomersSection.module.scss";
import Image from "next/image";
import InfiniteHorizontalScroll from "../InfiniteHorizontalScroll";

export default function CustomersSection(props) {

  return (
    <>
      <section id={styles.customers}>
        <InfiniteHorizontalScroll width={1670} spaceBetween={80}>
          <div className={styles.customer}>
            <Image
              src="/images/customers/special-solutions.png"
              alt="Special Solutions GmbH"
              width={98}
              height={80}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/uni-leipzig.png"
              alt="Universität Leipzig"
              width={229}
              height={80}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/zls-leipzig.png"
              alt="ZLS Leipzig"
              width={320}
              height={80}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/uniklinik-leipzig.png"
              alt="Universitätsklinikum Leipzig"
              width={353}
              height={80}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/final-fighters.png"
              alt="Final Fighters Gym Zwickau e.V."
              width={165}
              height={80}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/upmc.png"
              alt="UPMC Pittsburgh"
              width={381}
              height={80}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/ks-gmbh.png"
              alt="K&amp;S GmbH"
              width={91}
              height={80}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/hartmann.png"
              alt="Übersetzungsbüro Hartmann"
              width={414}
              height={80}
            />
          </div>
        </InfiniteHorizontalScroll>
      </section>
    </>
  );
}
