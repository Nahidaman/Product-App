import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Api from './components/Api'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Api/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ProductDetails/:productid' element={<ProductDetails/>}/>
      </Routes>
      
    </>
  )
}

export default App
