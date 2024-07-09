import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)// state ko change krna ka liye ui ka andar
 
  //let counter = 15

  const addvalue = () => {
    console.log("value added " , counter);
    //counter = counter + 1
    // setCounter(counter + 1)
    setCounter((prevcounter) => prevcounter + 1)
    setCounter((prevcounter) => prevcounter + 1)
    setCounter((prevcounter) => prevcounter + 1)
    setCounter((prevcounter) => prevcounter + 1)
  }

  const removevalue = () => {
    console.log("value added " , counter);
    counter = counter - 1
    setCounter(counter - 1)
  }

  return (
    <>
       <h1>cahi or rweact</h1>
       <h2>counter value : {counter} </h2>

       <button
       onClick={addvalue}
       >Add value {counter} </button>
       <br />
       <button
       onClick={removevalue}
       >decrease  value  {counter}</button>
       <p> {counter}</p>
    </>
  )
}

export default App
