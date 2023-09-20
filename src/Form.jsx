function Form() {

  function handleFromSubmit(e) {
    e.preventDefault()
    console.log('Form submited')
    
  }



  return (
    <form onSubmit={handleFromSubmit}>
      <button>Submit</button>
    </form>
  )
}

export default  Form;