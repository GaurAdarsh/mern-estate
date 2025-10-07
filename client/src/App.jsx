import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Header from './assets/components/header'

function App() {

  return (
   <BrowserRouter> 
   <Header/>
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
