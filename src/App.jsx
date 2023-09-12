import { useState } from 'react'
import './App.css'
import Counter369 from "./components/Counter369.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter369/>
    </>
  )
}

export default App
