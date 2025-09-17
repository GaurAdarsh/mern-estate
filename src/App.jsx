import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter> 
   <Routes>
   <Route path='/' element={<Home/>}/> 
   <Route path='/about' element={<About/>}/>  
   <Route path='/sign-in' element={<Signin/>}/>
   <Route path='/profile' element={<Profile/>}/> 
   <Route path='/sign-up' element={<SignUp/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
