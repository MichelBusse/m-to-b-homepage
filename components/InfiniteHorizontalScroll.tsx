import styles from "../styles/InfiniteHorizontalScroll.module.scss";
import {cloneElement} from 'react'

export default function InfiniteHorizontalScroll(props) {
  const width = props.width + props.spaceBetween * props.children.length;
  console.log(width);

  const stylizedChildren = props.children.map(child => {
    return cloneElement(child, {
       style: { margin: `0 ${props.spaceBetween / 2}px` }
    });
  })

  return (
    <>
      <div
        className={styles.slideWrapper}
        style={{ width: `${width}px`}}
      >
        {stylizedChildren}
        {stylizedChildren}
      </div>
    </>
  );
}
