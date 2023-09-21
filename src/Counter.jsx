import { useState } from "react";

function Counter({num}) {
  
  const [state, setState] = useState(num)

  function handleNum() { 
    setState(state + 1)
    console.log(state)
  };

  return (
    <div>
    <p>The count is: {state}</p>
    <button onClick={handleNum}>Increment</button>

    </div>
  )
  
}

export default Counter