import { useState , useCallback, useEffect , useRef} from 'react'
import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook
 const passwordRef = useRef(null)


const passgenerator = useCallback(()=>{
  let password = ""
  let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
  if (numberAllowed)  str += "01234567"
  if (characterAllowed)  str += "@$%^&*&^$@!"
  for (let i = 1;i<=length ;i++) {
    let char =  Math.floor(Math.random() * str.length + 1)
    password += str.charAt(char)
  }
  setPassword(password)
}, [length,numberAllowed , characterAllowed , setPassword])


const copytoclipboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,6)
  window.navigator.clipboard.writeText(password)
},[password])


useEffect(()=>{
  passgenerator()
},[length,numberAllowed,characterAllowed,passgenerator])

  return (
    <>
       <div className='w-full max-w-md mx-auto  rounded-lg text-orange-500 py-2 px-4 bg-gray-800   '> 
        <h1 className= 'text-white  my-3'>Password generator</h1> 
       <div className='flex shadow-lg rounded-lg bg-black  mb-4  '>
       <input type="text"
          value={password}
          className='outline-none w-full  px-3 py-1 rounded-lg '
          placeholder='password'
          ref={passwordRef}
          />

          <button onClick={copytoclipboard} className= 'bg-blue-800 outline-none rounded-lg text-white px-3 '>copy</button>
         </div>

         <div className='flex text-sm '>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value ={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
             defaultChecked={numberAllowed}
            className='cursor-pointer'
            onChange={()=>{
              setnumberAllowed((prev) => !prev)
            }}
            />
            <label>Numbers </label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
             defaultChecked={characterAllowed}
            className='cursor-pointer'
            onChange={()=>{
              setcharacterAllowed((prev) => !prev)
            }}
            />
            <label >Character</label>
          </div>
         </div>


        </div>
    </>
  )
}

export default App
