import styles from './Nav.module.css'

const NavBar = () => {
    return(
        <nav className={styles.nav}>
            {/* Make as link tag from React Router */}
            <ul className={styles.ul}>
                <li><h1>A Streetwear Brand</h1></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Brands</a></li>
            </ul>
        </nav>
    )
}

export default NavBar