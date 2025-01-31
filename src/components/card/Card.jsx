import { useState, useContext } from "react";
import styles from "./Card.module.css";
import { CartContext, WishlistContext } from "../../routes/app/App";
import { Heart } from "lucide-react";
import PropTypes from "prop-types";

export default function Card({ item }) {
  const [quantity, setQuantity] = useState(0);
  const [buttonHover, setButtonHover] = useState(false);

  const { cart, setCart } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);

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

      // Find if item exists in Cart array.
      let cartCopy = [...cart];

      const productExists = cartCopy.some((arrItem) => arrItem.id === item.id);

      // If product exists, tally up amount.
      // Else, add new entry into Cart array.
      if (productExists) {
        setCart(() => {
          const updatedCart = cartCopy.map((arrItem) => {
            if (arrItem.id === item.id) {
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
          title: item.title,
          amount: Number(quantity),
          image: item.image,
          price: item.price,
        });
        setCart(cartCopy);
      }
    }
  }

  function handleMouseEnter() {
    setButtonHover(!buttonHover);
  }

  function handleMouseLeave() {
    setButtonHover(!buttonHover);
  }

  function wishlistHandler() {
    // Add to wishlist.
    let wishlistCopy = [...wishlist];

    // Check if item already exists in wishlist array.
    const inWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);

    // If item doesn't exist, add as new entry in wishlist array.
    // Else, if item exists, remove from wishlist array.
    if (!inWishlist) {
      const newEntry = { id: item.id, title: item.title, image: item.image, price: item.price, isLiked: true };
      wishlistCopy.push(newEntry);
      setWishlist(wishlistCopy);
    } else {
      const filteredWishlist = wishlistCopy.filter((wishlistItem) => wishlistItem.id !== item.id);
      setWishlist(filteredWishlist);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.product}>
      <Heart
        className={styles.likeBtn}
        onClick={wishlistHandler}
        fill={item.isLiked ? "red" : "none "}
        color={item.isLiked ? "red" : "black"}
      />
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
      <button
        type="submit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.addToCartBtn}
      >
        Add to cart
      </button>
    </form>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
