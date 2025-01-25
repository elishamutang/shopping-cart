import { useState, createContext } from "react";
import NavBar from "../../components/nav/Nav";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import { X, Minus, Plus } from "lucide-react";

export const CartContext = createContext(0);

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Tally up total number of items in Cart and get total price for all items in shopping cart.
  let total = 0;
  let totalNumOfItems = 0;
  if (cart.length > 0) {
    console.log("Cart has more than 1 item.");
    totalNumOfItems = cart.reduce((accumulator, currVal) => {
      return accumulator + currVal.amount;
    }, 0);

    total = cart.reduce((accumulator, currVal) => {
      return accumulator + currVal.amount * currVal.price;
    }, 0);

    // Round total to two decimal places.
    total = Math.round(total * 100) / 100;
  }

  // Show Cart
  function openCart() {
    setCartOpen(!isCartOpen);
  }

  // Close Cart
  function closeCart() {
    setCartOpen(!isCartOpen);
  }

  // Checkout and empty cart.
  function checkOutHandler() {
    alert(`Thanks for shopping! \nYour total was $${total}`);
    setCart([]);
  }

  // Add quantity in Cart
  function addQtyInCart(cartItem) {
    setCart(() => {
      const updatedCart = cart.map((item) => {
        if (item.id === cartItem.id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });

      return updatedCart;
    });
  }

  // Reduce quantity in Cart
  function reduceQtyInCart(cartItem) {
    setCart(() => {
      const updatedCart = cart.map((item) => {
        if (item.id === cartItem.id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });

      return updatedCart;
    });
  }

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
                  <div className={styles.productQty}>
                    <div>
                      <span>Qty: </span>
                      {cartItem.amount}
                    </div>
                    <div className={styles.changeProductQty}>
                      <Plus onClick={() => addQtyInCart(cartItem)} />
                      <Minus onClick={() => reduceQtyInCart(cartItem)} />
                    </div>
                  </div>
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
              <h2>${total}</h2>
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
