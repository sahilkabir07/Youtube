import './App.css'
import MainBar from './Components/MainBar'
import Navbar from './Components/Navbar'
import SideBar from './Components/SideBar'

function App() {
 

  return (
    <>
     <Navbar/>
     <div className='flex'>
     <SideBar/>
     <MainBar/>
     </div>
    </>
  )
}

export default App
