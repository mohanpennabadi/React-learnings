import { useState } from 'react'
import './App.css'
import UserProfile from './Userprofile.jsx'
import Events from './Events.jsx'
import Counter from './Usestate.jsx';
import Implementation from './Implementation.jsx';
import UserForm from './UserForm.jsx'
import Fetch from './Fetch.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/>
    <h1>first component</h1>
    <h2>welcome to react</h2>
    <UserProfile name="mohan" role="Trainee" department="Engineering" />
    <p>this is my first react app</p>
    <Events/>
    <Footer/>
    <Counter/>
    <Implementation name="mohan" role="Trainee" department="Engineering" />
    <UserForm/> */}
    <Fetch/>
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
