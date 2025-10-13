import React from 'react'
import "./App.css"
import {Routes , Route} from  "react-router-dom"
import Test1 from './components/Test1'
import Test2 from './components/Test2'
// import TheatreScene from "./TheatrJs/TheatreScene"
function App() {
  return (
    <div className='text-3xl overflow-hidden w-screen h-screen '>
      {/* theatre project  */}
        {/* <TheatreScene /> */}
      <Routes>
        <Route path ="test" element={<Test1/>}/>
        <Route path ="test1" element={<Test2/>}/>
      </Routes>
    </div>
  )
}

export default App