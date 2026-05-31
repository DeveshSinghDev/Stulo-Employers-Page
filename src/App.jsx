import { useState } from 'react'
import './App.css'
import Hero from "./Components/Hero.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
   <Hero />

  )
}

export default App
