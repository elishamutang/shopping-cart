import { useState, useContext } from "react";
import styles from "./Card.module.css";
import { CartContext } from "../../routes/app/App";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState(0);
  const [buttonHover, setButtonHover] = useState(false);
  const { cart, setCart } = useContext(CartContext);

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

  // Add To Cart functionality here.
  function handleSubmit(e) {
    e.preventDefault();

    if (quantity < 1) {
      alert("Quantity must at least be 1.");
    } else {
      console.log(`${quantity} of ${item.title} added to cart.`);

      // If cart is empty, add to Cart array.
      if (cart.length === 0) {
        setCart([{ id: item.id, product: item.title, amount: Number(quantity), icon: item.image, price: item.price }]);
      } else {
        // Find if item exists in Cart array.
        let cartCopy = [...cart];

        const productExists = cartCopy.some((arrItem) => arrItem.product === item.title);

        // If product exists, add to amount.
        // Else, add new entry.
        if (productExists) {
          setCart(() => {
            const updatedCart = cartCopy.map((arrItem) => {
              if (arrItem.product === item.title) {
                return { ...arrItem, amount: arrItem.amount + Number(quantity) };
              } else {
                return arrItem;
              }
            });

            return updatedCart;
          });
        } else {
          cartCopy.push({
            id: item.id,
            product: item.title,
            amount: Number(quantity),
            icon: item.image,
            price: item.price,
          });
          setCart(cartCopy);
        }
      }
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
