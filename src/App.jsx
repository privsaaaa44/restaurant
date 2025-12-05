import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
// Default weight 400
import "@fontsource/dancing-script/400.css"; 
// Medium
import "@fontsource/dancing-script/500.css"; 
// Semi-bold
import "@fontsource/dancing-script/600.css"; 
// Bold
import "@fontsource/dancing-script/700.css"; 
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div>
   <Home/>
   <Navbar/>
    </div>
    <div  className='homenavbar'>
      <Footer/>

    </div>
      </>
  )
}

export default App
