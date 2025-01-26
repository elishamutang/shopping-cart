import { useState, createContext } from "react";
import NavBar from "../../components/nav/Nav";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import { X, Minus, Plus } from "lucide-react";
import useFakeData from "../../hooks/FakeData";
import Error from "../../components/error/Error";

export const CartContext = createContext(0);
export const WishlistContext = createContext();
export const DataContext = createContext();

export default function App() {
  const { items, loading, error } = useFakeData();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  let total = 0;
  let totalNumOfItems = 0;
  let wishlistTotal = wishlist.length;

  // Calculate cart total and total number of items in Cart.
  if (cart.length > 0) {
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
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : error ? (
        <Error />
      ) : (
        <DataContext.Provider value={{ items }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <WishlistContext.Provider value={{ wishlist, setWishlist }}>
              <NavBar openCart={openCart} totalNumOfItems={totalNumOfItems} wishlistTotal={wishlistTotal} />
              <Outlet />
            </WishlistContext.Provider>
          </CartContext.Provider>
        </DataContext.Provider>
      )}

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
                  <img className={styles.productIcon} src={cartItem.image}></img>
                  <p className={styles.productTitle}>{cartItem.title}</p>
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
