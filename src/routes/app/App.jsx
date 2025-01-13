import NavBar from "../../components/nav/Nav";
import styles from "./App.module.css";
import { Outlet } from "react-router";

export default function App() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Outlet />
    </main>
  );
}
