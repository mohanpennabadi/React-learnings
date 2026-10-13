import './App.css'
import Events from './Events.jsx'
import Counter from './Usestate.jsx';
import UserProfile from './Userprofile.jsx'
function App() {
  return (
    <>
    <Header/>
    <h1>first component</h1>
    <h2>welcome to react</h2>
    <UserProfile name="mohan" role="Trainee" department="Engineering" />
    <p>this is my first react app</p>
    <Events/>
    <Counter/>
    </>
  )
}
function Header(){
  return (
<>
 <p>this is header section</p> 
</> 
)}
export default App
