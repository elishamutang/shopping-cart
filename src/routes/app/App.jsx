import { useState, createContext } from "react";
import NavBar from "../../components/nav/Nav";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import { X } from "lucide-react";

export const CartContext = createContext(0);

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Tally up total number of items in Cart.
  let total = 0;
  if (cart.length > 0) {
    total = cart.reduce((accumulator, currVal) => {
      return accumulator + currVal.amount;
    }, 0);
  }

  // Show Cart
  function openCart() {
    setCartOpen(!isCartOpen);
    console.log("cart open");
  }

  // Close Cart
  function closeCart() {
    setCartOpen(!isCartOpen);
    console.log("cart closed");
  }

  console.log(cart);

  return (
    <main className={styles.main}>
      <CartContext.Provider value={{ cart, setCart }}>
        <NavBar openCart={openCart} total={total} />
        <Outlet />
      </CartContext.Provider>
      {isCartOpen && (
        <div className={styles.sidebar}>
          <div className={styles.top}>
            <h3>Cart ({total})</h3>
            <X onClick={closeCart} className={styles.closeCart} />
          </div>
          <div className={styles.productsCart}>
            {total > 0 &&
              cart.map((cartItem) => {
                return (
                  <div key={cartItem.id} className={styles.products}>
                    <img className={styles.productIcon} src={cartItem.icon}></img>
                    <p className={styles.productTitle}>{cartItem.product}</p>
                    <p className={styles.productQty}>
                      <span>Qty:</span> {cartItem.amount}
                    </p>
                    <p>${cartItem.price * cartItem.amount}</p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </main>
  );
}
