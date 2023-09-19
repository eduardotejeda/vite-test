import './App.css'
import Chicken from "./Chicken"
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import ShoppingList from "./ShoppingList";


const data = [
  {item: "egg", quantity:12, completed:false},
  {item: "milk", quantity:1, completed:true},
  {item: "chicken breasts", quantity:4, completed:false},
  {item: "carrots", quantity:6, completed:true}
];

function App() {  
   return(
    <div> 
      <ShoppingList items={data}/>
      
      
        </div>
   ) 
}

export default App

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
