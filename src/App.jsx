import { useEffect, useState } from 'react'
import NavBar from './components/nav/Nav'
import Homepage from './components/homepage/Homepage'
import styles from './App.module.css'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      setItems(json)
    });
  }, [])

  return(
    <main className={styles.main}>
      <NavBar/>
      <Homepage items={items}/>
    </main>
  )
}

export default App
