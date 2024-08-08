import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './component/MyNavbar'
import MyRoutes from './component/MyRoutes'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyNavbar/> */}
      <MyRoutes/>
      {/* <Home/> */}
    </>
  )
}

export default App
