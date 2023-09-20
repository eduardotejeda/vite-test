function Clicker() {

  function handleClick(){
    console.log('Click')
  }
 

  return <div>
    <p>Click the button</p>
    <button onClick={handleClick}>Click</button>
    
  </div>

}

export default Clicker;