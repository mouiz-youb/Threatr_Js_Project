import "./App.css"
import {Routes , Route} from  "react-router-dom"
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test4 from './components/Test4'
import Test3 from './components/Test3'
import "./index.css"
import ScorePage from './components/ScorePage'
function App() {
  return (
    <div className='text-3xl overflow-hidden w-screen h-screen bg-[url("./images/bgcar.svg")]  bg-center bg-no-repeat bg-cover   '>
      
        <div className='w-full h-full bg-[rgba(0,0,0,0.336)]'>
      <Routes>
        <Route path ="/test1" element={<Test1/>}/>
        <Route path ="/test2" element={<Test2/>}/>
        <Route path ="/test3" element={<Test3/>}/>
        <Route path ="/test4" element={<Test4/>}/>
        <Route path ="/test5" element={<ScorePage/>}/>
      </Routes>
        </div>
    </div>
  )
}

export default App