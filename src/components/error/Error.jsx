import styles from "/src/components/error/Error.module.css";

export default function Error() {
  return <h1 className={styles.error}>A network error was encountered.</h1>;
}
