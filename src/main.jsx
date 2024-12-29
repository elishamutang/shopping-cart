import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Person from './Person.jsx'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person/>
  </StrictMode>,
)
