export default function Die({numSize}) {
  console.log(numSize)
  const roll = Math.floor(Math.random() * numSize) + 1
  return <p>{numSize}-sided die roll: {roll}</p>
}