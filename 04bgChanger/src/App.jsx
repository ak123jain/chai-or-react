import { useState } from "react"

  

function App() {
  
  const [color , setColor ] = useState("olive")

  return (
     <div className="w-full h-screen "
     style={{backgroundColor:color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0  " >  
         <div className="flex flex-wrap justify-center gap-3 bg-white  px-6 rounded-full py-1">
          <button
          onClick={()=>setColor("red")}
          className="outline-none rounded-full px-4 py-1 text-white " style={{background: "red"}}  
          >red</button>
           <button
            onClick={()=>setColor("blue")}
          className="outline-none rounded-full px-4 py-1 text-white" style={{background: "blue"}}  
          >blue</button>
           <button
            onClick={()=>setColor("green")}
          className="outline-none rounded-full px-4 py-1 text-white " style={{background: "green"}}  
          >green</button>
           <button
            onClick={()=>setColor("pink")}
          className="outline-none rounded-full px-4 py-1 text-white" style={{background: "pink"}}  
          >pink</button>
           <button
            onClick={()=>setColor("olive")}
          className="outline-none rounded-full px-4 py-1 text-white" style={{background: "olive"}}  
          >olive</button>
           <button
            onClick={()=>setColor("black")}
          className="outline-none rounded-full px-4 py-1 text-white " style={{background: "black"}}  
          >black</button>
           <button
            onClick={()=>setColor("red")}
          className="outline-none rounded-full px-4 py-1 text-white " style={{background: "red"}}  
          >red</button>
           <button
            onClick={()=>setColor("grey")}
          className="outline-none rounded-full px-4 py-1 text-white " style={{background: "grey"}}  
          >grey</button>
           <button
            onClick={()=>setColor("orange")}
          className="outline-none rounded-full px-4 py-1 text-white " style={{background: "orange"}}  
          >orange</button>
           
         </div>
      </div>
     </div>
  )
}

export default App