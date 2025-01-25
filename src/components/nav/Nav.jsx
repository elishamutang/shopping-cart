import { ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router";
import styles from "./Nav.module.css";

const NavBar = ({ openCart, totalNumOfItems, wishlistTotal }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link to={"/"} className={styles.home}>
            <h1>All In One Place</h1>
          </Link>
        </li>
        <li>
          <Link to={"shop"} className={styles.clickables}>
            Shop
          </Link>
        </li>
      </ul>
      <ul>
        {/* Update totals for wishlist and cart */}
        <li>
          <Link to={"wishlist"} className={styles.clickables}>
            Wishlist
            <Heart className={styles.icon} />
            {wishlistTotal > 0 && `(${wishlistTotal})`}
          </Link>
        </li>
        <li>
          <span className={styles.clickables} onClick={openCart}>
            Cart
            <ShoppingBag className={styles.icon} />
            {totalNumOfItems > 0 && `(${totalNumOfItems})`}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
