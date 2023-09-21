import { useState } from "react"
import Counter from "./Counter";



function Toggler({num}) {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(num);


  const toggleIsHappy = () => setIsHappy(!isHappy);
  const handleCount = () => {
    setCount(count + 1)
  }


  return (
<div>
  <p className="toggler" onClick={toggleIsHappy}>
  {isHappy ? ":D" : ":("} 
  </p>
  <p> {count}</p>
  <button onClick={handleCount}>+</button>
</div>
  )
  
}

export default Toggler