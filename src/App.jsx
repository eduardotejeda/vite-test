import './App.css'
import Chicken from "./Chicken"
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"

function App() {  
   return(
    <div>
      <ListPicker values={[1,2,3]}/>
      <ListPicker values={["a","b","c"]}/>
    {/* <Greeter person="Bill"/>
    <Greeter from="Colt"/>
    <Greeter person="Rosa" from="Elton"/>
    <Die numSize={6} />
    <Die numSize={12} />
    <Die numSize={20} /> */}
        </div>
   ) 
}

export default App
