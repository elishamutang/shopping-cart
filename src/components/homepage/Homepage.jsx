import Card from "../card/Card";
import styles from "/home/elishamutang/Desktop/Projects/shopping-cart/src/components/homepage/Homepage.module.css";
import { Link } from "react-router";
import { useContext, useEffect } from "react";
import { DataContext, WishlistContext } from "../../routes/app/App";

export default function Homepage() {
  const { items } = useContext(DataContext);
  const { wishlist } = useContext(WishlistContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <h1 className={styles.front}>ALL IN ONE PLACE</h1>
      </section>
      <section className={styles.store}>
        <h1>Shop</h1>
        <div className={styles.products} data-testid="productsDiv">
          {items.map((item, idx) => {
            if (idx < 3) {
              const wishlistItem = wishlist.find((wishlistItem) => wishlistItem.id === item.id);

              if (wishlistItem) {
                return <Card key={item.id} item={wishlistItem} />;
              } else {
                return <Card key={item.id} item={item} />;
              }
            }
          })}
          <Link to={"shop"} className={styles.seeMoreBtn}>
            SEE MORE
          </Link>
        </div>
      </section>
    </>
  );
}
