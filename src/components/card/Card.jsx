import { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState(0);

  function handleChange(e) {
    if (e.target.value > 1000) {
      setQuantity(1000);
    } else if (e.target.value < 0) {
      setQuantity("");
    } else {
      setQuantity(e.target.value);
    }
  }

  function handleBlur(e) {
    if (e.target.value === "") {
      setQuantity(0);
    }
  }

  function handleFocus() {
    if (quantity === 0) {
      setQuantity("");
    }
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
          value={quantity}
          onChange={handleChange}
          min={0}
          max={1000}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </label>
      <button>Add to cart</button>
    </div>
  );
}
