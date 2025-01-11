import { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState(0);
  const [buttonHover, setButtonHover] = useState(false);

  function handleChange(e) {
    if (e.target.value > 1000) {
      setQuantity(1000);
    } else if (e.target.value < 0 || e.target.value.startsWith("0")) {
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

  function handleSubmit(e) {
    e.preventDefault();

    if (quantity < 1) {
      alert("Quantity must at least be 1.");
    } else {
      console.log(`${quantity} of ${item.title} added to cart.`);
    }
  }

  function handleMouseEnter() {
    setButtonHover(!buttonHover);
  }

  function handleMouseLeave() {
    setButtonHover(!buttonHover);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.product}>
      <img src={item.image} className={styles.productImage}></img>
      <h3 className={styles.productTitle}>{item.title}</h3>
      <p className={buttonHover ? styles.pricingActive : styles.pricing}>${item.price}</p>
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
          minLength={1}
          required
        />
      </label>
      <button type="submit" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Add to cart
      </button>
    </form>
  );
}
