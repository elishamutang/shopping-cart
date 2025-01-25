import { useState, createContext } from "react";
import NavBar from "../../components/nav/Nav";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import { X } from "lucide-react";

export const CartContext = createContext(0);

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Tally up total number of items in Cart and get total price for all items in shopping cart.
  let total = 0;
  let totalNumOfItems = 0;
  if (cart.length > 0) {
    console.log("enter");
    totalNumOfItems = cart.reduce((accumulator, currVal) => {
      return accumulator + currVal.amount;
    }, 0);

    total = cart.reduce((accumulator, currVal) => {
      return accumulator + currVal.amount * currVal.price;
    }, 0);
  }

  console.log(total);

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

  // Checkout
  function checkOutHandler() {
    alert("Thanks for shopping!");
  }

  console.log(cart);

  return (
    <main className={styles.main}>
      {/* Nav and main content */}
      <CartContext.Provider value={{ cart, setCart }}>
        <NavBar openCart={openCart} totalNumOfItems={totalNumOfItems} />
        <Outlet />
      </CartContext.Provider>

      {/* Sidebar */}
      <div className={isCartOpen ? styles.showSidebar : styles.sidebar}>
        <div className={styles.top}>
          <h3>Cart ({totalNumOfItems})</h3>
          <X onClick={closeCart} className={styles.closeCart} />
        </div>
        <div className={styles.productsCart}>
          {totalNumOfItems > 0 ? (
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
            })
          ) : (
            <h3>Your cart is currently empty.</h3>
          )}
        </div>
        {totalNumOfItems > 0 && (
          <>
            <div className={styles.total}>
              <h2>Total</h2>
              <h2>${Math.round(total * 100) / 100}</h2>
            </div>
            <button className={styles.checkoutBtn} onClick={checkOutHandler}>
              Checkout
            </button>
          </>
        )}
      </div>
    </main>
  );
}
