import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserProfile from './Userprofile.jsx'
import Events from './Events.jsx'
import Counter from './Usestate.jsx';
import Implementation from './Implementation.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1>first component</h1>
    <h2>welcome to react</h2>
    <UserProfile name="mohan" role="Trainee" department="Engineering" />
    <p>this is my first react app</p>
    <Events/>
    <Footer/>
    <Counter/>
    <Implementation name="mohan" role="Trainee" department="Engineering" />
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
