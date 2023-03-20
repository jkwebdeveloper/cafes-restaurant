import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Gallery from './pages/Gallery'
import History from './pages/History'
import Home from './pages/Home'
import MenuCoffee from './pages/MenuCoffee'
import MenuRestaurant from './pages/MenuRestaurant'
import Reservation from './pages/Reservation'
import Restaurant from './pages/Restaurant'
import Services from './pages/Services'
import Team from './pages/Team'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Faq />} />
          <Route path="/" element={<Gallery />} />
          <Route path="/" element={<History />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/" element={<MenuCoffee />} />
          <Route path="/" element={<MenuRestaurant />} />
          <Route path="/" element={<Reservation />} />
          <Route path="/" element={<Services />} />
          <Route path="/" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
