import useFakeData from "../../hooks/FakeData";
import Card from "../card/Card";
import styles from "./Homepage.module.css";
import Error from "../error/Error";
import { Link } from "react-router";

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
            <h1>Shop</h1>
            <div className={styles.products}>
              {items.map((item, idx) => {
                if (idx < 3) {
                  return <Card item={item} key={item.id} />;
                }
              })}
              <Link to={"shop"} className={styles.seeMoreBtn}>
                See more
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}
