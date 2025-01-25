import useFakeData from "../../hooks/FakeData";
import styles from "../../main.module.css";
import Error from "../../components/error/Error";
import Card from "../../components/card/Card";

export default function Shop() {
  const { items, loading, error } = useFakeData();

  return (
    <>
      <section className={styles.store}>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <Error />
        ) : (
          <>
            <h1>This is the shop</h1>
            <div className={styles.products}>
              {items.map((item) => {
                return <Card item={item} key={item.id} />;
              })}
            </div>
          </>
        )}
      </section>
    </>
  );
}
