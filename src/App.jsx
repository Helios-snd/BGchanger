import { useState } from 'react'

function App() {
  const [color, setColor] = useState("  #e7d3d3 ")

  return (
   <>
  <div className="w-full h-screen duration-200"   style ={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      <button 
      onClick={() => setColor("#e52165")}
      className="outline-none py-1 rounded-full text-white px-4 shadow-lg"
      style={{backgroundColor : "#e52165"}}>Red</button>

    <button
       onClick={() => setColor(" #077b8a")}
    className="outline-none py-1 rounded-full text-white px-4 shadow-lg"
      style={{backgroundColor : " #077b8a"}}>Green</button>

    <button
       onClick={() => setColor("#011f4b  ")}
    className="outline-none py-1 rounded-full text-white px-4 shadow-lg"
      style={{backgroundColor : "#011f4b "}}>Blue</button>

  <button
     onClick={() => setColor(" #12a4d9  ")}
    className="outline-none py-1 rounded-full text-white px-4 shadow-lg"
    style={{backgroundColor : " #12a4d9  "}}>
      Sky</button>
      

      <button
     onClick={() => setColor("   #ffc13b  ")}
    className="outline-none py-1 rounded-full text-white px-4 shadow-lg"
    style={{backgroundColor : "   #ffc13b "}}>
      Yellow</button>

      <button
     onClick={() => setColor("   #000000  ")}
    className="outline-none py-1 rounded-full text-white px-4 shadow-lg"
    style={{backgroundColor : "   #000000 "}}>
      Black</button>


    <button
     onClick={() => setColor("#500472  ")}
    className="outline-none py-1 rounded-full text-white px-4 shadow-lg"
    style={{backgroundColor : "  #500472"}}>
      Violet</button>
   
      <button
     onClick={() => setColor("#f5f0e1  ")}
    className="outline-none py-1 rounded-full text-#1e3d59 px-4 shadow-lg"
    style={{backgroundColor : "  #f5f0e1"}}>
      Almond</button>
   
    </div>
    </div>

  </div>
 
    
    

   
   </>
  )
}

export default App
