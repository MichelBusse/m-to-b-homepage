import styles from "../styles/InfiniteHorizontalScroll.module.scss";
import { cloneElement } from "react";

export default function InfiniteHorizontalScroll(props) {
  const width =
    props.totalWidth + props.spaceBetween * (props.children.length);

  const getStyledChildren = (offset) => {
    const styledChildren = props.children.map((child, index) => {
      return cloneElement(child, {
        key: offset * props.children.length + index,
        style: {
          marginRight: props.spaceBetween,
        },
      });
    });
    return styledChildren;
  };

  return (
    <>
      <div className={styles.slideWrapper} style={{ width: width }}>
        {getStyledChildren(0)}
        {getStyledChildren(1)}
      </div>
    </>
  );
}
