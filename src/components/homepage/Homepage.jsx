import useFakeData from "../../hooks/FakeData";
import Card from "../card/Card";
import styles from "./Homepage.module.css";
import Error from "../error/Error";

export default function Homepage() {
  const { items, loading, error } = useFakeData();

  return (
    <>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : error ? (
        <Error />
      ) : (
        <>
          <section>
            <h1 className={styles.front}>ALL IN ONE PLACE</h1>
          </section>
          <section className={styles.store}>
            <h2>Shop</h2>
            <div className={styles.products}>
              {items.map((item) => {
                return <Card item={item} key={item.id} />;
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
}
