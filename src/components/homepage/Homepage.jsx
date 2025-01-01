import styles from './Homepage.module.css'
import product1 from '../../assets/product1.webp'

const Homepage = () => {
    return (
        <>
            <section>
                <h1 className={styles.front}>A STREETWEAR BRAND</h1>
            </section>
            <section className={styles.store}>
                    <h2>Shop</h2>
                    {/* Accept an array of products and display some of it */}
                    <div className={styles.products}>
                        {/* Each product must display brand, title, price and image */}
                        {[1,2,3,4].map((item) => {
                            return (
                                <div className={styles.product} key={item}>
                                    <img src={product1}/>
                                    <h3>Fucking Awesome</h3>
                                    <p>Washed Harrington Jacket, Black</p>
                                    <p>Product {item}</p>
                                </div>
                            )
                        })}
                    </div>
            </section>
        </>
        
    )
}

export default Homepage