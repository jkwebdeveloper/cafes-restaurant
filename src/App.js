import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import EmailTemplate from './components/EmailTemplate'
import Footer from './components/Footer'
import Header from './components/Header'
import Error404 from './pages/Error404'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
// const Faq = lazy(() => import('./pages/Faq'))
const Gallery = lazy(() => import('./pages/Gallery'))
const History = lazy(() => import('./pages/History'))
const MenuCoffee = lazy(() => import('./pages/MenuCoffee'))
const MenuRestaurant = lazy(() => import('./pages/MenuRestaurant'))
const Reservation = lazy(() => import('./pages/Reservation'))
const Restaurant = lazy(() => import('./pages/Restaurant'))
const Services = lazy(() => import('./pages/Services'))
const Team = lazy(() => import('./pages/Team'))

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="preloader">
            <div className="centrize full-width">
              <div className="vertical-center">
                <div className="spinner-logo">
                  <img src={require('./assets/images/logo1.png')} alt="" />
                  <div className="spinner-dot">
                    <div className="spinner-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/faq" element={<Faq />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/history" element={<History />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/menu-coffee" element={<MenuCoffee />} />
          <Route path="/menu-restaurant" element={<MenuRestaurant />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/*" element={<Error404 />} />
          {/* <Route path='/*' element={ <EmailTemplate/> }/> */}
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
