import { useState } from "react"
import './App.css'

function App() {


  const [counter , setcounter] = useState(0)


  const addValue = () => {
    setcounter(prevcounter => (prevcounter + 1))
    setcounter(prevcounter => (prevcounter + 1))
    setcounter(prevcounter => (prevcounter + 1))

  }

  const removeValue = () =>{
    setcounter(counter-1)
  }

  return(
    <>
    <h1   >coounter value {counter}</h1>
    <button
    onClick={addValue}
    >
      Add counter
    </button>
    <br />
    <button
    onClick={removeValue}
    >
      remove coounter 
    </button>
    </>
  )
}

export default App