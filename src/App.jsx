import './App.css'
import Chicken from "./Chicken"
import Greeter from "./Greeter"
import Die from "./Die"

function App() {  
   return(
    <div>
    <Greeter person="Bill"/>
    <Greeter from="Colt"/>
    <Greeter person="Rosa" from="Elton"/>
    <Die numSize={6} />
    <Die numSize={12} />
    <Die numSize={20} />
        </div>
   ) 
}

export default App
