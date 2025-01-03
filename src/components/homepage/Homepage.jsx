import Card from '../card/Card'
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
                            <Card item={item} key={item.id}/>
                        )
                    })}
                </div>
            </section>
        </>
    )
}