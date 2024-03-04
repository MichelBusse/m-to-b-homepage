import InfiniteHorizontalScroll from "../Utility/InfiniteHorizontalScroll";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function CustomersSection() {
  return (
    <>
      <section id={styles.customers}>
        <InfiniteHorizontalScroll totalWidth={1105} spaceBetween={50}>
          <div className={styles.customer}>
            <Image
              src="/images/customers/special-solutions.png"
              alt="Special Solutions GmbH"
              width={74}
              height={60}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/uni-leipzig.png"
              alt="Universität Leipzig"
              width={172}
              height={60}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/zls-leipzig.png"
              alt="ZLS Leipzig"
              width={240}
              height={60}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/uniklinik-leipzig.png"
              alt="Universitätsklinikum Leipzig"
              width={265}
              height={60}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/upmc.png"
              alt="UPMC Pittsburgh"
              width={286}
              height={60}
            />
          </div>
          <div className={styles.customer}>
            <Image
              src="/images/customers/ks-gmbh.png"
              alt="K&amp;S GmbH"
              width={68}
              height={60}
            />
          </div>
        </InfiniteHorizontalScroll>
      </section>
    </>
  );
}
