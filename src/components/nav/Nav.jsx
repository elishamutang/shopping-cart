import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import styles from "./Nav.module.css";
import { useContext } from "react";
import { CartContext } from "../../routes/app/App";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  // Tally up total number of items in Cart.
  let total = 0;
  if (cart.length > 0) {
    total = cart.reduce((accumulator, currVal) => {
      return accumulator + currVal.amount;
    }, 0);
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link to={"/"} className={styles.home}>
            <h1>All In One Place</h1>
          </Link>
        </li>
        <li>
          <Link to={"shop"}>Shop</Link>
        </li>
      </ul>
      <ul>
        {/* Update totals for wishlist and cart */}
        <li>
          <a href="#">Wishlist</a>
        </li>
        <li>
          <a href="#">
            Cart
            <ShoppingBag className={styles.shoppingBagIcon} />
            {total > 0 && `(${total})`}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
