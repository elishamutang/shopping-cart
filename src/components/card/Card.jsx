import styles from './Card.module.css'

export default function Card({item}) {
    return (
        <div className={styles.product}>
            <img src={item.image} className={styles.productImage}></img>
            <h3 className={styles.productTitle}>{item.title}</h3>
            <p>${item.price}</p>
            <button>Add to cart</button>
        </div>
    )
}