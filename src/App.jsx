import { useEffect, useState } from 'react'
import NavBar from './components/nav/Nav'
import Homepage from './components/homepage/Homepage'
import Error from './components/error/Error'
import styles from './App.module.css'

function App() {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => {

      if(res.status >= 400) {
        throw new Error("server error")
      }

      return res.json()
    })
    .then((json) => {
      console.log(json)
      setItems(json)
    })
    .catch((error) => setError(error))
  }, [])

  return(
    <main className={styles.main}>
      <NavBar/>
      { error ? <Error/> : <Homepage items={items}/> }
    </main>
  )
}

export default App
