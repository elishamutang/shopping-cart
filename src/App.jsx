import NavBar from './components/nav/Nav'
import styles from './App.module.css'

function App() {
  return(
    <main className={styles.main}>
      <NavBar/>
      <h1 className={styles.front}>A Streetwear Brand</h1>
    </main>
  )
}

export default App
