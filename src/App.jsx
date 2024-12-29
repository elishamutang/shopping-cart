import NavBar from './components/nav/Nav'
import Content from './components/content/Content'
import styles from './App.module.css'

function App() {
  return(
    <main className={styles.main}>
      <NavBar/>
      <Content/>
    </main>
  )
}

export default App
