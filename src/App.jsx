import { useEffect, useState } from 'react'
import NavBar from './components/nav/Nav'
import Homepage from './components/homepage/Homepage'
import Error from './components/error/Error'
import styles from './App.module.css'

function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
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
    .finally(() => setLoading(false))
  }, [])

  return(
    <main className={styles.main}>
      <NavBar/>
      { error ? <Error/> : <Homepage items={items} isLoading={loading}/> }
    </main>
  )
}

export default App
