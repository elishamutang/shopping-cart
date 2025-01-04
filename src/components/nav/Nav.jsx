import styles from './Nav.module.css'

const NavBar = () => {
    return(
        <nav className={styles.nav}>
            {/* Make as link tag from React Router */}
            <ul className={styles.ul}>
                <li><h1>All In One Place</h1></li>
                <li><a href='#'>Shop</a></li>
            </ul>
            <ul>
                {/* Update totals for wishlist and cart */}
                <li><a href='#'>Wishlist</a></li>
                <li><a href='#'>Cart</a></li>
            </ul>
        </nav>
    )
}

export default NavBar