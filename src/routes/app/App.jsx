import { useState, createContext } from "react";
import NavBar from "../../components/nav/Nav";
import styles from "./App.module.css";
import { Outlet } from "react-router";

export const CartContext = createContext(0);

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <main className={styles.main}>
      <CartContext.Provider value={{ cart, setCart }}>
        <NavBar />
        <Outlet />
      </CartContext.Provider>
    </main>
  );
}
