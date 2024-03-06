import { useState } from "react"

function App() {
const [color,setColor] = useState("olive")



  return (
    <div>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}></div>
     <div className="fixed flex flex-wrap justify-center
     bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg
         bg-white rounded-3xl px-3 py-2">
   <button
   onClick = {() => setColor("red")}
    className=" px-4 outline-none py-1 rounded-full text-white shadow-lg"  style ={{backgroundColor:"red"}}>
   red
   </button>
   <button 
   onClick = {() => setColor("blue")}
   className=" px-4 outline-none py-1 rounded-full text-white shadow-lg"  style ={{backgroundColor:"blue"}}>
   blue
   </button>
   <button 
   onClick = {() => setColor("black")}
   className=" px-4 outline-none py-1 rounded-full text-white shadow-lg"  style ={{backgroundColor:"black"}}>
   black
   </button>
   <button 
   onClick = {() => setColor("green")}
   className=" px-4 outline-none py-1 rounded-full text-white shadow-lg"  style ={{backgroundColor:"green"}}>
   green
   </button>
         </div>
     </div>
     </div>
    
  )
}

export default App
