import './App.css'
import Chicken from "./Chicken"
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker"
import Form from "./Form"
import Counter from "./Counter"
import Toggler from "./Toggler"


const data = [
  {item: "egg", quantity:12, completed:false},
  {item: "milk", quantity:1, completed:true},
  {item: "chicken breasts", quantity:4, completed:false},
  {item: "carrots", quantity:6, completed:true}
];

function App() {  
   return(
    <div className="App"> 
    <Counter num={0}/>
    <Toggler num={0}/>
    
          
    </div>
   ) 
}

export default App
{/* <Form/> */}

{/* <Clicker />   */}

{/* <ShoppingList items={data}/> */}

{/* <DoubleDice/>
      <DoubleDice/> */}
      {/* <ListPicker values={[1,2,3]}/>
      <ListPicker values={["a","b","c"]}/> */}
    {/* <Greeter person="Bill"/>
    <Greeter from="Colt"/>
    <Greeter person="Rosa" from="Elton"/>
    <Die numSize={6} />
    <Die numSize={12} />
    <Die numSize={20} /> */}
