import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import styles from "./Nav.module.css";

const NavBar = ({ openCart, total }) => {
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
          <a href="#" className={styles.clickables}>
            Wishlist
          </a>
        </li>
        <li>
          <span className={styles.clickables} onClick={openCart}>
            Cart
            <ShoppingBag className={styles.shoppingBagIcon} />
            {total > 0 && `(${total})`}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
