import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username :"hitesh",
    age : 21
  }

  return (
    <>
       <h1 className='w-full h-full text-wrap text-centre  bg-green-400 text-black p-14  rounded-xl mb-9 ' >tailwind teast</h1>
       <Card  username="chai or code" btntext="click" />
       <Card  username="hitesh" btntext="ccclickedd"  />
    </>
  )
}

export default App