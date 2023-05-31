import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/nav'
import Home from './Components/home'
import AllReviews from './Components/All-Reviews'
import SingleReview from './Components/Single-Review'
import ReviewComments from './Components/Review-Comments'


function App() {

  return (
    <BrowserRouter>
    <>
    <Nav className="Nav" />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/reviews" element={<AllReviews/>}/>
      <Route path="/reviews/:review_id" element={<SingleReview/>}/>
      <Route path="/reviews/:review_id/comments" element={<ReviewComments/>}/>
      </Routes>
    </>
    </BrowserRouter>    
  )}
export default App
