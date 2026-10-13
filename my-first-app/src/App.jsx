import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>first component</h1>
    <h2>welcome to react</h2>
    <p>this is my first react app</p>
    </>
  )
}

export default App
