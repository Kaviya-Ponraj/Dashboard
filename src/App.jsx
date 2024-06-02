
import './App.css'

import Dashboard from './Components/Dashboard'
// import Overview from './Components/Overview'
import Sidebar from './Components/Sidebar'


function App() {
  

  return (
    <>
    <div className='flex flex-col'>
   <div className="flex">
    <Sidebar />
    <Dashboard />
   </div>
  
   
  
   </div>
   </>
  )
}

export default App
