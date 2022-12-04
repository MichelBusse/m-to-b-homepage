import styles from "../styles/InfiniteHorizontalScroll.module.scss";
import React, { cloneElement, FC, PropsWithChildren, ReactElement } from "react";

type Props = {
  totalWidth: number;
  spaceBetween: number;
};

const InfiniteHorizontalScroll: FC<PropsWithChildren<Props>> = (props) => {
  const width =
    props.totalWidth +
    props.spaceBetween * React.Children.count(props.children);

  const getStyledChildren = (offset: number) => {
    if (!props.children) return;
    const styledChildren = React.Children.map(
      props.children,
      (child, index) => {
        if (!React.isValidElement(child)) {
          return;
        }
        const item = child as ReactElement;

        return cloneElement(item, {
          key: offset * React.Children.count(props.children) + index,
          style: {
            marginRight: props.spaceBetween,
          },
        });
      }
    );
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
};

export default InfiniteHorizontalScroll;
