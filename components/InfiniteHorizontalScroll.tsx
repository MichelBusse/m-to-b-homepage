import styles from "../styles/InfiniteHorizontalScroll.module.scss";

export default function InfiniteHorizontalScroll(props){
    return <>
        <div className={styles.slideWrapper}>
            {props.children}
            {props.children}
        </div>
    </>
}