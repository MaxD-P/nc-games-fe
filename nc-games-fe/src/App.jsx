import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/nav'
import Home from './Components/home'
import AllReviews from './Components/All-Reviews'


function App() {

  return (
    <BrowserRouter>
    <>
    <Nav className="Nav" />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/reviews" element={<AllReviews/>}/>
      </Routes>
    </>
    </BrowserRouter>    
  )}
export default App
