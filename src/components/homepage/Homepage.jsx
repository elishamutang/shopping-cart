import Card from "../card/Card";
import styles from "./Homepage.module.css";

export default function Homepage({ items, isLoading }) {
  return (
    <>
      <section>
        <h1 className={styles.front}>ALL IN ONE PLACE</h1>
      </section>
      <section className={styles.store}>
        <h2>Shop</h2>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.products}>
            {items.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </div>
        )}
      </section>
    </>
  );
}
