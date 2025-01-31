import styles from "../../main.module.css";
import Card from "../../components/card/Cards";
import { useContext, useEffect } from "react";
import { DataContext, WishlistContext } from "../app/App";

export default function Shop() {
  const { items } = useContext(DataContext);
  const { wishlist } = useContext(WishlistContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={styles.store}>
        <h1>This is the shop.</h1>
        <div className={styles.products}>
          {items.map((item) => {
            const wishlistItem = wishlist.find((wishlistItem) => wishlistItem.id === item.id);

            if (wishlistItem) {
              return <Card key={item.id} item={wishlistItem} />;
            } else {
              return <Card key={item.id} item={item} />;
            }
          })}
        </div>
      </section>
    </>
  );
}
