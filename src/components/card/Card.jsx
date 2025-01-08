import { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState(0);

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className={styles.product}>
      <img src={item.image} className={styles.productImage}></img>
      <h3 className={styles.productTitle}>{item.title}</h3>
      <p className={styles.pricing}>${item.price}</p>
      <label>
        Qty:{" "}
        <input
          type="number"
          name="quantity"
          value={quantity === "" ? 0 : quantity}
          onChange={handleChange}
          min={0}
          max={1000}
        />
      </label>
      <button>Add to cart</button>
    </div>
  );
}
