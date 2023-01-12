import styles from "../styles/ProjectsHeader.module.scss";

type Props = {
  headline: JSX.Element;
  text: JSX.Element;
  company?: JSX.Element;
};

export default function ProjectsHeader(props: Props) {
  return (
    <header className={styles.projectsHeader}>
      <div className={styles.text}>
        {props.company && <span>{props.company}</span>}
        <h1>{props.headline}</h1>
        <p>{props.text}</p>
      </div>
    </header>
  );
}
