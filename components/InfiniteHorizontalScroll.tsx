import styles from "../styles/InfiniteHorizontalScroll.module.scss";
import { cloneElement } from "react";

export default function InfiniteHorizontalScroll(props) {
  const width = props.width + props.spaceBetween * props.children.length;

  const getStyledChildren = (offset) => {
    const styledChildren = props.children.map((child, index) => {
      return cloneElement(child, {
        style: { margin: `0 ${props.spaceBetween / 2}px` },
        key: offset * props.children.length + index,
      });
    });
    return styledChildren;
  };

  return (
    <>
      <div className={styles.slideWrapper} style={{ width: `${width}px` }}>
        {getStyledChildren(0)}
        {getStyledChildren(1)}
      </div>
    </>
  );
}
