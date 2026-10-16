import './App.css'
import Events from './Events.jsx'
import Counter from './Usestate.jsx';
import UserProfile from './Userprofile.jsx'
import Implementation from './Implementation.jsx';
import Conditional from './Conditional.jsx'
import List from './Listrendering.jsx';
function App() {
  const [count, setCount] = useState(0)
  const fruits=["mango","orange","guava","pine apple"]
  return (
    <>
    <Header/>
    <h1>first component</h1>
    <h2>welcome to react</h2>
    <UserProfile name="mohan" role="Trainee" department="Engineering" />
    <p>this is my first react app</p>
    <Events/>
    <Counter/>
    <Implementation name="mohan" role="Trainee" department="Engineering" />
    <Conditional username="mohan" connection={false} />
    <List/>
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
