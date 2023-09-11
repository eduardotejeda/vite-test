export default function ListPicker({values}) {
  const randIdx = Math.floor(Math.random() * values.length-1);
  const radElement =  values[randIdx]

  return (
    <div>
      <p>The list of values: {values} </p>
      <p>Random element is: {radElement}</p>
    </div>
  )
}