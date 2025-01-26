import { useContext } from "react";
import styles from "../../main.module.css";
import { WishlistContext } from "../app/App";
import Card from "../../components/card/Card";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <section className={styles.store}>
      {wishlist.length === 0 ? (
        <h1>Your wishlist is empty.</h1>
      ) : (
        <>
          <h1>This is your wishlist.</h1>
          <div className={styles.products}>
            {wishlist.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </>
      )}
    </section>
  );
}
