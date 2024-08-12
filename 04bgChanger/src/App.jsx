import { useState } from "react"

  

function App() {
  
  const [color , setColor ] = useState("green")

  return (
      <div className="w-full h-screen " style={{backgroundColor:color}}>
        <div className="fixed bottom-16 flex justify-center inset-x-0 ">
          <div className="fixed flex flex-wrap   bottom-16  px-4 py-4 gap-3 text-white  rounded-xl " style={{backgroundColor:"black"}}>
            <button
            onClick={()=> setColor("red")}
            className="rounded-2xl px-2 py-1"
            style={{backgroundColor:"red"}}
            >red</button>
            <button
            onClick={()=> setColor("blue")}
            className="rounded-2xl px-2 py-1"
            style={{backgroundColor:"blue"}}
            >blue</button><button
            onClick={()=> setColor("olive")}
            className="rounded-2xl px-2 py-1"
            style={{backgroundColor:"olive"}}
            >olive</button><button
            onClick={()=> setColor("black")}
            className="rounded-2xl px-2 py-1 border-white"
            style={{backgroundColor:"black"}}
            >black</button><button
            onClick={()=> setColor("orange")}
            className="rounded-2xl px-2 py-1"
            style={{backgroundColor:"orange"}}
            >orange</button><button
            onClick={()=> setColor("pink")}
            className="rounded-2xl px-2 py-1"
            style={{backgroundColor:"pink"}}
            >pink</button><button
            onClick={()=> setColor("brown")}
            className="rounded-2xl px-2 py-1"
            style={{backgroundColor:"brown"}}
            >brown</button><button
            onClick={()=> setColor("red")}
            className="rounded-2xl px-2 py-1"
            style={{backgroundColor:color}}
            >red</button>
          </div>
        </div>
      </div>
  )
}

export default App




{/* <div className="w-full h-screen "
      
      >
       <div className=" " >  
          <div className=" ">
           
            
          </div>
       </div>
      </div> */}



// import { useState } from "react"

  

// function App() {
  
//   const [color , setColor ] = useState("olive")

//   return (
//      <div className="w-full h-screen "
//      style={{backgroundColor:color}}
//      >
//       <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0  " >  
//          <div className="flex flex-wrap justify-center gap-3 bg-white  px-6 rounded-full py-1">
//           <button
//           onClick={()=>setColor("red")}
//           className="outline-none rounded-full px-4 py-1 text-white " style={{background: "red"}}  
//           >red</button>
//            <button
//             onClick={()=>setColor("blue")}
//           className="outline-none rounded-full px-4 py-1 text-white" style={{background: "blue"}}  
//           >blue</button>
//            <button
//             onClick={()=>setColor("green")}
//           className="outline-none rounded-full px-4 py-1 text-white " style={{background: "green"}}  
//           >green</button>
//            <button
//             onClick={()=>setColor("pink")}
//           className="outline-none rounded-full px-4 py-1 text-white" style={{background: "pink"}}  
//           >pink</button>
//            <button
//             onClick={()=>setColor("olive")}
//           className="outline-none rounded-full px-4 py-1 text-white" style={{background: "olive"}}  
//           >olive</button>
//            <button
//             onClick={()=>setColor("black")}
//           className="outline-none rounded-full px-4 py-1 text-white " style={{background: "black"}}  
//           >black</button>
//            <button
//             onClick={()=>setColor("red")}
//           className="outline-none rounded-full px-4 py-1 text-white " style={{background: "red"}}  
//           >red</button>
//            <button
//             onClick={()=>setColor("grey")}
//           className="outline-none rounded-full px-4 py-1 text-white " style={{background: "grey"}}  
//           >grey</button>
//            <button
//             onClick={()=>setColor("orange")}
//           className="outline-none rounded-full px-4 py-1 text-white " style={{background: "orange"}}  
//           >orange</button>
           
//          </div>
//       </div>
//      </div>
//   )
// }

// export default App