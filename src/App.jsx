import NavBar from './components/nav/Nav'
import Homepage from './components/homepage/Homepage'
import styles from './App.module.css'

function App() {
  return(
    <main className={styles.main}>
      <NavBar/>
      <Homepage/>
    </main>
  )
}

export default App
