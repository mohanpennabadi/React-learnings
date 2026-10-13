import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1>first component</h1>
    <h2>welcome to react</h2>
    <p>this is my first react app</p>
    <Footer/>
    </>
  )
}
function Header(){
  return (
<>
 <p>this is header section</p> 
</> 
)}
function Footer(){
  return (
<>
 <p>this is footer section</p> 
</> 
)}
export default App
