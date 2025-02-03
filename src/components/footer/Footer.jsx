import styles from "../footer/Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <p>
        Crafted by{" "}
        <span>
          <a href="https://elishamutang.xyz/" target="_blank">
            Elisha M.
          </a>
        </span>
      </p>
    </section>
  );
}
