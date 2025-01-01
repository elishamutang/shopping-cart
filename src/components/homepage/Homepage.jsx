import styles from './Homepage.module.css'

export default function Homepage({items}) {

    return (
        <>
            <section>
                <h1 className={styles.front}>ALL IN ONE PLACE</h1>
            </section>
            <section className={styles.store}>
                <h2>Shop</h2>
                <div className={styles.products}>
                    {items.map((item) => {
                        return (
                            <div key={item.id} className={styles.product}>
                                <img src={item.image} className={styles.productImage}></img>
                                <h3 className={styles.productTitle}>{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}