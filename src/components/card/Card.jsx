import styles from './Card.module.css'

export default function Card({item}) {
    return (
        <div className={styles.product}>
            <img src={item.image} className={styles.productImage}></img>
            <h3 className={styles.productTitle}>{item.title}</h3>
            <p className={styles.pricing}>${item.price}</p>
            <label>
                Qty: <input type="number" name="quantity" defaultValue={0}/>
            </label>
            <button>Add to cart</button>
        </div>
    )
}