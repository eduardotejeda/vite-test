export default function Greeter({person = "anonimo", from="Pot"}) {
  
  return <>
  <h1>Hi there, {person}!!!</h1>
  <h2>-{from}</h2>
  </>
  

}